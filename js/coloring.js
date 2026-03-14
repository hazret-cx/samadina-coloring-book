const SVG_NS = 'http://www.w3.org/2000/svg';

export class ColoringEngine {
  constructor(svgEl, overlayEl) {
    this.svg     = svgEl;
    this.overlay = overlayEl;
    this.history = [];
    this.currentColor = '#E8102E';
    this._tapBound   = this._onTap.bind(this);
    this._undoBound  = this._onTwoFinger.bind(this);
    this.onColorApplied = null;
  }

  attach() {
    this.svg.addEventListener('click',    this._tapBound);
    this.svg.addEventListener('touchend', this._tapBound,  { passive: false });
    this.svg.addEventListener('touchend', this._undoBound, { passive: true });
  }

  detach() {
    this.svg.removeEventListener('click',    this._tapBound);
    this.svg.removeEventListener('touchend', this._tapBound);
    this.svg.removeEventListener('touchend', this._undoBound);
  }

  setColor(hex) { this.currentColor = hex; }

  undo() {
    if (!this.history.length) return false;
    const { el, prev } = this.history.pop();
    el.style.fill = prev;
    return true;
  }

  clearPage() {
    this.svg.querySelectorAll('[data-c]').forEach(el => { el.style.fill = 'white'; });
    this.history = [];
  }

  _onTwoFinger(e) {
    if (e.changedTouches.length === 2 && e.touches.length === 0) this.undo();
  }

  _onTap(e) {
    const target = e.target.closest('[data-c]');
    if (!target) return;
    e.preventDefault();
    e.stopPropagation();

    const pt   = this._toSVGPoint(e);
    const prev = target.style.fill || 'white';

    this.history.push({ el: target, prev });
    if (this.history.length > 80) this.history.shift();

    this._ripple(pt);
    this._bloom(target, pt, this.currentColor, () => {
      target.style.fill = this.currentColor;
      this.onColorApplied?.();
    });
  }

  _toSVGPoint(e) {
    const touch = e.changedTouches?.[0] || e;
    const rect  = this.svg.getBoundingClientRect();
    const vb    = this.svg.viewBox.baseVal;
    return {
      x: ((touch.clientX - rect.left) / rect.width)  * vb.width,
      y: ((touch.clientY - rect.top)  / rect.height) * vb.height,
    };
  }

  // ── Ripple ring ──────────────────────────────────────────────
  _ripple(pt) {
    const c = document.createElementNS(SVG_NS, 'circle');
    c.setAttribute('cx', pt.x);
    c.setAttribute('cy', pt.y);
    c.setAttribute('r',  '1');
    c.setAttribute('fill',         'none');
    c.setAttribute('stroke',       this.currentColor);
    c.setAttribute('stroke-width', '2');
    c.setAttribute('opacity',      '0.55');
    this.overlay.appendChild(c);

    this._raf(180, (t) => {
      c.setAttribute('r',       String(1 + 26 * t));
      c.setAttribute('opacity', String(0.55 * (1 - t)));
    }, () => c.remove());
  }

  // ── Watercolour bloom ────────────────────────────────────────
  _bloom(target, pt, color, onDone) {
    const bbox = target.getBBox();
    // Max radius = corner furthest from tap point
    const corners = [
      [bbox.x,              bbox.y],
      [bbox.x + bbox.width, bbox.y],
      [bbox.x,              bbox.y + bbox.height],
      [bbox.x + bbox.width, bbox.y + bbox.height],
    ];
    const maxR = Math.max(...corners.map(([cx, cy]) =>
      Math.hypot(cx - pt.x, cy - pt.y)
    )) * 1.12;

    const defs = this.overlay.querySelector('defs');

    // ── Clip path (shape of the region) ──
    const clipId = `bc-${target.id}-${Date.now()}`;
    const clip   = document.createElementNS(SVG_NS, 'clipPath');
    clip.setAttribute('id', clipId);
    const shape  = target.cloneNode(true);
    shape.removeAttribute('id');
    shape.removeAttribute('data-c');
    shape.removeAttribute('style');
    shape.setAttribute('fill',   'white');
    shape.setAttribute('stroke', 'none');
    clip.appendChild(shape);
    defs.appendChild(clip);

    // ── Radial gradient (watercolour texture: lighter centre) ──
    const gradId = `bg-${Date.now()}`;
    const grad   = document.createElementNS(SVG_NS, 'radialGradient');
    grad.setAttribute('id', gradId);
    grad.setAttribute('gradientUnits', 'userSpaceOnUse');
    grad.setAttribute('cx', pt.x); grad.setAttribute('cy', pt.y);
    grad.setAttribute('r',  String(maxR));
    const s1 = document.createElementNS(SVG_NS, 'stop');
    s1.setAttribute('offset', '0%');
    s1.setAttribute('stop-color', color);
    s1.setAttribute('stop-opacity', '0.72');
    const s2 = document.createElementNS(SVG_NS, 'stop');
    s2.setAttribute('offset', '100%');
    s2.setAttribute('stop-color', color);
    s2.setAttribute('stop-opacity', '0.94');
    grad.appendChild(s1); grad.appendChild(s2);
    defs.appendChild(grad);

    // ── Bloom circle ──
    const circle = document.createElementNS(SVG_NS, 'circle');
    circle.setAttribute('cx',          pt.x);
    circle.setAttribute('cy',          pt.y);
    circle.setAttribute('r',           '0');
    circle.setAttribute('fill',        `url(#${gradId})`);
    circle.setAttribute('clip-path',   `url(#${clipId})`);
    circle.setAttribute('filter',      'url(#wc-filter)');
    this.overlay.appendChild(circle);

    // ── rAF animation (most reliable for SVG r attribute) ──
    this._raf(420, (t) => {
      // Ease out cubic
      const e = 1 - Math.pow(1 - t, 3);
      circle.setAttribute('r', String(maxR * e));
    }, () => {
      circle.remove();
      clip.remove();
      grad.remove();
      onDone();
    });
  }

  // ── rAF helper ──────────────────────────────────────────────
  _raf(duration, onFrame, onDone) {
    const start = performance.now();
    const step  = (now) => {
      const t = Math.min((now - start) / duration, 1);
      onFrame(t);
      if (t < 1) requestAnimationFrame(step);
      else onDone();
    };
    requestAnimationFrame(step);
  }
}

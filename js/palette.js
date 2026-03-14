export const COLOURS = [
  { hex: '#E8102E', label: 'Gjaku'       },
  { hex: '#E8651A', label: 'Perëndimi'   },
  { hex: '#FFD700', label: 'Dielli'      },
  { hex: '#2D6A4F', label: 'Pylli'       },
  { hex: '#52B788', label: 'Fusha'       },
  { hex: '#74C0FC', label: 'Qielli'      },
  { hex: '#1971C2', label: 'Deti'        },
  { hex: '#FF85A1', label: 'Trëndafili'  },
  { hex: '#8B5E3C', label: 'Toka'        },
  { hex: '#1A1A1A', label: 'Nata'        },
];

export class Palette {
  constructor({ trayEl, wrapEl, lineEl, onColorChange }) {
    this.tray     = trayEl;
    this.wrap     = wrapEl;
    this.line     = lineEl;
    this.onChange = onColorChange;
    this.current  = COLOURS[0].hex;
    this._open    = false;
    this._timer   = null;
    this._swatches = [];

    this._build();
    this._bindGestures();
    this.line.style.background = this.current;
  }

  show() {
    if (this._open) return;
    this._open = true;
    this.tray.classList.remove('closing');
    void this.tray.offsetWidth;
    this.tray.classList.add('open');
    this._scheduleClose();
  }

  hide() {
    if (!this._open) return;
    this._open = false;
    clearTimeout(this._timer);
    this.tray.classList.remove('open');
    this.tray.classList.add('closing');
    this.tray.addEventListener('animationend', () => {
      this.tray.classList.remove('closing');
    }, { once: true });
  }

  toggle() { this._open ? this.hide() : this.show(); }

  _build() {
    // Handle bar
    const handle = document.createElement('div');
    handle.className = 'palette-handle';
    this.tray.appendChild(handle);

    COLOURS.forEach(({ hex, label }, i) => {
      const el = document.createElement('div');
      el.className = 'swatch' + (i === 0 ? ' active' : '');
      el.style.background = hex;

      const lbl = document.createElement('span');
      lbl.className = 'swatch-label';
      lbl.textContent = label;
      el.appendChild(lbl);

      el.addEventListener('click', (e) => {
        e.stopPropagation();
        this._select(hex, el);
      });

      this.tray.appendChild(el);
      this._swatches.push(el);
    });
  }

  _select(hex, el) {
    this.current = hex;
    this._swatches.forEach(s => s.classList.remove('active'));
    el.classList.add('active');
    this.line.style.background = hex;
    this.onChange(hex);
    this._scheduleClose();
  }

  _scheduleClose() {
    clearTimeout(this._timer);
    this._timer = setTimeout(() => this.hide(), 3200);
  }

  _bindGestures() {
    // Swipe up from bottom edge
    let sy = 0;
    document.addEventListener('touchstart', e => {
      sy = e.touches[0].clientY;
    }, { passive: true });
    document.addEventListener('touchend', e => {
      const dy   = sy - e.changedTouches[0].clientY;
      const near = sy > window.innerHeight * 0.72;
      if (dy > 28 && near && !this._open) this.show();
    }, { passive: true });

    // Tap palette tray to reset timer
    this.tray.addEventListener('touchstart', () => {
      this._scheduleClose();
    }, { passive: true });
  }
}

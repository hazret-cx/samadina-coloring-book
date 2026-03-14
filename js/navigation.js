export const PAGES = [
  { title: 'Fshati i Maleve' },
  { title: 'Shqiponja'       },
  { title: 'Vajza Shqiptare' },
];

export class Navigator {
  constructor({ scene, dots, titleEl, onPageChange }) {
    this.scene    = scene;
    this.dots     = [...dots];
    this.titleEl  = titleEl;
    this.onChange = onPageChange;
    this.current  = 0;
    this.total    = PAGES.length;
    this._locked  = false;

    this._bindDots();
    this._bindSwipe();
  }

  get currentPage() { return this.current; }

  goTo(n, dir = 'fwd') {
    if (this._locked || n === this.current || n < 0 || n >= this.total) return;
    this._locked = true;

    const exitAngle  = dir === 'fwd' ? -85 : 85;
    const enterAngle = dir === 'fwd' ?  85 : -85;

    // Exit: rotate outgoing page
    this.scene.style.transition = `transform 220ms cubic-bezier(0.4, 0, 1, 1)`;
    this.scene.style.transform  =
      `perspective(1100px) rotateY(${exitAngle}deg) scale(0.94)`;

    setTimeout(() => {
      // Swap content
      this.current = n;
      this.onChange(n);
      this._updateDots();
      this._showTitle();

      // Place incoming page on the other side
      this.scene.classList.add('no-transition');
      this.scene.style.transform =
        `perspective(1100px) rotateY(${enterAngle}deg) scale(0.94)`;

      requestAnimationFrame(() => requestAnimationFrame(() => {
        this.scene.classList.remove('no-transition');
        this.scene.style.transition =
          `transform 280ms cubic-bezier(0.22, 1.1, 0.36, 1)`;
        this.scene.style.transform = `perspective(1100px) rotateY(0deg) scale(1)`;
        setTimeout(() => { this._locked = false; }, 300);
      }));
    }, 225);
  }

  _updateDots() {
    this.dots.forEach((d, i) => {
      d.classList.toggle('active', i === this.current);
      if (i === this.current) {
        d.classList.remove('pulse');
        void d.offsetWidth;
        d.classList.add('pulse');
        d.addEventListener('animationend', () => d.classList.remove('pulse'), { once: true });
      }
    });
  }

  _showTitle() {
    const el = this.titleEl;
    el.textContent = PAGES[this.current].title;
    el.classList.remove('show');
    void el.offsetWidth;
    el.classList.add('show');
  }

  _bindDots() {
    this.dots.forEach((d, i) => {
      d.addEventListener('click', () => {
        this.goTo(i, i >= this.current ? 'fwd' : 'back');
      });
    });
  }

  _bindSwipe() {
    const wrap = this.scene.closest('.book-wrap');
    let startX = 0, startY = 0, moved = false;

    wrap.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      moved  = false;
    }, { passive: true });

    wrap.addEventListener('touchmove', e => {
      const dx = Math.abs(e.touches[0].clientX - startX);
      const dy = Math.abs(e.touches[0].clientY - startY);
      if (dx > dy && dx > 10) moved = true;
    }, { passive: true });

    wrap.addEventListener('touchend', e => {
      if (!moved) return;
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) < 48) return;
      this.goTo(
        diff > 0 ? this.current + 1 : this.current - 1,
        diff > 0 ? 'fwd' : 'back'
      );
    }, { passive: true });
  }
}

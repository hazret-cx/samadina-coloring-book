import { ColoringEngine }      from './coloring.js';
import { Navigator, PAGES }    from './navigation.js';
import { Palette }             from './palette.js';
import { PAGE1_SVG, PAGE2_SVG, PAGE3_SVG } from './pages.js';

const SVGS      = [PAGE1_SVG, PAGE2_SVG, PAGE3_SVG];
const STORE_KEY = 'coloursAlbania-state';
const COVER_KEY = 'coloursAlbania-coverSeen';
const HINT_KEY  = 'coloursAlbania-hintSeen';

// ── State persistence ────────────────────────────────────────
function loadState()  {
  try { return JSON.parse(localStorage.getItem(STORE_KEY) || '{}'); } catch { return {}; }
}
function saveState(s) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(s)); } catch {}
}
const appState = loadState();

// ── DOM refs ─────────────────────────────────────────────────
const bookWrap   = document.getElementById('bookWrap');
const pageScene  = document.getElementById('pageScene');
const card       = document.getElementById('coloringCard');
const titleEl    = document.getElementById('pageTitle');
const bloomEl    = document.getElementById('bloomOverlay');
const palWrap    = document.getElementById('paletteWrap');
const palTray    = document.getElementById('paletteTray');
const colourLine = document.getElementById('colourLine');
const dots       = document.querySelectorAll('.dot');
const coverEl    = document.getElementById('cover');
const hintEl     = document.getElementById('hint');

let engine   = null;
let curPage  = 0;

// ── Palette ───────────────────────────────────────────────────
const palette = new Palette({
  trayEl: palTray,
  wrapEl: palWrap,
  lineEl: colourLine,
  onColorChange: (hex) => engine?.setColor(hex),
});

// Tap outside art → toggle palette
bookWrap.addEventListener('click', (e) => {
  if (!e.target.closest('[data-c]')) palette.toggle();
});

// ── Render page ───────────────────────────────────────────────
function renderPage(n) {
  // Remove old SVG
  card.querySelectorAll('svg.page-svg').forEach(s => s.remove());

  // Parse and inject SVG
  const tmp = document.createElement('div');
  tmp.innerHTML = SVGS[n];
  const svg = tmp.querySelector('svg');
  card.insertBefore(svg, card.firstChild);

  // Detach old engine, create new one
  engine?.detach();
  engine = new ColoringEngine(svg, bloomEl);
  engine.setColor(palette.current);
  engine.onColorApplied = () => persistFills(n, svg);
  engine.attach();

  // Restore saved colours for this page
  svg.querySelectorAll('[data-c]').forEach(el => {
    const key   = `p${n}-${el.id}`;
    const saved = appState[key];
    el.style.fill = saved || 'white';
  });
}

function persistFills(pageIdx, svg) {
  svg.querySelectorAll('[data-c]').forEach(el => {
    if (!el.id) return;
    const key = `p${pageIdx}-${el.id}`;
    const val = el.style.fill;
    if (val && val !== 'white' && val !== 'rgb(255, 255, 255)') {
      appState[key] = val;
    } else {
      delete appState[key];
    }
  });
  saveState(appState);
}

// ── Navigator ─────────────────────────────────────────────────
const nav = new Navigator({
  scene: pageScene,
  dots,
  titleEl,
  onPageChange: (n) => { curPage = n; renderPage(n); },
});

// ── Cover card ────────────────────────────────────────────────
function boot() {
  const seen = localStorage.getItem(COVER_KEY);
  if (seen) {
    startApp();
  } else {
    coverEl.classList.remove('hidden');
    coverEl.addEventListener('click', () => {
      coverEl.classList.add('exit');
      localStorage.setItem(COVER_KEY, '1');
      setTimeout(() => {
        coverEl.classList.add('hidden');
        coverEl.classList.remove('exit');
        startApp();
      }, 520);
    }, { once: true });
  }
}

function startApp() {
  renderPage(0);
  if (!localStorage.getItem(HINT_KEY)) {
    setTimeout(showHint, 600);
  }
}

// ── Hint ─────────────────────────────────────────────────────
function showHint() {
  hintEl.classList.remove('hidden');
  localStorage.setItem(HINT_KEY, '1');
  setTimeout(() => hintEl.classList.add('hidden'), 2600);
}

// ── Service Worker ────────────────────────────────────────────
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}

// ── Boot ──────────────────────────────────────────────────────
boot();

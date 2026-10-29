(() => {
  'use strict';
  const button = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-nav');
  if (!button || !menu) return;
  const close = () => { menu.hidden = true; button.setAttribute('aria-expanded', 'false'); button.setAttribute('aria-label', 'Open navigation'); };
  button.addEventListener('click', () => {
    menu.hidden = !menu.hidden;
    button.setAttribute('aria-expanded', String(!menu.hidden));
    button.setAttribute('aria-label', menu.hidden ? 'Open navigation' : 'Close navigation');
  });
  menu.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !menu.hidden) { close(); button.focus(); } });
  document.addEventListener('click', event => { if (!menu.hidden && !menu.contains(event.target) && !button.contains(event.target)) close(); });
  const match = window.matchMedia('(min-width: 761px)');
  if (match.addEventListener) match.addEventListener('change', e => { if (e.matches) close(); });
})();
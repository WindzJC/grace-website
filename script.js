(function () {
  'use strict';

  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    var close = function () { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); };
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) close(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) { close(); toggle.focus(); }
    });
  }

  // "Today I need to hear that…" — one book at a time when JS is on;
  // without JS all three books stay visible and the chooser stays hidden.
  var chooser = document.querySelector('[data-chooser]');
  if (!chooser) return;
  var buttons = Array.prototype.slice.call(chooser.querySelectorAll('.choice'));
  var panels = buttons.map(function (b) { return document.getElementById(b.getAttribute('data-target')); });

  function show(i) {
    buttons.forEach(function (b, j) {
      b.setAttribute('aria-pressed', i === j ? 'true' : 'false');
      if (panels[j]) panels[j].hidden = i !== j;
    });
  }

  buttons.forEach(function (b, i) {
    b.addEventListener('click', function () { show(i); });
  });

  chooser.hidden = false;
  show(0);
})();

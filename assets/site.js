(function () {
  var root = document.documentElement, key = 'sk-lang', lang;
  try { lang = localStorage.getItem(key); } catch (e) {}
  if (lang !== 'sw' && lang !== 'en') lang = (navigator.language || '').slice(0, 2) === 'en' ? 'en' : 'sw';
  function apply(l) {
    root.setAttribute('data-lang', l);
    document.querySelectorAll('.langswitch button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === l));
    });
    try { localStorage.setItem(key, l); } catch (e) {}
  }
  root.setAttribute('data-lang', lang);
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.langswitch button').forEach(function (b) {
      b.addEventListener('click', function () { apply(b.dataset.lang); });
    });
    apply(lang);
  });
})();

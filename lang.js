(function () {
  var buttons = document.querySelectorAll('.lang button');
  var sections = document.querySelectorAll('[data-i18n]');

  function setLang(lang) {
    sections.forEach(function (el) {
      el.classList.toggle('hidden', el.getAttribute('data-i18n') !== lang);
    });
    buttons.forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    document.documentElement.lang = lang;
    try { localStorage.setItem('hc-lang', lang); } catch (e) {}
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.getAttribute('data-lang'));
    });
  });

  var saved = 'th';
  try { saved = localStorage.getItem('hc-lang') || 'th'; } catch (e) {}
  setLang(saved);
})();

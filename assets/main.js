(function () {
  var saved = 'en';
  try { saved = localStorage.getItem('site-lang') || 'en'; } catch (e) {}
  document.body.classList.add('lang-' + saved);

  var btn = document.getElementById('lang-toggle');
  function label() {
    btn.textContent = document.body.classList.contains('lang-en') ? '日本語' : 'English';
  }
  if (btn) {
    label();
    btn.addEventListener('click', function () {
      var toJa = document.body.classList.contains('lang-en');
      document.body.classList.toggle('lang-en', !toJa);
      document.body.classList.toggle('lang-ja', toJa);
      try { localStorage.setItem('site-lang', toJa ? 'ja' : 'en'); } catch (e) {}
      label();
    });
  }
})();

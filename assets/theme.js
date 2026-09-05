// Wiring del pulsante tema. L'IMPOSTAZIONE iniziale del tema (per evitare un
// lampo del tema sbagliato al caricamento) è invece inline in ogni pagina,
// PRIMA del CSS — vedi il piccolo <script> in <head> di ogni file .html.
(function () {
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('wt-theme', theme); } catch (e) {}
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') || 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  });
})();

/* Ana sayfa için aşamalı iyileştirme; içerik ve bağlantılar JS olmadan da erişilebilir. */
(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('navigation');
  if (!header || !toggle || !nav) return;
  toggle.hidden = false;
  header.classList.add('enhanced');
  const close = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  header.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      close();
      toggle.focus();
    }
  });
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a') && window.matchMedia('(max-width: 760px)').matches) {
      close();
      toggle.focus();
    }
  });
  window.matchMedia('(max-width: 760px)').addEventListener('change', close);
})();

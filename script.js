(() => {
  const bodyPage = document.body.dataset.page;
  const navLinks = document.querySelectorAll('[data-nav]');

  navLinks.forEach((link) => {
    if (link.dataset.nav === bodyPage) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  const toggle = document.querySelector('.nav-toggle');
  const linksWrap = document.getElementById('nav-links');

  if (toggle && linksWrap) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      linksWrap.classList.toggle('open');
    });
  }
})();

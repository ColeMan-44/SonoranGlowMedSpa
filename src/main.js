const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('is-open');
  });
});
const dialog = document.querySelector('#consultation-dialog');
document.querySelector('#consultation-button').addEventListener('click', () => dialog.showModal());
dialog.querySelectorAll('button').forEach((button) => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
document.querySelector('#year').textContent = new Date().getFullYear();

// Keep content visible without JavaScript and when reduced motion is preferred.
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.about-copy, .botanical-profile, .treatment-card, .experience-visual, .approach-copy').forEach((element) => {
    element.classList.add('reveal-pending');
    requestAnimationFrame(() => {
      element.classList.add('reveal-ready');
      observer.observe(element);
    });
  });
}

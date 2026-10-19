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
const consultationButton = document.querySelector('#consultation-button');
if (dialog && consultationButton) {
  consultationButton.addEventListener('click', () => dialog.showModal());
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
}

document.querySelectorAll('[data-consultation-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const fields = [...form.querySelectorAll('input, textarea')];
    fields.forEach((field) => field.setCustomValidity(field.value.trim() ? '' : 'Please complete this field.'));
    if (!form.reportValidity()) return;
    const status = form.querySelector('.form-status');
    status.textContent = 'Thanks for trying the form! This is a demo — your message has not been sent. Message delivery is coming soon.';
  });
  form.addEventListener('input', (event) => {
    if (event.target.matches('input, textarea')) event.target.setCustomValidity('');
    form.querySelector('.form-status').textContent = '';
  });
});
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

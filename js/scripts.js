document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Bootstrap ScrollSpy
  if (typeof bootstrap !== 'undefined') {
    new bootstrap.ScrollSpy(document.body, {
      target: '#navbarNav',
      offset: 80,
    });
  }

  // AOS Init
  if (typeof AOS !== 'undefined') {
    AOS.init({ once: false });
  }
});

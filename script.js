/* ════════════════════════════════════════
   NAVIGATION
   ════════════════════════════════════════ */
function navigateTo(page) {
  // Update nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });

  // Show/hide pages
  document.querySelectorAll('.page-section').forEach(section => {
    section.classList.remove('active');
  });
  const target = document.getElementById('page-' + page);
  if (target) {
    target.classList.add('active');
    // Re-trigger animations by briefly removing and re-adding content
    const animated = target.querySelectorAll('[class*="animation"]');
    animated.forEach(el => {
      el.style.animation = 'none';
      el.offsetHeight; // trigger reflow
      el.style.animation = '';
    });
  }

  // Show hero text only on work page
  const heroContent = document.getElementById('hero-content');
  if (heroContent) {
    heroContent.classList.toggle('hidden', page !== 'work');
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ════════════════════════════════════════
   FORMSPREE FORM HANDLING (AJAX)
   ════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const data = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' },
      })
        .then(response => {
          if (response.ok) {
            form.style.display = 'none';
            successMsg.style.display = 'block';
            form.reset();
          } else {
            alert('Oops! Something went wrong. Please try again.');
          }
        })
        .catch(() => {
          alert('Oops! Something went wrong. Please try again.');
        });
    });
  }
});

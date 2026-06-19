// ============================
// OUD & EARTH — MAIN JS
// ============================

// ===== DARK / LIGHT MODE TOGGLE =====
document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  // Apply saved theme on page load
  const savedTheme = sessionStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    if (themeToggle) themeToggle.textContent = '☀️';
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      body.classList.toggle('dark-mode');
      const isDark = body.classList.contains('dark-mode');
      themeToggle.textContent = isDark ? '☀️' : '🌙';
      sessionStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
});


// ===== DARK / LIGHT MODE TOGGLE =====
document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  // Apply saved theme on page load
  const savedTheme = sessionStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    if (themeToggle) themeToggle.textContent = '☀️';
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      body.classList.toggle('dark-mode');
      const isDark = body.classList.contains('dark-mode');
      themeToggle.textContent = isDark ? '☀️' : '🌙';
      sessionStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
});


// ===== CONTACT FORM VALIDATION =====
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (!form) return; // Only run this on the contact page

  const successMessage = document.getElementById('formSuccess');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.querySelectorAll('.form-control, .form-select').forEach(el => el.classList.remove('is-invalid'));

    // Name validation
    const name = document.getElementById('name');
    if (name.value.trim().length < 2) {
      showError('nameError', name, 'Please enter your full name.');
      isValid = false;
    }

    // Email validation
    const email = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      showError('emailError', email, 'Please enter a valid email address.');
      isValid = false;
    }

    // Phone validation (optional, but if filled must look valid)
    const phone = document.getElementById('phone');
    const phonePattern = /^[0-9+\s-]{7,15}$/;
    if (phone.value.trim() !== '' && !phonePattern.test(phone.value.trim())) {
      showError('phoneError', phone, 'Please enter a valid phone number.');
      isValid = false;
    }

    // Subject validation
    const subject = document.getElementById('subject');
    if (subject.value === '') {
      showError('subjectError', subject, 'Please choose a subject.');
      isValid = false;
    }

    // Message validation
    const message = document.getElementById('message');
    if (message.value.trim().length < 10) {
      showError('messageError', message, 'Your message should be at least 10 characters.');
      isValid = false;
    }

    if (isValid) {
      form.reset();
      successMessage.style.display = 'block';
      successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Hide success message after a few seconds
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 6000);
    }
  });

  function showError(errorId, inputEl, message) {
    document.getElementById(errorId).textContent = message;
    inputEl.classList.add('is-invalid');
  }
});
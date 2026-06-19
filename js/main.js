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
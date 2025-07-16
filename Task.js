/ Mobile menu toggle
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('show');
});

// Theme toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const btn = document.getElementById('theme-toggle');
  btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Contact form submission (demo only)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thanks! Your message was submitted.");
  this.reset();
});

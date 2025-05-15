// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Dark mode toggle
  document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
  
  // Form alert
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    this.reset(); // Clear form
  });
  
  // Dynamic year
  document.getElementById('year').textContent = new Date().getFullYear();
  
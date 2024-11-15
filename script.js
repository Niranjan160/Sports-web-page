// Toggle menu for mobile
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  }
  

  function registerForMarathon() {
    alert("Thank you for registering for Marathon 2024! We'll contact you with more details.");
  }
  
  // Alert message for "Explore Now" button
  function showAlert() {
    alert("Welcome to SportsHub! Explore our site for the latest updates.");
  }
  
  // Simple form validation
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
  });
  
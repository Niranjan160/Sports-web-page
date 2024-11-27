
  // Alert message for "Explore Now" button
  function showAlert() {
    alert("Welcome to SportsHub! Explore our site for the latest updates.");
  }
  
  // Simple form validation
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
  });  

  // Function to open the image in full size
function viewFullSize(element) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("fullImage");
  
  // Set the source of the modal image to the clicked image's source
  modal.style.display = "flex";
  modalImg.src = element.src;
}

// Function to close the modal when clicked outside the image
function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

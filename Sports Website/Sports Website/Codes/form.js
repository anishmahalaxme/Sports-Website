document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Clear previous errors
    clearContactErrors();
  
    // Validate form fields
    let isValid = true;
  
    // Name validation
    const contactName = document.getElementById('contactName').value.trim();
    if (contactName === '') {
      isValid = false;
      document.getElementById('contactNameError').innerText = 'Name is required';
    }
  
    // Email validation
    const contactEmail = document.getElementById('contactEmail').value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; 
    if (!contactEmail.match(emailPattern)) {
      isValid = false;
      document.getElementById('contactEmailError').innerText = 'Enter a valid email (ending with @gmail.com)';
    }
  
    // Phone validation (should be 10 digits)
    const contactPhone = document.getElementById('contactPhone').value.trim();
    const phonePattern = /^\d{10}$/; // Regular expression for exactly 10 digits
    if (!contactPhone.match(phonePattern)) {
      isValid = false;
      document.getElementById('contactPhoneError').innerText = 'Phone number must be 10 digits';
    }
  
    // Message validation
    const contactMessage = document.getElementById('contactMessage').value.trim();
    if (contactMessage === '') {
      isValid = false;
      document.getElementById('contactMessageError').innerText = 'Message cannot be empty';
    }
  
    // If the form is valid
    if (isValid) {
      // Show success message
      alert('Your message has been sent successfully!');
  
      // Reset the form
      document.getElementById('contact-form').reset();
  
      // Clear error messages (if any were displayed before)
      clearContactErrors();
    }
  });
  
  // Function to clear all error messages
  function clearContactErrors() {
    const errorMessages = document.querySelectorAll('.contactError');
    errorMessages.forEach(function (error) {
      error.innerText = '';
    });
  }
  
  // Event listeners to remove error messages on typing valid input
  document.getElementById('contactName').addEventListener('input', function () {
    const contactNameError = document.getElementById('contactNameError');
    if (this.value.trim() !== '') {
      contactNameError.innerText = '';
    }
  });
  
  document.getElementById('contactEmail').addEventListener('input', function () {
    const contactEmailError = document.getElementById('contactEmailError');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (this.value.trim().match(emailPattern)) {
      contactEmailError.innerText = ''; // Clear error message if the email format is correct
    }
  });
  
  document.getElementById('contactPhone').addEventListener('input', function () {
    const contactPhoneError = document.getElementById('contactPhoneError');
    const phonePattern = /^\d{10}$/;
    if (this.value.trim().match(phonePattern)) {
      contactPhoneError.innerText = ''; // Clear error message if the phone number is valid
    }
  });
  
  document.getElementById('contactMessage').addEventListener('input', function () {
    const contactMessageError = document.getElementById('contactMessageError');
    if (this.value.trim() !== '') {
      contactMessageError.innerText = '';
    }
  });



  
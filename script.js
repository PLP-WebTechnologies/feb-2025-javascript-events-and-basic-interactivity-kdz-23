document.getElementById('credentialsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Retrieve form data
    const firstName = document.getElementById('firstName').value;
    const lastName  = document.getElementById('lastName').value;
    const phone     = document.getElementById('phone').value;
    const address   = document.getElementById('address').value;
    const email     = document.getElementById('email').value;
  
    // Store data in localStorage
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('phone', phone);
    localStorage.setItem('address', address);
    localStorage.setItem('email', email);
  
    // Redirect to display.html
    window.location.href = 'display.html';
  });
  
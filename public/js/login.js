// login.js

// Function to handle the login process
function login() {
  event.preventDefault(); // Prevent default form submission behavior

  // Get the farm ID and password entered by the user
  const farmId = document.getElementById('farm-id').value;
  const password = document.getElementById('password').value;

  // Check if the entered credentials match the hardcoded admin credentials
  if (farmId === "admin" && password === "admin123") {
    // If credentials match, redirect to the dashboard page
    window.location.href = "dashboard.html";
  } else {
    // If credentials don't match, display an error message
    alert("Invalid Farm ID or Password");
  }
}

// Function to handle the farm registration process
function register() {
  event.preventDefault(); // Prevent default form submission behavior

  // Get the farm name, email, password, and repeated password entered by the user
  const farmName = document.getElementById('farm-name').value;
  const farmEmail = document.getElementById('farm-email').value;
  const password = document.getElementById('farm-password').value;
  const repeatPassword = document.getElementById('farm-repeat-password').value;

  // Check if the password and repeated password match
  if (password === repeatPassword) {
    // If passwords match, create an object with the farm registration data
    const formData = {
      farmName,
      farmEmail,
      password
    };

    // Send a POST request to the '/register' endpoint with the registration data
    fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        // Check if the registration was successful based on the response from the server
        if (data.success) {
          // If successful, redirect to the dashboard page
          window.location.href = "dashboard.html";
        } else {
          // If registration failed, display an error message
          alert("Registration failed. Please try again.");
        }
      })
      .catch(error => {
        // If there was an error during registration, log the error and display an error message
        console.error('Error registering farm:', error);
        alert("Registration failed. Please try again.");
      });
  } else {
    // If passwords don't match, display an error message
    alert("Passwords do not match");
  }
}
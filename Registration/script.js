document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("register-form");

  // Form submission event listener
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting by default

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document
      .getElementById("confirm-password")
      .value.trim();

    // Validation for empty fields
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all the fields.");
      return;
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Password matching check
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // If everything is valid, simulate a successful registration
    alert("Registration successful!");

    // Optionally, you can clear the form or redirect the user here:
    form.reset();
  });
});

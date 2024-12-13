document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("forgot-password-form");

  // Form submission event listener
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById("email").value.trim();

    // Validation for empty email field
    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Simulate sending reset instructions to the email
    alert("Password reset instructions have been sent to your email.");

    // Optionally, reset the form after successful submission
    form.reset();
  });
});

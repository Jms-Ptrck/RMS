document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const usernameInput = document.querySelector(
    'input[type="text"]:nth-of-type(1)'
  );
  const passwordInput = document.querySelector(
    'input[type="text"]:nth-of-type(2)'
  );

  form.addEventListener("submit", function (event) {
    // Prevent form submission
    event.preventDefault();

    // Trim the input values to remove leading/trailing spaces
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Check if username or password fields are empty
    if (!username || !password) {
      alert("Please fill in both username and password");
      return;
    }

    // If validation passes, simulate form submission or proceed with other actions
    alert("Form submitted successfully");
    // Here you can call an API or do other things like redirecting the user
    // form.submit(); // Uncomment this line to actually submit the form
  });
});

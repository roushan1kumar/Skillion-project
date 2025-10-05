// Simple client-side contact form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Clear all error messages
    form.querySelectorAll(".error-msg").forEach((el) => (el.textContent = ""));

    // Validate Name
    if (name === "") {
      setError("name", "Name is required.");
      valid = false;
    }

    // Validate Email
    if (email === "") {
      setError("email", "Email is required.");
      valid = false;
    } else if (!isValidEmail(email)) {
      setError("email", "Please enter a valid email address.");
      valid = false;
    }

    // Validate Message
    if (message === "") {
      setError("message", "Message cannot be empty.");
      valid = false;
    }

    if (valid) {
      alert("Thank you! Your message has been sent successfully.");
      form.reset();
    }
  });

  function setError(fieldId, message) {
    const input = document.getElementById(fieldId);
    const errorMsg = input.nextElementSibling;
    errorMsg.textContent = message;
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});

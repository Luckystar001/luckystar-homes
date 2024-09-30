
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("register-form");
  const errorMessage = document.getElementById("error-message");

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword =
      document.getElementById("confirm-password").value;
    const userType = document.getElementById("user-type").value;
    const phone = document.getElementById("phone").value;

    // Simple validation
    if (password !== confirmPassword) {
      showError("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      showError("Password must be at least 8 characters long");
      return;
    }

    // Simulating registration process
    console.log("Registration data:", {
      firstName,
      lastName,
      email,
      userType,
      phone,
    });
    alert("Registration successful! Redirecting to login page...");
    window.location.href = "https://websim-marketplace/login";
  });

  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
  }

  // Add some simple animations
  const inputs = document.querySelectorAll("input, select");
  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.style.transform = "scale(1.02)";
      input.style.transition = "transform 0.3s ease";
    });
    input.addEventListener("blur", () => {
      input.style.transform = "scale(1)";
    });
  });

  // Password strength indicator
  const passwordInput = document.getElementById("password");
  const strengthIndicator = document.createElement("div");
  strengthIndicator.style.height = "5px";
  strengthIndicator.style.marginTop = "5px";
  strengthIndicator.style.transition = "all 0.3s ease";
  passwordInput.parentElement.appendChild(strengthIndicator);

  passwordInput.addEventListener("input", () => {
    const strength = calculatePasswordStrength(passwordInput.value);
    updateStrengthIndicator(strength);
  });

  function calculatePasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/\d/)) strength++;
    if (password.match(/[^a-zA-Z\d]/)) strength++;
    return strength;
  }

  function updateStrengthIndicator(strength) {
    const colors = ["#e74c3c", "#f39c12", "#f1c40f", "#2ecc71"];
    strengthIndicator.style.backgroundColor = colors[strength];
    strengthIndicator.style.width = `${(strength + 1) * 25}%`;
  }
});

document
.getElementById("viewing-form")
.addEventListener("submit", function (e) {
  e.preventDefault();

  // In a real application, you would send this data to a server
  // Here we'll just simulate a successful booking

  // Get form values
  const property = document.getElementById("property").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // Log the booking details (in a real app, you'd send this to a server)
  console.log("Booking Details:", {
    property,
    date,
    time,
    name,
    email,
    phone,
    message,
  });

  // Show confirmation message
  document.getElementById("confirmation").style.display = "block";

  // Reset form
  this.reset();

  // Scroll to confirmation message
  document
    .getElementById("confirmation")
    .scrollIntoView({ behavior: "smooth" });

  // Hide confirmation message after 5 seconds
  setTimeout(() => {
    document.getElementById("confirmation").style.display = "none";
  }, 5000);
});

// Set minimum date for booking to today
const today = new Date().toISOString().split("T")[0];
document.getElementById("date").setAttribute("min", today);

// Add some basic form validation
const form = document.getElementById("viewing-form");
const inputs = form.querySelectorAll("input, select, textarea");

inputs.forEach((input) => {
input.addEventListener("invalid", (event) => {
  event.preventDefault();
  input.classList.add("error");
});

input.addEventListener("input", () => {
  input.classList.remove("error");
});
});

function toggleNav() {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("active");
}
function editProfile() {
    alert("Redirecting to profile edit page...");
  }

  function viewSearch(searchId) {
    alert(`Viewing results for saved search #${searchId}`);
  }

  function viewProperty(propertyId) {
    alert(`Viewing details for property #${propertyId}`);
  }

  function scheduleViewing(propertyId) {
    alert(`Scheduling a viewing for property #${propertyId}`);
  }

  // document.addEventListener("DOMContentLoaded", () => {
  //   // Add hover effects to property items
  //   const propertyItems = document.querySelectorAll(".property-item");
  //   propertyItems.forEach((item) => {
  //     item.addEventListener("mouseenter", () => {
  //       item.style.transform = "scale(1.02)";
  //       item.style.transition = "transform 0.3s ease";
  //       item.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.1)";
  //     });
  //     item.addEventListener("mouseleave", () => {
  //       item.style.transform = "scale(1)";
  //       item.style.boxShadow = "none";
  //     });
  //   });

  //   // Simulated real-time updates
  //   setInterval(() => {
  //     const statCards = document.querySelectorAll(".stat-card h3");
  //     const randomCard =
  //       statCards[Math.floor(Math.random() * statCards.length)];
  //     const currentValue = parseInt(randomCard.textContent);
  //     randomCard.textContent = currentValue + 1;
  //     randomCard.style.color = "#4caf50";
  //     setTimeout(() => {
  //       randomCard.style.color = "#333";
  //     }, 1000);
  //   }, 8000);

  //   // Simulated map interaction
  //   const mapContainer = document.getElementById("map-container");
  //   mapContainer.addEventListener("click", () => {
  //     alert(
  //       "Interacting with the map. In a real application, this would allow zooming, panning, and selecting properties."
  //     );
  //   });

  //   // Add a simple animation to the map container
  //   let hue = 0;
  //   setInterval(() => {
  //     hue = (hue + 1) % 360;
  //     mapContainer.style.backgroundColor = `hsl(${hue}, 50%, 95%)`;
  //   }, 100);
  // });

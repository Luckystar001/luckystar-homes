document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
              behavior: "smooth",
          });
      });
  });

  // Automatic testimonial slider
  const testimonialSlider = document.querySelector(".testimonial-slider");
  let currentIndex = 0;

  function slideTestimonials() {
      currentIndex = (currentIndex + 1) % testimonialSlider.children.length;
      testimonialSlider.scrollTo({
          left: currentIndex * testimonialSlider.offsetWidth,
          behavior: "smooth",
      });
  }
  setInterval(slideTestimonials, 5000);

  // Add animation to features and home cards on scroll
  const animatedElements = document.querySelectorAll(".feature, .home-card");
  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.style.animation = "fadeInUp 1s ease-out forwards";
              }
          });
      },
      { threshold: 0.1 }
  );

  animatedElements.forEach((element) => {
      observer.observe(element);
  });

  // Fetch and display featured homes from listings
  const featuredHomesContainer = document.getElementById('featured-homes');

  // Sample listings data (this would typically come from the listing page)
  const allListings = [
      {
          img: 'images/out-0 (1).webp',
          title: 'Modern Oasis',
          details: '4 bed | 3 bath | 2,500 sqft',
          price: '$1,250,000'
      },
      {
          img: 'images/out-0 (2).webp',
          title: 'City View Apartment',
          details: '2 bed | 2 bath | 1,200 sqft',
          price: '$850,000'
      },
      {
          img: 'images/out-0 (3).webp',
          title: 'Suburban Retreat',
          details: '3 bed | 2.5 bath | 1,800 sqft',
          price: '$450,000'
      },
      {
          img: 'images/out-0 (4).webp',
          title: 'Downtown Condo',
          details: '1 bed | 1 bath | 800 sqft',
          price: '$650,000'
      },
      {
          img: 'images/out-0 (5).webp',
          title: 'Elegant Estate',
          details: '6 bed | 7 bath | 8,000 sqft',
          price: '$12,500,000'
      },
      {
          img: 'images/out-0 (6).webp',
          title: 'Historic Townhouse',
          details: '3 bed | 2.5 bath | 2,200 sqft',
          price: '$1,800,000'
      },
  ];

  // Function to display featured homes
  function displayFeaturedHomes() {
      featuredHomesContainer.innerHTML = ""; // Clear existing homes

      // Select random featured listings
      const featuredListings = allListings.sort(() => 0.5 - Math.random()).slice(0, 3); // Get 3 random listings

      featuredListings.forEach(home => {
          const homeCard = `
              <div class="home-card">
                  <img src="${home.img}" alt="${home.title}" />
                  <div class="home-card-content">
                      <h3>${home.title}</h3>
                      <p>${home.details}</p>
                      <p class="price">${home.price}</p>
                  </div>
              </div>
          `;
          featuredHomesContainer.innerHTML += homeCard;
      });
  }

  // Call the function to display featured homes on load
  displayFeaturedHomes();

  // Change featured homes every 10 seconds
  setInterval(displayFeaturedHomes, 10000);

  // Add animation styles
  document.head.insertAdjacentHTML(
      "beforeend",
      `
      <style>
          @keyframes fadeInUp {
              from {
                  opacity: 0;
                  transform: translateY(20px);
              }
              to {
                  opacity: 1;
                  transform: translateY(0);
              }
          }
    
      </style>
      `
  );
});

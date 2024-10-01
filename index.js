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
      {
        img: 'images/out-0 (7).webp',
        title: 'Historic Townhouse',
        address: '222 Beacon St, Boston, MA',
        details: '3 bed | 2.5 bath | 2,200 sqft',
        price: '$1,800,000'
    },
    {
        img: 'images/out-0 (8).webp',
        title: 'Historic Townhouse',
        address: '222 Beacon St, Boston, MA',
        details: '3 bed | 2.5 bath | 2,200 sqft',
        price: '$1,800,000'
    },
    {
        img: 'images/out-0 (9).webp',
        title: 'Historic Townhouse',
        address: '222 Beacon St, Boston, MA',
        details: '3 bed | 2.5 bath | 2,200 sqft',
        price: '$1,800,000'
    },
    {
        img: 'images/out-0 (10).webp',
        title: 'Modern Loft',
        address: '789 Market St, San Francisco, CA',
        details: '2 bed | 2 bath | 1,800 sqft',
        price: '$1,600,000'
    },
    {
        img: 'images/out-0 (11).webp',
        title: 'Cozy Cottage',
        address: '456 Oak Dr, Portland, OR',
        details: '3 bed | 2 bath | 1,200 sqft',
        price: '$850,000'
    },
    {
        img: 'images/out-0 (12).webp',
        title: 'Victorian Mansion',
        address: '101 Hill St, Savannah, GA',
        details: '5 bed | 4 bath | 3,800 sqft',
        price: '$3,200,000'
    },
    {
        img: 'images/out-0 (13).webp',
        title: 'Beachfront Villa',
        address: '567 Ocean Ave, Malibu, CA',
        details: '6 bed | 5 bath | 4,500 sqft',
        price: '$6,500,000'
    },
    {
        img: 'images/out-0 (14).webp',
        title: 'Chic Townhouse',
        address: '901 Maple St, Chicago, IL',
        details: '3 bed | 3 bath | 2,100 sqft',
        price: '$1,200,000'
    },
    {
        img: 'images/out-0 (15).webp',
        title: 'Rustic Farmhouse',
        address: '300 Country Rd, Austin, TX',
        details: '4 bed | 2.5 bath | 3,000 sqft',
        price: '$950,000'
    },
    {
        img: 'images/out-0 (16).webp',
        title: 'Penthouse Suite',
        address: '88 Sunset Blvd, Los Angeles, CA',
        details: '5 bed | 4 bath | 4,000 sqft',
        price: '$4,800,000'
    },
    {
        img: 'images/out-0 (17).webp',
        title: 'Mountain Cabin',
        address: '234 Pine Ln, Aspen, CO',
        details: '3 bed | 3 bath | 2,200 sqft',
        price: '$1,400,000'
    },
    {
        img: 'images/out-0 (18).webp',
        title: 'Urban Apartment',
        address: '47 Broadway St, Seattle, WA',
        details: '2 bed | 1.5 bath | 1,500 sqft',
        price: '$800,000'
    },
    {
        img: 'images/out-0 (19).webp',
        title: 'Colonial Estate',
        address: '650 Elm St, Charleston, SC',
        details: '6 bed | 5.5 bath | 5,000 sqft',
        price: '$3,750,000'
    },
    {
        img: 'images/out-0 (20).webp',
        title: 'Suburban Home',
        address: '12 Maplewood Dr, Atlanta, GA',
        details: '4 bed | 3 bath | 2,400 sqft',
        price: '$700,000'
    }
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
                     <a href="listing.html" target="_blank">   <button class="view-more-btn">View More</button></a>
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

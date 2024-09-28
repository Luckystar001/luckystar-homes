document.addEventListener("DOMContentLoaded", () => {
    const filterForm = document.getElementById("filter-form");
    const prevPageBtn = document.getElementById("prev-page");
    const nextPageBtn = document.getElementById("next-page");
    const listingsSection = document.querySelector(".listings");
    let currentPage = 1;
    const listingsPerPage = 6;  // Adjust the number of listings shown per page
    let filteredListings = [];   // This will hold the filtered listings data

    // Sample listings data (you would fetch this data from an API in a real-world scenario)
    const allListings = [
        
            {
                img: 'images/out-0 (1).webp',
                title: 'Modern Oasis',
                address: '123 Sunset Blvd, Los Angeles, CA',
                details: '4 bed | 3 bath | 2,500 sqft',
                price: '$1,250,000'
            },
            {
                img: 'images/out-0 (2).webp',
                title: 'City View Apartment',
                address: '456 Downtown Ave, New York, NY',
                details: '2 bed | 2 bath | 1,200 sqft',
                price: '$850,000'
            },
            {
                img: 'images/out-0 (3).webp',
                title: 'Suburban Retreat',
                address: '789 Oak St, Chicago, IL',
                details: '3 bed | 2.5 bath | 1,800 sqft',
                price: '$450,000'
            },
            {
                img: 'images/out-0 (4).webp',
                title: 'Downtown Condo',
                address: '101 Main St, San Francisco, CA',
                details: '1 bed | 1 bath | 800 sqft',
                price: '$650,000'
            },
            {
                img: 'images/out-0 (5).webp',
                title: 'Elegant Estate',
                address: '555 Beverly Hills Dr, Beverly Hills, CA',
                details: '6 bed | 7 bath | 8,000 sqft',
                price: '$12,500,000'
            },
            {
                img: 'images/out-0 (6).webp',
                title: 'Historic Townhouse',
                address: '222 Beacon St, Boston, MA',
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
            }
        // More listing objects...
    ];

    // Function to display listings based on current page and filtered results
    function displayListings(listings) {
        listingsSection.innerHTML = "";  // Clear current listings
        const start = (currentPage - 1) * listingsPerPage;
        const end = start + listingsPerPage;
        const paginatedListings = listings.slice(start, end);

        paginatedListings.forEach(listing => {
            const listingCard = `
                <div class="listing-card">
                    <img src="${listing.img}" alt="${listing.title}" width="300" height="200">
                    <div class="listing-card-content">
                        <h3>${listing.title}</h3>
                        <p>${listing.address}</p>
                        <p>${listing.details}</p>
                        <p class="price">${listing.price}</p>
                    </div>
                </div>
            `;
            listingsSection.innerHTML += listingCard;
        });
    }

    // Initial display of listings
    displayListings(allListings);

    // Filter form logic
    filterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(filterForm);
        const filters = Object.fromEntries(formData);

        // Example filter logic: Filtering by location (more filter logic can be added)
        filteredListings = allListings.filter(listing => {
            return listing.address.toLowerCase().includes(filters.location.toLowerCase());
        });

        // Reset pagination
        currentPage = 1;

        // Display filtered listings
        displayListings(filteredListings.length ? filteredListings : allListings);
    });

    // Pagination logic
    prevPageBtn.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            displayListings(filteredListings.length ? filteredListings : allListings);
        }
    });

    nextPageBtn.addEventListener("click", () => {
        const totalPages = Math.ceil((filteredListings.length ? filteredListings : allListings).length / listingsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            displayListings(filteredListings.length ? filteredListings : allListings);
        }
    });
});

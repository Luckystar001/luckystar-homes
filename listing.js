document.addEventListener("DOMContentLoaded", () => {
    const filterForm = document.getElementById("filter-form");
    const prevPageBtn = document.getElementById("prev-page");
    const nextPageBtn = document.getElementById("next-page");
    const listingsSection = document.querySelector(".listings");
    let currentPage = 1;
    const listingsPerPage = 9;  // Adjust the number of listings shown per page
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
            },
            {
                img: 'images/out-0 (21).webp',
                title: 'Lake House',
                address: '789 Lakeside Rd, Tahoe, NV',
                details: '4 bed | 3 bath | 3,000 sqft',
                price: '$2,100,000'
            },
            {
                img: 'images/out-0 (22).webp',
                title: 'Historic Brownstone',
                address: '456 Greenwich St, Boston, MA',
                details: '4 bed | 3 bath | 2,900 sqft',
                price: '$2,800,000'
            },
            {
                img: 'images/out-0 (23).webp',
                title: 'Contemporary Ranch',
                address: '333 Sunset Rd, Scottsdale, AZ',
                details: '5 bed | 4 bath | 3,600 sqft',
                price: '$2,200,000'
            },
            {
                img: 'images/out-0 (24).webp',
                title: 'Countryside Villa',
                address: '123 River Bend, Napa, CA',
                details: '5 bed | 4 bath | 4,200 sqft',
                price: '$3,600,000'
            },
            {
                img: 'images/out-0 (25).webp',
                title: 'Gothic Revival',
                address: '777 Raven St, Salem, MA',
                details: '6 bed | 5 bath | 5,500 sqft',
                price: '$4,200,000'
            },
            {
                img: 'images/out-0 (26).webp',
                title: 'Eco-Friendly Home',
                address: '88 Green St, Boulder, CO',
                details: '4 bed | 3 bath | 2,700 sqft',
                price: '$1,500,000'
            },
            {
                img: 'images/out-0 (27).webp',
                title: 'Art Deco Penthouse',
                address: '333 Ocean Dr, Miami, FL',
                details: '3 bed | 2.5 bath | 2,300 sqft',
                price: '$3,100,000'
            },
            {
                img: 'images/out-28.webp',
                title: 'Modern Bungalow',
                address: '456 Palm St, Palm Springs, CA',
                details: '3 bed | 2 bath | 1,800 sqft',
                price: '$1,300,000'
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
                      <button class="view-more-btn">View More</button> 
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


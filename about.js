
    document.getElementById("signUpBtn").addEventListener("click", function() {
        window.location.open("registration.html", "_blank"); // Redirect to registration page
    });

// Data for team members
const teamMembers = [
    {
        name: 'Yusuf Kusimo',
        title: 'CEO & Founder',
        imageUrl: 'images/yusuf.png',
        imageAlt: 'Yusuf, A',
    },
    {
        name: 'Mahrez Yakubu',
        title: 'Head of Sales',
        imageUrl: 'images/mahrez.png',
        imageAlt: 'Mahrez Yakubu, Head of Sales',
    },
    {
        name: 'Abah Oche Lucky',
        title: 'Lead Designer',
        imageUrl: 'images/1.jpg',
        imageAlt: 'Abah Lucky, Lead Designer',
    },
    {
        name: 'Alfa Jammo',
        title: 'Devop Lord',
        imageUrl: 'images/jammo.png',
        imageAlt: 'Alfa Jammo, Devop Lord',
    }
];

// Select the team section container
const teamSection = document.getElementById('team-section');

// Create and append the heading
const heading = document.createElement('h2');
heading.textContent = 'Meet Our Team';
teamSection.appendChild(heading);

// Dynamically create each team member's card
teamMembers.forEach(member => {
    // Create the team member container div
    const teamMemberDiv = document.createElement('div');
    teamMemberDiv.className = 'team-member';
    
    // Create the image element
    const memberImage = document.createElement('img');
    memberImage.src = member.imageUrl;
    memberImage.alt = member.imageAlt;
    memberImage.width = 150;
    memberImage.height = 150;
    
    // Create the name heading element
    const memberName = document.createElement('h3');
    memberName.textContent = member.name;
    
    // Create the title paragraph element
    const memberTitle = document.createElement('p');
    memberTitle.textContent = member.title;
    
    // Append image, name, and title to the team member div
    teamMemberDiv.appendChild(memberImage);
    teamMemberDiv.appendChild(memberName);
    teamMemberDiv.appendChild(memberTitle);
    
    // Append the team member div to the team section
    teamSection.appendChild(teamMemberDiv);
});

////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  // Add smooth scrolling to page
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Add hover effect to team member images
  const teamMembers = document.querySelectorAll(".team-member img");
  teamMembers.forEach((member) => {
    member.addEventListener("mouseenter", () => {
      member.style.transform = "scale(1.1)";
      member.style.transition = "transform 0.3s ease";
    });
    member.addEventListener("mouseleave", () => {
      member.style.transform = "scale(1)";
    });
  });

  // Add animation to value items
  const valueItems = document.querySelectorAll(".value-item");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.5 }
  );

  valueItems.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(item);
  });
});

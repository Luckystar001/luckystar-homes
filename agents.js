 // Sample data for agents
 const agents = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Real Estate Agent",
      email: "sarah.johnson@Luckystar-homes.com",
      phone: "(555) 123-4567",
      image: "images/agents/IMG_20231230_152445.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Luxury Property Specialist",
      email: "michael.chen@luckystar-homes.com",
      phone: "(555) 234-5678",
      image: "images/agents/IMG-20231225-WA0054.jpg",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "First-Time Homebuyer Expert",
      email: "emily.rodriguez@luckystar-homes.com",
      phone: "(555) 345-6789",
      image: "images/agents/IMG_20230413_204933.jpg",
    },
    {
      id: 4,
      name: "David Thompson",
      title: "Commercial Real Estate Agent",
      email: "david.thompson@luckystar-homes.com",
      phone: "(555) 456-7890",
      image: "images/agents/IMG_0958.jpeg",
    },
    {
      id: 5,
      name: "Lisa Patel",
      title: "Investment Property Advisor",
      email: "lisa.patel@luckystar-homes.com",
      phone: "(555) 567-8901",
      image: "images/agents/IMG_20240211_111527.jpg",
    },
    {
      id: 6,
      name: "Robert Green",
      title: "Relocation Specialist",
      email: "robert.green@luckystar-homes.com",
      phone: "(555) 678-9012",
      image: "images/agents/IMG_5845.jpeg",
    },
  ];

  function createAgentCard(agent) {
    return `
    <div class="agent-card">
      <img src="${agent.image}" alt="${agent.name}" class="agent-image">
      <div class="agent-details">
        <h2 class="agent-name">${agent.name}</h2>
        <p class="agent-title">${agent.title}</p>
        <div class="agent-contact">
          <a href="mailto:${agent.email}">${agent.email}</a>
          <a href="tel:${agent.phone}">${agent.phone}</a>
        </div>
      </div>
    </div>
  `;
  }

  function renderAgents() {
    const container = document.querySelector(".agents-container");
    container.innerHTML = agents.map(createAgentCard).join("");
  }

  // Render agents when the page loads
  document.addEventListener("DOMContentLoaded", renderAgents);
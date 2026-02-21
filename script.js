// Portfolio data - you can add your own images here
const portfolioItems = [
    { title: "Automation Panel Project 1", image: "assets/portfolio1.jpg" },
    { title: "Solar Inverter Installation", image: "assets/portfolio2.jpg" },
    { title: "PLC System Implementation", image: "assets/portfolio3.jpg" },
    { title: "Fire Alarm System Setup", image: "assets/portfolio4.jpg" },
    { title: "CCTV Installation Project", image: "assets/portfolio5.jpg" },
    { title: "Generator Control System", image: "assets/portfolio6.jpg" }
];

// Load portfolio items dynamically
function loadPortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/250?text=${encodeURIComponent(item.title)}'">
            <h3>${item.title}</h3>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Initialize portfolio on page load
document.addEventListener('DOMContentLoaded', loadPortfolio);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
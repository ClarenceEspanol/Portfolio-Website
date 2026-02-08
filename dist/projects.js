"use strict";
// Make sure this runs after DOM is loaded
console.log("projects.ts loaded"); // change per file
document.addEventListener("DOMContentLoaded", () => {
    const projectsData = [
        {
            title: "JBC E-Commerce Website",
            img: "Images/Jbc Project.png",
            description: "Built a full-stack e-commerce website using Firebase for backend and hosting. Features include user authentication, product catalog, and cart system.",
            link: "https://jbcstore2009.web.app"
        },
        {
            title: "WordPress Drugstore E-Commerce",
            img: "Images/GenZ Projects.png",
            description: "Developed a WordPress-powered e-commerce website for a cosmetics/drugstore business. Includes product categories, checkout flow, and responsive design.",
            link: "https://genzcosmetics.42web.io/"
        },
        {
            title: "Bantay Tubig Web App",
            img: "Images/BantayTubig Project.png",
            description: "Contributed frontend design and prototyping for a water quality monitoring system. The app tracks, analyzes, and visualizes water data, supporting real-time monitoring. This was developed as our Capstone Project.",
            link: "https://bantaytubig.onrender.com/login"
        },
        {
            title: "Bayani Brew Prototype Website",
            img: "Images/BayaniBrew Project.png",
            description: "A simple prototype website built using HTML and CSS. Showcases the brand and layout design, but no functional features have been implemented.",
            link: "https://clarenceespanol.github.io/final-webisite/Home.html"
        },
        {
            title: "47th OLLCF Founding Anniversary Website",
            img: "Images/Founding Anniv Project.png",
            description: "A static website built using HTML and CSS highlighting the 47th OLLCF Founding Anniversary events. Focused on event highlights with no JavaScript functionalities.",
            link: "https://clarenceespanol.github.io/midterm-project/home.html"
        },
        {
            title: "Soon to be Updated",
            img: "Images/Soon.png",
            description: "Stay tuned! More exciting projects will be added soon.",
            link: "#"
        }
    ];
    const projectsSection = document.getElementById("projects");
    if (!projectsSection)
        return; // null check
    projectsSection.innerHTML = `
    <p class="section__text__p1">Browse My Recent</p>
    <h1 class="title">Projects</h1>
    <div class="experience-details-container">
      <div class="about-containers" id="projects-containers"></div>
    </div>
  `;
    const container = document.getElementById("projects-containers");
    if (!container)
        return; // null check
    projectsData.forEach(project => {
        const card = document.createElement("div");
        card.className = "details-container color-container project-box";
        card.innerHTML = `
      <div class="article-container">
        <img src="${project.img}" alt="${project.title}" class="project-img" />
      </div>
      <h2 class="experience-sub-title project-title">${project.title}</h2>
      <p class="project-description">${project.description}</p>
      <div class="btn-container">
        <a href="${project.link}" target="_blank" rel="noopener noreferrer">
          <button class="btn btn-color-2 project-btn">Live Demo</button>
        </a>
      </div>
    `;
        container.appendChild(card);
    });
});

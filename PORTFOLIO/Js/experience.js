document.addEventListener("DOMContentLoaded", () => {
 const experienceData = {
  sections: [
    {
      title: "Technical Skills",
      items: [
        { icon: "fab fa-html5", name: "HTML", level: "Experienced", color: "#e34c26" },
        { icon: "fab fa-css3-alt", name: "CSS", level: "Experienced", color: "#264de4" },
        { icon: "fab fa-js", name: "JavaScript", level: "Experienced", color: "#f7df1e" },
        { icon: "fas fa-pencil-ruler", name: "UI/UX Design", level: "Experienced" },
        { icon: "fab fa-python", name: "Python", level: "Basics", color: "#3776ab" },
        { icon: "fas fa-coffee", name: "Java", level: "Basics" },
        { icon: "fas fa-code", name: "C++", level: "Basics" },
        { icon: "fas fa-database", name: "Database Integration", level: "Intermediate" },
        { icon: "fab fa-wordpress", name: "WordPress E-Commerce", level: "Intermediate", color: "#21759b" },
        { icon: "fas fa-project-diagram", name: "Prototyping", level: "Basics" },
        { icon: "fas fa-file-alt", name: "Technical Documentation", level: "Experienced" },
        { icon: "fas fa-window-maximize", name: "VB.NET", level: "Intermediate" },
        { icon: "fab fa-php", name: "PHP", level: "Intermediate", color: "orange" }
      ]
    },
    {
      title: "Work & Projects",
      items: [
        { icon: "fas fa-laptop-code", name: "BSIT Projects", description: "Frontend Dev, UI Design, IoT Support" },
        { icon: "fas fa-shopping-cart", name: "E-Commerce Website", description: "Full-Stack Development" },
        { icon: "fab fa-wordpress", name: "WordPress E-Commerce", description: "Website Development" }
      ]
    }
  ]
};

  const experienceSection = document.getElementById("experience");
  experienceSection.innerHTML = `
    <p class="section__text__p1">Explore My</p>
    <h1 class="title">Experience</h1>
    <div class="experience-details-container">
      <div class="about-containers" id="experience-containers"></div>
    </div>
  `;

  const container = document.getElementById("experience-containers");

  experienceData.sections.forEach(section => {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "details-container";

    const title = document.createElement("h2");
    title.className = "experience-sub-title";
    title.textContent = section.title;
    sectionDiv.appendChild(title);

    const articleContainer = document.createElement("div");
    articleContainer.className = "article-container";

    section.items.forEach(item => {
      const article = document.createElement("article");
      let content = `<i class="${item.icon} icon"`;
      if (item.color) content += ` style="color:${item.color}"`;
      content += `></i>`;
      content += `<div><h3>${item.name}</h3>`;
      if(item.level) content += `<p>${item.level}</p>`;
      if(item.description) content += `<p>${item.description}</p>`;
      content += `</div>`;
      article.innerHTML = content;
      articleContainer.appendChild(article);
    });

    sectionDiv.appendChild(articleContainer);
    container.appendChild(sectionDiv);
  });
});

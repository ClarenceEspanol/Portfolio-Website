document.addEventListener("DOMContentLoaded", () => {
  const profileData = {
    img: "Images/profile-clarence.jpg",
    intro: "Hello, I'm",
    name: "Clarence P. Español",
    role: "Frontend Developer",
    buttons: [
      { text: "Download CV", id: "download-cv", type: "button" },
      { text: "Contact Info", link: "#contact", type: "link" }
    ],
    socials: [
      { icon: "fab fa-facebook", link: "https://www.facebook.com/clrnxvt/" },
      { icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/clarence-español-595742317" },
      { icon: "fab fa-github", link: "https://github.com/ClarenceEspanol" }
    ]
  };

  const profileSection = document.getElementById("profile");
  profileSection.innerHTML = `
    <div class="section__pic-container">
      <img src="${profileData.img}" alt="${profileData.name} profile picture" />
    </div>
    <div class="section__text">
      <p class="section__text__p1">${profileData.intro}</p>
      <h1 class="title">${profileData.name}</h1>
      <p class="section__text__p2">${profileData.role}</p>
      <div class="btn-container" id="profile-buttons"></div>
      <div id="socials-container"></div>
    </div>
  `;

  // Add buttons dynamically
  const buttonsContainer = document.getElementById("profile-buttons");
  profileData.buttons.forEach(btn => {
    if (btn.type === "button") {
      const button = document.createElement("button");
      button.className = "btn btn-color-2";
      button.id = btn.id;
      button.textContent = btn.text;
      buttonsContainer.appendChild(button);
    } else if (btn.type === "link") {
      const button = document.createElement("button");
      button.className = "btn btn-color-1";
      button.onclick = () => location.href = btn.link;
      button.textContent = btn.text;
      buttonsContainer.appendChild(button);
    }
  });

  // Add social icons dynamically
  const socialsContainer = document.getElementById("socials-container");
  profileData.socials.forEach(social => {
    const a = document.createElement("a");
    a.href = social.link;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerHTML = `<i class="${social.icon} icon"></i>`;
    socialsContainer.appendChild(a);
  });
  // Add down arrow to scroll to About section
const profileArrow = document.createElement("i");
profileArrow.className = "fas fa-arrow-down icon arrow";
profileArrow.setAttribute("onclick", "location.href='./#about'");
profileSection.appendChild(profileArrow);
});

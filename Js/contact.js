document.addEventListener("DOMContentLoaded", () => {
  const contactData = [
    { icon: "fas fa-envelope", type: "Email", value: "clarence.espanol0123@gmail.com", link: "mailto:clarence.espanol0123@gmail.com" },
    { icon: "fab fa-linkedin", type: "LinkedIn", value: "LinkedIn", link: "https://www.linkedin.com/in/clarence-español-595742317" }
  ];

  const contactSection = document.getElementById("contact");
  contactSection.innerHTML = `
    <p class="section__text__p1">Get in Touch</p>
    <h1 class="title">Contact Me</h1>
    <div class="contact-info-upper-container" id="contact-container"></div>
  `;

  const container = document.getElementById("contact-container");

  contactData.forEach(item => {
    const div = document.createElement("div");
    div.className = "contact-info-container";
    div.innerHTML = `
      <i class="${item.icon} icon contact-icon"></i>
      <p><a href="${item.link}" target="_blank">${item.value}</a></p>
    `;
    container.appendChild(div);
  });
});

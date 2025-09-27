// footer
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer");

  // Create nav links container
  const navContainer = document.createElement("nav");
  const navLinksContainer = document.createElement("div");
  navLinksContainer.className = "nav-links-container";

  const ul = document.createElement("ul");
  ul.className = "nav-links";

  const links = [
    { text: "About", href: "#about" },
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Contact", href: "#contact" }
  ];

  links.forEach(link => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    li.appendChild(a);
    ul.appendChild(li);
  });

  navLinksContainer.appendChild(ul);
  navContainer.appendChild(navLinksContainer);
  footer.appendChild(navContainer);

  // Copyright
  const copyright = document.createElement("p");
  const year = new Date().getFullYear();
  copyright.innerHTML = `Copyright &#169; ${year} Clarence P. Español. All Rights Reserved.`;
  footer.appendChild(copyright);
});

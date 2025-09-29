function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");

  if (menu.classList.contains("open")) {
    document.body.style.overflow = "hidden"; // prevent scrolling behind menu
  } else {
    document.body.style.overflow = ""; // allow scrolling again
  }
}


// Js/script.js
AOS.init({
  duration: 1000, // animation duration
  once: true      // play animation only once
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});





// Toggle mobile menu
console.log("script.ts loaded"); // change per file

function toggleMenu(): void {
  const menu = document.querySelector(".menu-links") as HTMLElement | null;
  const icon = document.querySelector(".hamburger-icon") as HTMLElement | null;

  // Make sure elements exist
  if (!menu || !icon) return;

  menu.classList.toggle("open");
  icon.classList.toggle("open");

  // Prevent or allow scrolling
  if (menu.classList.contains("open")) {
    document.body.style.overflow = "hidden"; // prevent scrolling behind menu
  } else {
    document.body.style.overflow = ""; // allow scrolling again
  }
}

// Expose toggleMenu to HTML so onclick still works
(window as any).toggleMenu = toggleMenu;


declare const AOS: any; // Tell TS "AOS exists"

/* Initialize AOS animations */
AOS.init({
  duration: 1000, // animation duration
  once: true      // play animation only once
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  const el = anchor as HTMLAnchorElement;

  el.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(el.getAttribute("href") || "") as HTMLElement | null;
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// Js/about.js
document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.getElementById("about");

  // Create heading and subheading
  const subtitle = document.createElement("p");
  subtitle.className = "section__text__p1";
  subtitle.textContent = "Get To Know More";

  const title = document.createElement("h1");
  title.className = "title";
  title.textContent = "About Me";

  aboutSection.appendChild(subtitle);
  aboutSection.appendChild(title);

  // Create container for slideshow + details
  const sectionContainer = document.createElement("div");
  sectionContainer.className = "section-container";

  // ------------------- Slideshow -------------------
  const slideshowContainer = document.createElement("div");
  slideshowContainer.className = "about-slideshow-container";

  const slides = [
    "Images/About/about profile.jpg",
    "Images/About/about profile2.jpg",
    "Images/About/about profile3.jpg",
    "Images/About/about profile4.jpg",
    "Images/About/about profile5.jpg",
    "Images/About/about profile6.jpg",
    "Images/About/about profile7.jpg",
    "Images/About/about profile8.jpg",
    "Images/About/about profile9.jpg",
    "Images/About/about profile10.jpg",
    "Images/About/about profile11.jpg",
    "Images/About/about profile12.jpg",
    "Images/About/about profile13.jpg",
    "Images/About/about profile14.jpg"
  ];

  let currentSlide = 0;
  let isAnimating = false; // flag to prevent spam clicks

  const currentImg = document.createElement("img");
  const nextImg = document.createElement("img");
  currentImg.className = nextImg.className = "about-slide-img";
  currentImg.src = slides[currentSlide];
  currentImg.style.left = "0%";
  nextImg.style.left = "100%"; // offscreen right

  slideshowContainer.appendChild(currentImg);
  slideshowContainer.appendChild(nextImg);

  slideshowContainer.addEventListener("click", () => {
    if (isAnimating) return; // disable click if animating
    isAnimating = true;

    // Determine next slide
    currentSlide = (currentSlide + 1) % slides.length;
    nextImg.src = slides[currentSlide];

    // Animate images
    currentImg.style.transition = "left 0.8s ease-in-out";
    nextImg.style.transition = "left 0.8s ease-in-out";
    currentImg.style.left = "-100%";
    nextImg.style.left = "0%";

    // Swap images after animation
    setTimeout(() => {
      // Swap currentImg and nextImg src
      currentImg.src = nextImg.src;
      currentImg.style.transition = "none";
      currentImg.style.left = "0%";

      nextImg.style.transition = "none";
      nextImg.style.left = "100%";

      isAnimating = false; // re-enable click
    }, 800); // match transition duration
  });

  // ------------------- Details -------------------
  const detailsContainer = document.createElement("div");
  detailsContainer.className = "about-details-container";

  const detailsInner = document.createElement("div");
  detailsInner.className = "about-containers";

  const experiences = [
    {
      icon: "fas fa-briefcase",
      title: "Experience",
      text: "Frontend Developer, UI/UX Design & Research (2023–Present)"
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Education",
      text: "<strong>B.S. Information Technology</strong><br>Our Lady of Lourdes College Foundation (2022–Present)"
    }
  ];

  experiences.forEach(exp => {
    const detailBox = document.createElement("div");
    detailBox.className = "details-container";

    const icon = document.createElement("i");
    icon.className = exp.icon + " icon";
    detailBox.appendChild(icon);

    const heading = document.createElement("h3");
    heading.innerHTML = exp.title;
    detailBox.appendChild(heading);

    const paragraph = document.createElement("p");
    paragraph.innerHTML = exp.text;
    detailBox.appendChild(paragraph);

    detailsInner.appendChild(detailBox);
  });

  const textContainer = document.createElement("div");
  textContainer.className = "text-container";

  const aboutText = document.createElement("p");
  aboutText.innerHTML = `
    I am an aspiring <strong>Front-End Developer</strong> with occasional experience in back-end development. 
    From Labo Camarines Norte, I contribute to building and optimizing projects that focus on functionality, usability, 
    and enhancing the overall user experience. I also assist with documentation, IoT hardware design, and 
    research-related tasks. In addition, I have hands-on experience developing a full-stack e-commerce website 
    with integrated databases. My core skills include front-end web technologies, technical writing, prototyping, 
    UI/UX design, and providing support for hardware integration.
  `;
  textContainer.appendChild(aboutText);

  // Append details to container
  detailsContainer.appendChild(detailsInner);
  detailsContainer.appendChild(textContainer);

  // Append slideshow + details to section container
  sectionContainer.appendChild(slideshowContainer);
  sectionContainer.appendChild(detailsContainer);

  aboutSection.appendChild(sectionContainer);

  // Optional: add down arrow
  const arrow = document.createElement("i");
  arrow.className = "fas fa-arrow-down icon arrow";
  arrow.setAttribute("onclick", "location.href='./#experience'");
  aboutSection.appendChild(arrow);
});

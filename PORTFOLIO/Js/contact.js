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
    <div class="btn-container">
      <button class="btn btn-color-1" id="download-portfolio">Download Portfolio</button>
    </div>
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

  document.getElementById("download-portfolio").addEventListener("click", async () => {
    const pptx = new PptxGenJS();
    const pptWidth = 10;  // inches
    const pptHeight = 5.63; // 16:9 ratio

    // Sections to capture (excluding contact)
    const sections = [
      { id: "profile" },
      { id: "about" },
      { id: "experience" },
      { id: "projects" },
      { id: "certificates", imagesOnly: true } // capture only images
    ];

    for (const sec of sections) {
      const el = document.getElementById(sec.id);
      if (!el) continue;

      try {
        let canvas;
        if (sec.imagesOnly) {
          // Capture only images in the section
          const images = el.querySelectorAll("img");
          for (const img of images) {
            canvas = await html2canvas(img, { scale: 2, useCORS: true, allowTaint: true });
            const imgData = canvas.toDataURL("image/png");

            // Center image on slide
            const ratio = canvas.width / canvas.height;
            let w = pptWidth;
            let h = pptWidth / ratio;
            if (h > pptHeight) { h = pptHeight; w = pptHeight * ratio; }

            const slide = pptx.addSlide();
            slide.background = { color: "FFFFFF" };
            slide.addImage({ data: imgData, x: (pptWidth - w) / 2, y: (pptHeight - h) / 2, w, h });
          }
        } else {
          // Capture entire section
          canvas = await html2canvas(el, { scale: 2, useCORS: true, allowTaint: true, scrollY: -window.scrollY });
          const imgData = canvas.toDataURL("image/png");

          const ratio = canvas.width / canvas.height;
          let w = pptWidth;
          let h = pptWidth / ratio;
          if (h > pptHeight) { h = pptHeight; w = pptHeight * ratio; }

          const slide = pptx.addSlide();
          slide.background = { color: "FFFFFF" };
          slide.addImage({ data: imgData, x: (pptWidth - w) / 2, y: (pptHeight - h) / 2, w, h });
        }
      } catch (err) {
        console.error("Error capturing section:", sec.id, err);
      }
    }

    // --- Thank You Slide ---
    const thankSlide = pptx.addSlide();
    thankSlide.background = { color: "F0F0F0" };
    thankSlide.addText("Thank You!", {
      x: 0,
      y: 2,
      w: pptWidth,
      align: "center",
      fontSize: 32,
      bold: true,
      color: "2F5496"
    });
    thankSlide.addText("Visit my portfolio:", {
      x: 0,
      y: 3,
      w: pptWidth,
      align: "center",
      fontSize: 20,
      color: "505050"
    });
    thankSlide.addText("http://clrnxvt.vercel.app/", {
      x: 0,
      y: 3.7,
      w: pptWidth,
      align: "center",
      fontSize: 20,
      color: "2F5496",
      hyperlink: { url: "http://clrnxvt.vercel.app/" }
    });

    pptx.writeFile("Clarence_Espanol_Portfolio.pptx");
  });
});

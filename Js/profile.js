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

  // Add buttons
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

  // Add socials
  const socialsContainer = document.getElementById("socials-container");
  profileData.socials.forEach(social => {
    const a = document.createElement("a");
    a.href = social.link;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerHTML = `<i class="${social.icon} icon"></i>`;
    socialsContainer.appendChild(a);
  });

// ✅ PDF Generate (CV + Resume in 2 pages, with profile picture & compact fonts)
const downloadBtn = document.getElementById("download-cv");
if (downloadBtn) {
  downloadBtn.addEventListener("click", async () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: "mm", format: "a4" });
    // Helper function to draw label + clickable link
      const addLinkLine = (label, url, x, y) => {
        // Draw the label in black
        doc.setTextColor(0, 0, 0);
        doc.text(label, x, y);

        // Measure label width for offset
        const labelWidth = doc.getTextWidth(label);

        // Draw the URL in blue, clickable
        doc.setTextColor(0, 102, 204);
        doc.textWithLink(url, x + labelWidth + 2, y, { url: url });

        doc.setTextColor(0, 0, 0); // reset to black
        return y + 6; // move down after line
      };

    // Helper
    const addWrappedText = (text, x, y, maxWidth, lineHeight = 6) => {
      const lines = doc.splitTextToSize(text, maxWidth);
      lines.forEach(line => {
        if (y > 280) {
          doc.addPage();
          y = 20;
        }
        doc.text(line, x, y);
        y += lineHeight;
      });
      return y;
    };

    // Load profile picture once
    let profileImg = null;
    try {
      profileImg = await fetch("Images/profile-clarence.jpg")
        .then(res => res.blob())
        .then(blob => new Promise(resolve => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.readAsDataURL(blob);
        }));
    } catch (err) {
      console.log("Image not loaded:", err);
    }

    const pageWidth = doc.internal.pageSize.getWidth();

    // ---------- PAGE 1: CV ----------
    if (profileImg) doc.addImage(profileImg, "JPEG", 150, 15, 40, 40);

    doc.setFont("times", "bold");
    doc.setFontSize(12);
    doc.text("Curriculum Vitae", pageWidth / 2, 25, { align: "center" });

    doc.setFont("times", "normal");
    doc.setFontSize(11);
    let y = 40;
    y = addWrappedText("Clarence P. Español", 20, y, 170);
    y = addWrappedText("Frontend Developer", 20, y, 170);
    y = addLinkLine("Email: ", "clarence.espanol0123@gmail.com", 20, y);
    y = addWrappedText("Phone: 09286394903", 20, y, 170);
    y = addLinkLine("LinkedIn: ", "https://www.linkedin.com/in/clarence-español-595742317", 20, y);
    y = addLinkLine("GitHub: ", "https://github.com/ClarenceEspanol", 20, y);
    y = addLinkLine("Portfolio: ", "https://clrnxvt.vercel.app/", 20, y);
    y = addWrappedText("Address: Labo, Camarines Norte", 20, y, 170);

    // Summary
    doc.setFont("times", "bold"); doc.setFontSize(12);
    y += 8; doc.text("Summary", 20, y); y += 6;
    doc.setFont("times", "normal"); doc.setFontSize(11);
    y = addWrappedText(
      "Aspiring Front-End Developer with occasional back-end experience. Skilled in web design, prototyping, documentation, and research. Contributed to academic projects including IoT-based systems and developed full-stack e-commerce websites.",
      20, y, 170
    );

    // Skills
    doc.setFont("times", "bold"); doc.setFontSize(12);
    y += 8; doc.text("Technical Skills", 20, y); y += 6;
    doc.setFont("times", "normal"); doc.setFontSize(11);
    const skills = [
      "HTML, CSS, JavaScript (Experienced)",
      "UI/UX Design (Experienced)",
      "Python, Java, C++ (Basics)",
      "Database Integration (Intermediate)",
      "WordPress E-Commerce (Intermediate)",
      "Prototyping & Technical Documentation",
    ];
    skills.forEach(skill => { y = addWrappedText("• " + skill, 25, y, 160); });

    // Experience
    doc.setFont("times", "bold"); doc.setFontSize(12);
    y += 8; doc.text("Experience & Projects", 20, y); y += 6;
    doc.setFont("times", "normal"); doc.setFontSize(11);
    y = addWrappedText("BSIT Academic Projects (2023–Present) – Frontend Dev, UI/UX design, IoT support, prototyping, and research.", 20, y, 170);
    y = addWrappedText("JBC E-Commerce Website (2024) – Full-stack development with Firebase hosting and authentication. https://jbcstore2009.web.app", 20, y, 170);
    y = addWrappedText("WordPress Drugstore E-Commerce – Built responsive WordPress-based online store with categories and checkout system.", 20, y, 170);
    y = addWrappedText("Bantay Tubig Web App (Capstone Project) – Contributed frontend design & prototyping for a water quality monitoring system. https://bantaytubig.onrender.com/login", 20, y, 170);

    // Education
    doc.setFont("times", "bold"); doc.setFontSize(12);
    y += 8; doc.text("Education", 20, y); y += 6;
    doc.setFont("times", "normal"); doc.setFontSize(11);
    y = addWrappedText("B.S. Information Technology (Ongoing)\nOur Lady of Lourdes College Foundation (2022–Present)", 20, y, 170);
    y = addWrappedText("Senior High (GAS) – Our Lady of Lourdes College Foundation (2020–2022)", 20, y, 170);
    y = addWrappedText("Junior High – St. John the Apostle Academy (2016–2020)\nElementary – Daet Elementary School (2010–2016)", 20, y, 170);

    // ---------- PAGE 2: Resume ----------
    doc.addPage();
    if (profileImg) doc.addImage(profileImg, "JPEG", 150, 15, 40, 40);

    doc.setFont("times", "bold");
    doc.setFontSize(12);
    doc.text("Resume", pageWidth / 2, 25, { align: "center" });

    doc.setFont("times", "normal");
    doc.setFontSize(11);
    y = 40;
    y = addWrappedText("Clarence P. Español", 20, y, 170);
    y = addWrappedText("Frontend Developer", 20, y, 170);
    y = addLinkLine("Email: ", "clarence.espanol0123@gmail.com", 20, y);
    y = addWrappedText("Phone: 09286394903", 20, y, 170);
    y = addLinkLine("LinkedIn: ", "https://www.linkedin.com/in/clarence-español-595742317", 20, y);
    y = addLinkLine("GitHub: ", "https://github.com/ClarenceEspanol", 20, y);
    y = addLinkLine("Portfolio: ", "https://clrnxvt.vercel.app/", 20, y);

    // Resume Objective
    doc.setFont("times", "bold"); doc.setFontSize(12);
    y += 8; doc.text("Objective", 20, y); y += 6;
    doc.setFont("times", "normal"); doc.setFontSize(11);
    y = addWrappedText(
      "Motivated IT student and aspiring Front-End Developer seeking opportunities to apply technical skills in real-world projects. Willing to gain more experience and contribute effectively to team success.",
      20, y, 170
    );

    // Resume Skills
    doc.setFont("times", "bold"); doc.setFontSize(12);
    y += 8; doc.text("Core Skills", 20, y); y += 6;
    doc.setFont("times", "normal"); doc.setFontSize(11);
    const resumeSkills = [
      "HTML, CSS, JavaScript (Experienced)",
      "UI/UX Design (Experienced)",
      "Python, Java, C++ (Basics)",
      "Database Integration (Intermediate)",
      "WordPress E-Commerce (Intermediate)",
      "Prototyping & Technical Documentation",
    ];
    resumeSkills.forEach(skill => { y = addWrappedText("• " + skill, 25, y, 160); });

    // Resume Experience
    doc.setFont("times", "bold"); doc.setFontSize(12);
    y += 8; doc.text("Experience & Projects", 20, y); y += 6;
    doc.setFont("times", "normal"); doc.setFontSize(11);
    y = addWrappedText("Frontend Developer – BSIT Academic Projects (2023–Present)", 20, y, 170);
    y = addWrappedText("Full-stack Developer – JBC E-Commerce Website (2024)", 20, y, 170);
    y = addWrappedText("Frontend/UI Designer – Bantay Tubig Capstone Project", 20, y, 170);
    y = addWrappedText("WordPress Developer – Drugstore E-Commerce Project", 20, y, 170);

    // Resume Education
    doc.setFont("times", "bold");
    doc.setFontSize(12);
    y += 8;
    doc.text("Education", 20, y);
    y += 6;

    doc.setFont("times", "normal");
    doc.setFontSize(11);

    // College
    y = addWrappedText("B.S. Information Technology (Ongoing)", 20, y, 170);
    y = addWrappedText("Our Lady of Lourdes College Foundation (2022–Present)", 25, y, 165);

    // Senior High
    y += 6;
    y = addWrappedText("Senior High School (GAS Strand)", 20, y, 170);
    y = addWrappedText("Our Lady of Lourdes College Foundation (2020–2022)", 25, y, 165);

    // Junior High
    y += 6;
    y = addWrappedText("Junior High School", 20, y, 170);
    y = addWrappedText("St. John the Apostle Academy (2016–2020)", 25, y, 165);

    // Elementary
    y += 6;
    y = addWrappedText("Elementary", 20, y, 170);
    y = addWrappedText("Daet Elementary School (2010–2016)", 25, y, 165);

    
    // ---------- SAVE ----------
    doc.save("Clarence_Espanol_CV_and_Resume.pdf");
  });
}
});

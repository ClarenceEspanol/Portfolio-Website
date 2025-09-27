function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
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

//pdf generate
// pdf generate
document.addEventListener("DOMContentLoaded", () => {
  const downloadBtn = document.getElementById("download-cv");
  if (!downloadBtn) return;

  downloadBtn.addEventListener("click", async () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
      unit: "mm",
      format: "a4" // Standard paper size
    });

    // Helper to wrap text & handle page breaks
    const addWrappedText = (text, x, y, maxWidth, lineHeight = 7) => {
      const lines = doc.splitTextToSize(text, maxWidth);
      lines.forEach((line, i) => {
        if (y > 280) { // bottom of page reached
          doc.addPage();
          y = 20;
        }
        doc.text(line, x, y);
        y += lineHeight;
      });
      return y;
    };

    // Add profile picture
    try {
      const img = await fetch("Images/profile-clarence.jpg")
        .then((res) => res.blob())
        .then((blob) => {
          return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(blob);
          });
        });
      doc.addImage(img, "JPEG", 150, 15, 40, 40); // x, y, w, h
    } catch (err) {
      console.log("Image not loaded:", err);
    }

    // Title
    doc.setFont("times", "bold");
    doc.setFontSize(20);
    const pageWidth = doc.internal.pageSize.getWidth(); // e.g. 210 for A4 portrait
    doc.setFont("times", "bold");
    doc.setFontSize(20);
    doc.text("Curriculum Vitae", pageWidth / 2, 25, { align: "center" });

    // Personal Info
    doc.setFont("times", "normal");
    doc.setFontSize(12);
    let y = 40;
    y = addWrappedText("Clarence P. Español", 20, y, 170,);
    y = addWrappedText("Frontend Developer", 20, y, 170);
    y = addWrappedText("Email: clarence.espanol0123@gmail.com", 20, y, 170);
    y = addWrappedText("Phone: 09286394903", 20, y, 170);
    y = addWrappedText("LinkedIn: linkedin.com/in/clarence-español-595742317", 20, y, 170);
    y = addWrappedText("GitHub: github.com/ClarenceEspanol", 20, y, 170);
    y = addWrappedText("Address: Labo, Camarines Norte", 20, y, 170);

    // Summary
    doc.setFont("times", "bold");
    doc.setFontSize(14);
    y += 10;
    doc.text("Summary", 20, y);
    y += 7;

    doc.setFont("times", "normal");
    doc.setFontSize(12);
    y = addWrappedText(
      "Aspiring Front-End Developer with occasional back-end experience. Skilled in web design, prototyping, documentation, and research. Contributed to academic projects including IoT-based systems and developed full-stack e-commerce websites.",
      20,
      y,
      170
    );

    // Skills
    doc.setFont("times", "bold");
    doc.setFontSize(14);
    y += 10;
    doc.text("Technical Skills", 20, y);
    y += 7;

    doc.setFont("times", "normal");
    doc.setFontSize(12);
    const skills = [
      "HTML, CSS, JavaScript (Experienced)",
      "UI/UX Design (Experienced)",
      "Python, Java, C++ (Basics)",
      "Database Integration (Intermediate)",
      "WordPress E-Commerce (Intermediate)",
      "Prototyping & Technical Documentation",
    ];
    skills.forEach((skill) => {
      y = addWrappedText("• " + skill, 25, y, 160);
    });

    // Experience
    doc.setFont("times", "bold");
    doc.setFontSize(14);
    y += 10;
    doc.text("Experience & Projects", 20, y);
    y += 7;

    doc.setFont("times", "normal");
    doc.setFontSize(12);
    y = addWrappedText(
      "BSIT Academic Projects (2023–Present) – Frontend Dev, UI/UX design, IoT support, prototyping, and research.",
      20,
      y,
      170
    );
    y = addWrappedText(
      "JBC E-Commerce Website (2024) – Full-stack development with Firebase hosting and authentication. https://jbcstore2009.web.app",
      20,
      y,
      170
    );
    y = addWrappedText(
      "WordPress Drugstore E-Commerce – Built responsive WordPress-based online store with categories and checkout system.",
      20,
      y,
      170
    );
    y = addWrappedText(
      "Bantay Tubig Web App (Capstone Project) – Contributed frontend design & prototyping for a water quality monitoring system. https://bantaytubig.onrender.com/login",
      20,
      y,
      170
    );

    // Education
    doc.setFont("times", "bold");
    doc.setFontSize(14);
    y += 10;
    doc.text("Education", 20, y);
    y += 7;

    doc.setFont("times", "normal");
    doc.setFontSize(12);
    y = addWrappedText(
      "B.S. Information Technology (Ongoing)\nOur Lady of Lourdes College Foundation (2022–Present)",
      20,
      y,
      170
    );
    y = addWrappedText(
      "Senior High (GAS) – Our Lady of Lourdes College Foundation (2020–2022)",
      20,
      y,
      170
    );
    y = addWrappedText(
      "Junior High – St. John the Apostle Academy (2016–2020)\nElementary – Daet Elementary School (2010–2016)",
      20,
      y,
      170
    );

    // Save file
    doc.save("Clarence_Espanol_CV.pdf");
  });
});






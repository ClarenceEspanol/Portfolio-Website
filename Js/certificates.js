"use strict";
console.log("certificate.ts loaded");
document.addEventListener("DOMContentLoaded", () => {
    const certificatesSection = document.getElementById("certificates");
    if (!certificatesSection)
        return;
    // Section subtitle and title
    const subtitle = document.createElement("p");
    subtitle.className = "section__text__p1";
    subtitle.textContent = "My Achievements";
    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = "Certificates";
    certificatesSection.appendChild(subtitle);
    certificatesSection.appendChild(title);
    // Recent certificates text
    const recentText = document.createElement("p");
    recentText.textContent = "Recent Certificates";
    recentText.style.fontWeight = "bold";
    recentText.style.marginBottom = "10px";
    certificatesSection.appendChild(recentText);
    // Recent certificates container
    const container = document.createElement("div");
    container.className = "certificates-container";
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(3, 1fr)";
    container.style.gap = "20px";
    container.style.justifyItems = "center";
    // Certificates data
    const certificates = [
        // add all your certificates here...
        {
            name: "Installing and Configuring Computer Systems",
            img: "Images/Certificates/TESDA_Installing and Configuring Computer Systems.png",
            issuer: "TESDA – NITESD",
            date: "March 30, 2023",
            description: "Completed TESDA Online Program course covering installation and configuration of computer systems, ensuring proper setup and performance."
        },
        {
            name: "Introduction to CSS",
            img: "Images/Certificates/TESDA_Introduction to CSS.png",
            issuer: "TESDA – NITESD",
            date: "March 23, 2023",
            description: "Completed TESDA Online Program course introducing CSS, focusing on styling, layout, and responsive design techniques for web development."
        },
        {
            name: "Maintaining Computer Systems and Networks",
            img: "Images/Certificates/TESDA_Maintaining Computer Systems and Networks.png",
            issuer: "TESDA – NITESD",
            date: "May 11, 2023",
            description: "Completed TESDA Online Program course on maintaining computer systems and networks, focusing on troubleshooting, diagnostics, and upkeep."
        },
        {
            name: "Setting Up Computer Networks",
            img: "Images/Certificates/TESDA_Setting Up Computer Networks.png",
            issuer: "TESDA – NITESD",
            date: "May 11, 2023",
            description: "Completed TESDA Online Program course covering setup of computer networks, including configuration and connectivity."
        },
        {
            name: "Setting Up Computer Servers",
            img: "Images/Certificates/TESDA_Setting Up Computer Servers.png",
            issuer: "TESDA – NITESD",
            date: "May 11, 2023",
            description: "Completed TESDA Online Program course on setting up computer servers, ensuring proper configuration and deployment for network operations."
        },
        {
            name: "CyberCrime Prevention",
            img: "Images/Certificates/CyberCrime Prevention.png",
            issuer: "DICT",
            date: "May 20, 2024",
            description: "Cybercrime prevention is the practice of protecting computers, networks, and data from illegal access or attacks. It involves awareness, security measures, and legal frameworks to protect digital assets."
        },
        {
            name: "PC Hardware Installation",
            img: "Images/Certificates/Pc Hardware Installation.png",
            issuer: "ILCDB",
            date: "October 27-29, 2022",
            description: "PC hardware installation involves assembling and setting up computer components such as CPU, RAM, storage, and peripherals. Proper installation ensures functionality, performance, and longevity of the system."
        },
        {
            name: "The Road to Digitalization Leads Through Cybersecurity",
            img: "Images/Certificates/The Road to Digitalization Leads Through Cybersecurity.png",
            issuer: "ILCDB",
            date: "October 28, 2022",
            description: "Digitalization requires strong cybersecurity practices to protect data, infrastructure, and users from cyber threats. This includes encryption, access controls, monitoring, and user education."
        },
        {
            name: "The Role of AI in Education",
            img: "Images/Certificates/The role of ai in education.png",
            issuer: "DICT Region V",
            date: "May 27, 2025",
            description: "AI in education helps personalize learning, automate administrative tasks, and enhance decision-making. It provides adaptive learning experiences and supports educators with insights on student progress."
        },
        {
            name: "Use of Blockchain",
            img: "Images/Certificates/Use of blockchain.png",
            issuer: "DICT Region IV-A",
            date: "June 19, 2024",
            description: "Blockchain technology provides secure, decentralized, and transparent record-keeping. It is widely applied in finance, supply chains, digital contracts, and startup ecosystems."
        },
        {
            name: "Google UX Design Professional Certificate",
            img: "Images/Certificates/Google_UX_Design.png",
            issuer: "Coursera / Google",
            date: "Dec 14, 2025",
            description: "Completed the online, non-credit Google UX Design Professional Certificate including 7 courses."
        },
        {
            name: "Google Project Management Professional Certificate",
            img: "Images/Certificates/Google_Project_Management.png", // Make sure you have the image in this path
            issuer: "Coursera / Google",
            date: "Dec 15, 2025",
            description: "Completed the online, non-credit Google Project Management Professional Certificate including 7 courses."
        },
        {
            name: "Google Data Analytics Professional Certificate",
            img: "Images/Certificates/Google_Data_Analytics.png",
            issuer: "Coursera / Google",
            date: "Dec 16, 2025",
            description: "Completed the online, non-credit Google Data Analytics Professional Certificate including 9 courses."
        },
        {
            name: "Python Essentials 1",
            img: "Images/Certificates/Cisco_Python_Essentials_1.png",
            issuer: "Cisco Networking Academy / DICT-ITU DTC Initiative",
            date: "Nov 05, 2025",
            description: "Completed the online Python Essentials 1 course through Cisco Networking Academy."
        },
        {
            name: "JavaScript Essentials 1",
            img: "Images/Certificates/Cisco_Javascript_Essentials_1.png",
            issuer: "Cisco Networking Academy / DICT-ITU DTC Initiative",
            date: "Nov 24, 2025",
            description: "Completed the online JavaScript Essentials 1 course through Cisco Networking Academy."
        },
        {
            name: "AI Learning ASEAN",
            img: "Images/Certificates/Google_AI_Class_Asean.png",
            issuer: "ASEAN Foundation / Google.org",
            date: "Nov 1, 2025",
            description: "Completed the 12-hour AI learning modules through ASEAN Foundation, demonstrating skills in artificial intelligence."
        }
    ];
    const recentCertificates = certificates.slice(-6);
    const createCertificateCard = (cert) => {
        const card = document.createElement("div");
        card.className = "certificate-card";
        card.style.width = "100%";
        card.style.aspectRatio = "16/9";
        card.style.perspective = "1000px";
        card.style.cursor = "pointer";
        const inner = document.createElement("div");
        inner.className = "certificate-inner";
        inner.style.width = "100%";
        inner.style.height = "100%";
        inner.style.transition = "transform 0.6s";
        inner.style.transformStyle = "preserve-3d";
        inner.style.position = "relative";
        // Front
        const front = document.createElement("div");
        front.className = "certificate-front";
        front.style.position = "absolute";
        front.style.width = "100%";
        front.style.height = "100%";
        front.style.backfaceVisibility = "hidden";
        const img = document.createElement("img");
        img.src = cert.img;
        img.alt = cert.name;
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        front.appendChild(img);
        // Back
        const back = document.createElement("div");
        back.className = "certificate-back";
        back.style.position = "absolute";
        back.style.width = "100%";
        back.style.height = "100%";
        back.style.backfaceVisibility = "hidden";
        back.style.transform = "rotateY(180deg)";
        back.style.backgroundColor = "#333";
        back.style.color = "#fff";
        back.style.padding = "10px";
        back.style.boxSizing = "border-box";
        back.style.overflowY = "auto";
        const name = document.createElement("h3");
        name.textContent = cert.name;
        const issued = document.createElement("p");
        issued.textContent = "Issued by: " + cert.issuer;
        issued.style.fontWeight = "bold";
        const date = document.createElement("p");
        date.textContent = "Date: " + cert.date;
        date.style.fontStyle = "italic";
        const desc = document.createElement("p");
        desc.textContent = cert.description;
        back.appendChild(name);
        back.appendChild(issued);
        back.appendChild(date);
        back.appendChild(desc);
        inner.appendChild(front);
        inner.appendChild(back);
        card.appendChild(inner);
        card.addEventListener("click", () => {
            inner.style.transform =
                inner.style.transform === "rotateY(180deg)" ? "rotateY(0deg)" : "rotateY(180deg)";
        });
        return card;
    };
    // Render recent certificates
    recentCertificates.forEach(cert => container.appendChild(createCertificateCard(cert)));
    certificatesSection.appendChild(container);
    // --- Make recent certificates responsive ---
    const recentMediaQuery = window.matchMedia("(max-width: 900px)");
    const recentMediaQueryMedium = window.matchMedia("(max-width: 1200px)");
    const updateRecentGrid = () => {
        if (recentMediaQuery.matches) {
            container.style.gridTemplateColumns = "1fr"; // 1 per row small screens
        }
        else if (recentMediaQueryMedium.matches) {
            container.style.gridTemplateColumns = "repeat(2, 1fr)"; // 2 per row medium
        }
        else {
            container.style.gridTemplateColumns = "repeat(3, 1fr)"; // 3 per row normal
        }
    };
    updateRecentGrid();
    recentMediaQuery.addEventListener("change", updateRecentGrid);
    recentMediaQueryMedium.addEventListener("change", updateRecentGrid);
    // View all button
    const allBtn = document.createElement("button");
    allBtn.textContent = "View All Certificates";
    allBtn.className = "btn btn-color-1";
    allBtn.style.display = "block";
    allBtn.style.margin = "20px auto 0 auto";
    certificatesSection.appendChild(allBtn);
    // --- Modal setup ---
    const navHeight = document.querySelector("nav")?.getBoundingClientRect().height || 60;
    const modal = document.createElement("div");
    modal.id = "cert-modal";
    modal.style.display = "none";
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(128,128,128,0.95)";
    modal.style.zIndex = "9999";
    const modalContent = document.createElement("div");
    modalContent.style.backgroundColor = "#333";
    modalContent.style.color = "#fff";
    modalContent.style.position = "absolute";
    modalContent.style.top = `${navHeight + 10}px`;
    modalContent.style.left = "50%";
    modalContent.style.transform = "translateX(-50%)";
    modalContent.style.width = "95%";
    modalContent.style.maxWidth = "1200px";
    modalContent.style.height = "80%";
    modalContent.style.borderRadius = "10px";
    modalContent.style.padding = "20px";
    modalContent.style.display = "flex";
    modalContent.style.flexDirection = "column";
    // Header with title and close button
    const modalHeader = document.createElement("div");
    modalHeader.style.display = "flex";
    modalHeader.style.justifyContent = "space-between";
    modalHeader.style.alignItems = "center";
    modalHeader.style.marginBottom = "10px";
    const modalTitle = document.createElement("h2");
    modalTitle.textContent = "All Certificates";
    modalTitle.style.margin = "0";
    modalTitle.style.fontSize = "1.5rem";
    const closeBtn = document.createElement("span");
    closeBtn.textContent = "×";
    closeBtn.style.fontSize = "32px";
    closeBtn.style.cursor = "pointer";
    closeBtn.onclick = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    };
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeBtn);
    modalContent.appendChild(modalHeader);
    // Modal certificates container
    const allContainer = document.createElement("div");
    allContainer.style.display = "grid";
    allContainer.style.gridTemplateColumns = "repeat(3, 1fr)";
    allContainer.style.gap = "20px";
    allContainer.style.justifyItems = "center";
    allContainer.style.flex = "1";
    allContainer.style.overflowY = "auto";
    allContainer.style.overflowX = "hidden";
    // Modal responsiveness
    const modalMediaQuery = window.matchMedia("(max-width: 900px)");
    const modalMediaQueryMedium = window.matchMedia("(max-width: 1200px)");
    const updateModalGrid = () => {
        if (modalMediaQuery.matches) {
            allContainer.style.gridTemplateColumns = "1fr";
        }
        else if (modalMediaQueryMedium.matches) {
            allContainer.style.gridTemplateColumns = "repeat(2, 1fr)";
        }
        else {
            allContainer.style.gridTemplateColumns = "repeat(3, 1fr)";
        }
    };
    updateModalGrid();
    modalMediaQuery.addEventListener("change", updateModalGrid);
    modalMediaQueryMedium.addEventListener("change", updateModalGrid);
    certificates.forEach(cert => allContainer.appendChild(createCertificateCard(cert)));
    modalContent.appendChild(allContainer);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    // Open modal
    allBtn.addEventListener("click", () => {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // prevent background scroll
    });
    // Prevent background scroll while allowing modal scroll
    document.addEventListener('wheel', (e) => {
        if (modal.style.display === 'block' && !modalContent.contains(e.target)) {
            e.preventDefault();
        }
    }, { passive: false });
    document.addEventListener('touchmove', (e) => {
        if (modal.style.display === 'block' && !modalContent.contains(e.target)) {
            e.preventDefault();
        }
    }, { passive: false });
    // Close modal when clicking outside content
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const certificatesSection = document.getElementById("certificates");

  // Section title
  const subtitle = document.createElement("p");
  subtitle.className = "section__text__p1";
  subtitle.textContent = "My Achievements";

  const title = document.createElement("h1");
  title.className = "title";
  title.textContent = "Certificates";

  certificatesSection.appendChild(subtitle);
  certificatesSection.appendChild(title);

  // Container for certificates
  const container = document.createElement("div");
  container.className = "certificates-container";

  // Certificates data with description, date, and issuer
  const certificates = [
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
    }
  ];

  certificates.forEach(cert => {
    const card = document.createElement("div");
    card.className = "certificate-card";

    const inner = document.createElement("div");
    inner.className = "certificate-inner";

    // Front: image
    const front = document.createElement("div");
    front.className = "certificate-front";
    const img = document.createElement("img");
    img.src = cert.img;
    img.alt = cert.name;
    front.appendChild(img);

    // Back: title + issued + date + description
    const back = document.createElement("div");
    back.className = "certificate-back";

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
    container.appendChild(card);

    // Flip on click
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });

  certificatesSection.appendChild(container);
});

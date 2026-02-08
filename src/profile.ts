// Run after DOM is loaded
console.log("profile.ts loaded"); // change per file

document.addEventListener("DOMContentLoaded", () => {

    interface Button {
        text: string;
        id?: string;
        link?: string;
        type: "dropdown" | "link";
    }

    interface Social {
        icon: string;
        link: string;
    }

    interface Profile {
        img: string;
        intro: string;
        name: string;
        role: string;
        buttons: Button[];
        socials: Social[];
    }

    const profileData: Profile = {
        img: "Images/profile-clarence.jpg",
        intro: "Hello, I'm",
        name: "Clarence P. Español",
        role: "Full Stack Developer",
        buttons: [
            { text: "Download", id: "download-cv", type: "dropdown" },
            { text: "Contact Info", link: "#contact", type: "link" }
        ],
        socials: [
            { icon: "fab fa-facebook", link: "https://www.facebook.com/clrnxvt/" },
            { icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/clarence-espanol-595742317" },
            { icon: "fab fa-github", link: "https://github.com/ClarenceEspanol" }
        ]
    };

    // Get profile section
    const profileSection = document.getElementById("profile");
    if (!profileSection) return;

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

    // Add socials
    const socialsContainer = document.getElementById("socials-container");
    if (socialsContainer) {
        profileData.socials.forEach(social => {
            const link = document.createElement("a");
            link.href = social.link;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.innerHTML = `<i class="${social.icon} icon"></i>`;
            socialsContainer.appendChild(link);
        });
    }

    // Add buttons
    const buttonsContainer = document.getElementById("profile-buttons");
    if (!buttonsContainer) return;

    profileData.buttons.forEach(btn => {
        if (btn.type === "dropdown") {
            const dropdown = document.createElement("div");
            dropdown.className = "dropdown";

            const dropdownContent = document.createElement("div");
            dropdownContent.className = "dropdown-content";

            const mainBtn = document.createElement("button");
            mainBtn.className = "btn btn-color-2";
            mainBtn.textContent = btn.text;
            mainBtn.onclick = () => dropdownContent.classList.toggle("show");
            dropdown.appendChild(mainBtn);

            const cvLink = document.createElement("a");
            cvLink.href = "Documents/Clarence_Espanol_CV.pdf";
            cvLink.download = "Clarence_Espanol_CV.pdf";
            cvLink.textContent = "Download CV";
            dropdownContent.appendChild(cvLink);

            const resumeLink = document.createElement("a");
            resumeLink.href = "Documents/Clarence_Espanol_Resume.pdf";
            resumeLink.download = "Clarence_Espanol_Resume.pdf";
            resumeLink.textContent = "Download Resume";
            dropdownContent.appendChild(resumeLink);

            dropdown.appendChild(dropdownContent);
            buttonsContainer.appendChild(dropdown);

            // Close dropdown on outside click
            window.addEventListener("click", e => {
                if (!dropdown.contains(e.target as Node)) {
                    dropdownContent.classList.remove("show");
                }
            });

        } else if (btn.type === "link") {
            const linkBtn = document.createElement("button");
            linkBtn.className = "btn btn-color-1";
            linkBtn.onclick = () => {
                if (btn.link) location.href = btn.link;
            };
            linkBtn.textContent = btn.text;
            buttonsContainer.appendChild(linkBtn);
        }
    });

});
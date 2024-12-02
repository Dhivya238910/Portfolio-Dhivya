document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio loaded successfully!");
  
    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  
    // Highlight Navigation on Scroll
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      threshold: 0.6,
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const activeLink = document.querySelector(
            `.nav-links a[href="#${entry.target.id}"]`
          );
          document.querySelectorAll(".nav-links a").forEach((link) => {
            link.classList.remove("active");
          });
          activeLink.classList.add("active");
        }
      });
    });
  
    sections.forEach((section) => observer.observe(section));
  
    // Button Animations for Skills Section
    const skillButtons = document.querySelectorAll(".section-skills button");
    skillButtons.forEach((button) => {
      button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
        button.style.transition = "transform 0.3s ease";
      });
  
      button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
      });
    });
  
    // Display Popups for Projects
    const projectButtons = document.querySelectorAll(".projects-grid button");
    projectButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const projectTitle = button.textContent;
        alert(`More details about ${projectTitle} will be available soon!`);
      });
    });
  
    // Contact Icon Hover Animation
    const contactIcons = document.querySelectorAll(".contact-icons img");
    contactIcons.forEach((icon) => {
      icon.addEventListener("mouseover", () => {
        icon.style.transform = "scale(1.2)";
        icon.style.transition = "transform 0.3s ease";
      });
  
      icon.addEventListener("mouseout", () => {
        icon.style.transform = "scale(1)";
      });
    });
  });
  
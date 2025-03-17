// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Project card hover effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Text Animation
const textArray = ["Software Engineer", "Cloud Architect", "Full Stack Developer", "ML Engineer"];
let currentTextIndex = 0;
const secondText = document.querySelector(".sec-text");

const changeText = () => {
    setTimeout(() => {
        secondText.textContent = textArray[currentTextIndex];
        currentTextIndex = (currentTextIndex + 1) % textArray.length;
    }, 0);
};

changeText();
setInterval(changeText, 3000);

// Active Navigation Link and Smooth Scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

// Handle active navigation and header background
window.addEventListener("scroll", () => {
    // Update active navigation link
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").slice(1) === current) {
            link.classList.add("active");
        }
    });

    // Update header background
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease',
    once: true,
    offset: 100
});

// Handle project image loading
document.addEventListener('DOMContentLoaded', () => {
    const projectImages = document.querySelectorAll('.project-image');
    
    projectImages.forEach(img => {
        // Add loading class initially
        img.classList.add('loading');
        
        // Remove loading class when image loads
        img.onload = () => {
            img.classList.remove('loading');
        };
        
        // Handle loading errors
        img.onerror = () => {
            img.classList.remove('loading');
            img.classList.add('error');
            img.src = 'images/placeholder.jpg'; // Fallback image
        };
    });
}); 
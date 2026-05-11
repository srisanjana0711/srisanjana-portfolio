// =============================
// SMOOTH SCROLLING
// =============================

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const targetId = this.getAttribute('href');

        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

    });

});


// =============================
// ACTIVE NAVBAR LINK
// =============================

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {

    let currentSection = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {

            currentSection = section.getAttribute('id');

        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if (link.getAttribute('href') === `#${currentSection}`) {

            link.classList.add('active');

        }

    });

});


// =============================
// SCROLL REVEAL ANIMATION
// =============================

const revealElements = document.querySelectorAll(
    '.card, .section-title, .about-text, .hero-text, .hero-image'
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add('show');

        }

    });

}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();


// =============================
// TYPING EFFECT
// =============================

const typingText = document.querySelector('.hero-text h3');

const textArray = [
    "Aspiring Data Scientist",
    "Research Enthusiast",
    "Lifelong Learner"
];

let textIndex = 0;
let charIndex = 0;

function typeEffect() {

    if (charIndex < textArray[textIndex].length) {

        typingText.textContent += textArray[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 80);

    }
    else {

        setTimeout(eraseEffect, 1500);

    }

}

function eraseEffect() {

    if (charIndex > 0) {

        typingText.textContent =
            textArray[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 40);

    }
    else {

        textIndex++;

        if (textIndex >= textArray.length) {

            textIndex = 0;

        }

        setTimeout(typeEffect, 300);

    }

}

typingText.textContent = "";

typeEffect();


// =============================
// NAVBAR BACKGROUND ON SCROLL
// =============================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
        navbar.style.background = "#ffffff";

    }
    else {

        navbar.style.boxShadow = "none";
        navbar.style.background = "white";

    }

});


// =============================
// CURRENT YEAR AUTO UPDATE
// =============================

const copyright =
    document.querySelector('.copyright');

const currentYear = new Date().getFullYear();

copyright.innerHTML =
    `© ${currentYear} Srisanjana. All Rights Reserved.`;


// =============================
// IMAGE HOVER EFFECT
// =============================

const profileImage = document.querySelector('.hero-image img');

profileImage.addEventListener('mouseover', () => {

    profileImage.style.transform = "scale(1.05)";
    profileImage.style.transition = "0.4s";

});

profileImage.addEventListener('mouseout', () => {

    profileImage.style.transform = "scale(1)";

});







// ================= POPUP =================

const popup = document.getElementById('popup');

const popupTitle =
    document.getElementById('popup-title');

const popupDescription =
    document.getElementById('popup-description');

const popupImage =
    document.getElementById('popup-image');


// OPEN POPUP

function openPopup(title, description, image){

    popup.classList.add('show');

    popupTitle.textContent = title;

    popupDescription.textContent = description;

    popupImage.src = image;

}


// CLOSE POPUP

function closePopup(){

    popup.classList.remove('show');

}


// CLOSE WHEN CLICKING OUTSIDE

window.addEventListener('click', (e) => {

    if(e.target === popup){

        closePopup();

    }

});
/* Toggle Navbar (Mobile) */
let menuIcon = document.querySelector('.hamburger');
let navbar = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};

/* Remove Menu on Scroll */
window.onscroll = () => {
    navbar.classList.remove('active');
};

/* Typing Animation using Typed.js (CDN linked in HTML) */
const typed = new Typed('.role', {
    strings: ['Full Stack Developer', 'Software Engineer', 'AI Undergraduate', 'Laravel Expert'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let counter = 1;
// Start at first real image (because index 0 is a clone)
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button Listeners
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Loop functionality (Infinite Scroll)
carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

// Handle window resize to keep images aligned
window.addEventListener('resize', () => {
    const newSize = carouselImages[0].clientWidth;
    carouselSlide.style.transition = "none";
    carouselSlide.style.transform = 'translateX(' + (-newSize * counter) + 'px)';
});
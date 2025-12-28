/* --- Toggle Navbar (Mobile) --- */
let menuIcon = document.querySelector('.hamburger');
let navbar = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x'); // Turns hamburger into X
    navbar.classList.toggle('active');
};

/* --- Remove Menu on Scroll --- */
window.onscroll = () => {
    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');
};

/* --- Typing Animation --- */
// Ensure Typed.js is loaded in HTML
if(document.querySelector('.role')) {
    const typed = new Typed('.role', {
        strings: ['Full Stack Developer', 'Software Engineer', 'AI Undergraduate', 'Laravel Expert'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}

/* --- Scroll Animation Observer --- */
// This finds all elements with class 'hidden' and reveals them when scrolled into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            // Optional: Remove this else block if you want animations to run only once
            // entry.target.classList.remove('show'); 
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

/* --- Carousel Logic (Only runs if carousel exists on page) --- */
const carouselSlide = document.querySelector('.carousel-slide');
if (carouselSlide) {
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');

    let counter = 1;
    
    // Function to update size on resize/load
    const updateSize = () => {
        if(carouselImages[0]) return carouselImages[0].clientWidth;
        return 0;
    };

    window.onload = function() {
        let size = updateSize();
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        
        window.addEventListener('resize', () => {
            size = updateSize();
            carouselSlide.style.transition = "none";
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        });

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
    }
}
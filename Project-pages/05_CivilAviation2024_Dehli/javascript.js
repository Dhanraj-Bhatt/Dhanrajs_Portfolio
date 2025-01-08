// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

// Reveal the elements with the 'data-scroll' attribute
sr.reveal('[data-scroll]');

// Carousel functionality (unchanged)
const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const items = Array.from(track.children);
let currentIndex = 0;

function updateCarousel() {
    const itemWidth = items[0].clientWidth;
    track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
}

nextButton.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = items.length - 1;
    }
    updateCarousel();
});

window.addEventListener('resize', updateCarousel);

// Prevent right-click on images and videos
document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName.toLowerCase() === 'img' || e.target.tagName.toLowerCase() === 'video') {
        e.preventDefault();
    }
});


// Disable video controls to prevent easy downloading
document.querySelectorAll('video').forEach(video => {
    video.setAttribute('controls', 'false');
});

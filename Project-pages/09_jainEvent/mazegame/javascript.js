const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

sr.reveal('[data-scroll]');

const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const items = track ? Array.from(track.children) : [];
let currentIndex = 0;

function updateCarousel() {
    if (!track || items.length === 0) return;

    const itemWidth = items[0].clientWidth;
    track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
}

if (track && items.length > 1 && prevButton && nextButton) {
    nextButton.addEventListener('click', () => {
        currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
} else {
    if (prevButton) prevButton.style.display = 'none';
    if (nextButton) nextButton.style.display = 'none';
}

document.addEventListener('contextmenu', (event) => {
    const tagName = event.target.tagName.toLowerCase();

    if (tagName === 'img' || tagName === 'video') {
        event.preventDefault();
    }
});

document.querySelectorAll('video').forEach((video) => {
    video.controls = false;
    video.setAttribute('controlslist', 'nodownload noremoteplayback');
});


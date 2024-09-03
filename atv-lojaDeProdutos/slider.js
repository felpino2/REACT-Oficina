document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slider = document.querySelector('.slider');

    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const slideWidth = slides[0].getBoundingClientRect().width;
    const totalSlides = slides.length;

    nextBtn.addEventListener('click', () => {
        if (slideIndex < totalSlides - 1) {
            slideIndex++;
            updateSlider();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (slideIndex > 0) {
            slideIndex--;
            updateSlider();
        }
    });

    function updateSlider() {
        const offset = -slideIndex * slideWidth;
        slider.style.transform = `translateX(${offset}px)`;
    }
});

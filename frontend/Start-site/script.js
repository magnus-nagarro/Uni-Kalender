const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.button-slide');
let currentSlideIndex = 0;

function changeSlide(slideIndex) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = 'translateX(-100%)';
    }

    slides[slideIndex].style.transform = 'translateX(0%)';
    currentSlideIndex = slideIndex;
}

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        changeSlide(index);
        clearInterval(slideInterval); 
    });
});

function autoChangeSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    changeSlide(currentSlideIndex);
}

let slideInterval = setInterval(autoChangeSlide, 5000); // Change slide every 2 seconds

changeSlide(0);

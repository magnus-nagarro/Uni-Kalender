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

let slideInterval = setInterval(autoChangeSlide, 5000);

changeSlide(0);


let currentIconIndex = 0;

function changeInformation(direction) {
    const iconContainers = document.querySelectorAll('.icon-container');
    iconContainers[currentIconIndex].classList.add('hide');
    currentIconIndex += direction;
    if (currentIconIndex < 0) {
        currentIconIndex = iconContainers.length - 1;
    } else if (currentIconIndex >= iconContainers.length) {
        currentIconIndex = 0;
    }
    iconContainers[currentIconIndex].classList.remove('hide');
}



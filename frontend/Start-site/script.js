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


document.addEventListener('DOMContentLoaded', function () {
    const loggedInUsername = localStorage.getItem('Loggedusername');

    const loginButton = document.getElementById('loginButton');
    const username = document.getElementById ("username")

    if (loggedInUsername) {
        loginButton.style.display = 'none';
        username.style.display = "inline-block"
    } else {
        loginButton.style.display = 'inline-block';
        username.style.display = "none" 
  }
});


document.addEventListener('DOMContentLoaded', function () {
    const loggedInUsername = localStorage.getItem('Loggedusername');

    if (loggedInUsername) {
        localStorage.setItem('username', loggedInUsername);
        console.log("localStorage Name", localStorage.username);

        document.getElementById('username').innerText = loggedInUsername;
    } else {
        console.log("Username not found in localStorage");
        }
});


document.addEventListener('DOMContentLoaded', function () {
    const loggedInUsername = localStorage.getItem('Loggedusername');
    const usernameBtn = document.getElementById('usernameBtn');
    const usernameContent = document.getElementById('usernameContent');
    
    if (loggedInUsername) {
        usernameBtn.innerText = loggedInUsername;
        usernameContent.style.display = 'block';
    } else {
        usernameBtn.innerText = 'Username';
        usernameContent.style.display = 'none';
    }
}); 

document.getElementById('logout').addEventListener('click', function() {
    var confirmLogout = confirm("Are you sure you want to log out?");
    if (confirmLogout) {
        localStorage.removeItem('Loggedusername');
        location.reload();
    }
});

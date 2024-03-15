const container = document.getElementById('container');
const register = document.getElementById('register');
const login = document.getElementById('login');

register.addEventListener('click', () => {
    container.classList.add("active");
});

login.addEventListener('click', () => {
    container.classList.remove("active");
});


document.getElementById('signupButton').addEventListener('click', function() {
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById("passwordInput").value

    var data = {
        "name": name,
        "e-mail": email,
        "password": password
    };
    data_body = JSON.stringify(data)

    fetch('http://localhost:8080/lecturer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: data_body,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log('User signed up successfully');
        alert('User signed up successfully');
        const signedUpUsername = name;
        window.location.href ="../Start-site/start-site.html"
        //window.location.href = "../main-site/main.html?username=" + encodeURIComponent(signedUpUsername);
    })
    .catch(error => {
        console.error('There was a problem with the sign up:', error);
    });
});



document.getElementById('loginButton').addEventListener('click', function() {
    var login_email = document.getElementById('loginemailInput').value;
    var login_password = document.getElementById('loginPassword').value;
    
    var data = {
        "e-mail": login_email,
        "password": login_password
    };
    data_body = JSON.stringify(data);

    fetch('http://localhost:8080/signin?e-mail='+encodeURIComponent(login_email)+ "&password=" + encodeURIComponent(login_password), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data_body,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.name) {
                console.log('User logged in successfully');
                alert('User logged in successfully');
                const loggedInUsername = data.name;
                console.log ("logged name", loggedInUsername)
                window.location.href = "../main-site/main.html?username=" + encodeURIComponent(loggedInUsername);
                localStorage.setItem ("Loggedusername", loggedInUsername)
        
            } else {
                console.log('Login failed: Please check your Username or Password!');
                alert('Login failed: Please check your Username or Password!');
            }
        })
        .catch(error => {
            console.error('There was a problem with the sign in:', error);
        });
});


function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}


function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

document.getElementById('signupButton').addEventListener('click', function() {
    setCookie('loggedIn', 'true', 2); 
});

document.getElementById('loginButton').addEventListener('click', function() {
    setCookie('loggedIn', 'true', 2); 
});

window.addEventListener('load', function() {
    var loggedInCookie = getCookie('loggedIn');
    if (loggedInCookie === 'true') {
        console.log('User is logged in');
    } else {
        console.log('User is not logged in');
    }
});

function logout() {
    setCookie('loggedIn', '', -1);
}



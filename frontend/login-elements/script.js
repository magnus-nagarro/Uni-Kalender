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
    console.log ("name" , name)
    var email = document.getElementById('emailInput').value;
    console.log ("mail", email)
    var password = document.getElementById("passwordInput").value
    console.log ("password", password)

    // Create a data object to send to the backend
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
        window.location.href = "../main-site/main.html?username=" + encodeURIComponent(signedUpUsername);
    })
    .catch(error => {
        console.error('There was a problem with the sign up:', error);
    });
});



document.getElementById('loginButton').addEventListener('click', function() {
    var login_email = document.getElementById('loginemailInput').value;
    console.log("email", login_email);
    var login_password = document.getElementById('loginPassword').value;
    console.log("email", login_password);


    // Create a data object to send to the backend
    var data = {
        "e-mail": login_email,
        "password": login_password
    };
    data_body = JSON.stringify(data);

    fetch('http://localhost:8080/signin?e-mail=' + encodeURIComponent(login_email)+ "&password=" + encodeURIComponent(login_password), {
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
                window.location.href = "../main-site/main.html?username=" + encodeURIComponent(loggedInUsername);
            } else {
                console.log('Login failed: Please check your Username or Password!');
                alert('Login failed: Please check your Username or Password!');
            }
        })
        .catch(error => {
            console.error('There was a problem with the sign in:', error);
        });
});
import * as calendar from '../../calendar-js-2.10.12/dist/calendar.js'

var calendarInstance1 = new calendarJs("calendar", {
    manualEditingEnabled: true,
    tooltipDelay: 100,
    weekendDays: [5, 6],
    workingDays: [0, 1, 2, 3, 4],
    defaultEventDuration: 60,
    views: {
        fullMonth: {
            showExtraTitleBarButtons: false
        },
        fullWeek: {
            showExtraTitleBarButtons: false
        },
        fullDay: {
            showExtraTitleBarButtons: false
        },
        fullYear: {
            showExtraTitleBarButtons: false
        }
    },

    //Add Event data in the backend
    onEventAdded: function (event) {
        console.log("Event added");
        var json_event = JSON.stringify(event);
        console.log(json_event);
        fetch('http://localhost:8080/lecture', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: json_event,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                console.log('Event data saved successfully.');
            })
            .catch(error => {
                console.error('Error saving event data:', error);
            });
    },

    //Update Event Data in the backend
    onEventUpdated: function (event) {
        console.log("Event updated");
        var updated_data = JSON.stringify(event);
        console.log(updated_data);
        fetch('http://localhost:8080/lecture', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: updated_data,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                console.log('Event data updated successfully.');
            })
            .catch(error => {
                console.error('Error saving event data:', error);
            });
    },

    //Remove Events from the backend
    onEventRemoved: function (event) {
        console.log("Event deleted");
        var delete_data = JSON.stringify(event);
        fetch('http://localhost:8080/lecture', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: delete_data,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                console.log('Event data deleted successfully.');
            })
            .catch(error => {
                console.error('Error saving event data:', error);
            });
    },

    //Pull Events from the backend and import them from json
    onRender: function (event) {
        console.log("Calendar rendered");
        fetch('http://localhost:8080/lecture', {
            method: 'GET',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                length = parseInt(data[-1]);
                for (let i = 0; i < length; i++) {
                    var buff = {
                        "events": [data[i]]
                    }
                    calendarInstance1.addEventsFromJson(JSON.stringify(buff));
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    },
});


const stars = document.querySelectorAll('.star');
stars.forEach(star => {
    star.addEventListener('click', e => {
        const value = e.target.dataset.value;
        console.log('Rating:', value);
    });
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

document.addEventListener("DOMContentLoaded", function() {
    var logoutLink = document.getElementById("logout");

    logoutLink.addEventListener("click", function(event) {
        event.preventDefault();

        var confirmLogout = confirm("Are you sure you want to log out?");
        if (confirmLogout) {
             window.location.href = "../Start-site/start-site.html";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var go_main = document.getElementById("go-main");

    go_main.addEventListener("click", function(event) {
        event.preventDefault();

        var confirmLogout = confirm("Are you sure you want to Leave?");
        if (confirmLogout) {
             window.location.href = "../Start-site/start-site.html";
        }
    });
});

document.getElementById('logout').addEventListener('click', function() {
    fetch('http://localhost:8080/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        localStorage.removeItem('Loggedusername');
        //console.log('User signed up successfully');
        //alert('User signed up successfully');
        //const signedUpUsername = name;
        //window.location.href ="../Start-site/start-site.html"
        ////window.location.href = "../main-site/main.html?username=" + encodeURIComponent(signedUpUsername);
    })
    .catch(error => {
        console.error('There was a problem with the sign up:', error);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const loggedInUsername = localStorage.getItem('Loggedusername');
    const blurContainer = document.querySelector('blurrContainer');
    console.log ("WHSSS", loggedInUsername)

    if (loggedInUsername) {
        blurContainer.style.display = 'none';
    } else {
        blurContainer.style.display = 'block';
  }
});

document.addEventListener('DOMContentLoaded', function () {
    const loggedInUsername = localStorage.getItem('Loggedusername');
    const blurContainer = document.querySelector('#blurrContainer'); 

    if (loggedInUsername) {
        blurContainer.style.display = 'none';
    } else {
        blurContainer.style.display = 'block';
        document.body.classList.add('blur-scroll-lock'); 
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const loggedInUsername = localStorage.getItem('Loggedusername');
    const userContainer = document.querySelector('.user-container');
    const loginButton = document.querySelector ("#loginButton") 

    if (loggedInUsername) {
        userContainer.style.display = 'block';
        loginButton.style.display = 'none';
    } else {
        userContainer.style.display = 'none';
        loginButton.style.display = 'inline-block';
    }
});



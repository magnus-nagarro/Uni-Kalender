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
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: updated_data,
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

    //Remove Events from the backend
    onEventRemoved: function (event) {
        console.log("Event deleted");
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
    // Retrieve the username from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    // Update the content of the username span
    document.getElementById('username').innerText = username;
});

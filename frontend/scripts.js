
import * as calendar from '../calendar-js-2.10.12/dist/calendar.js'

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
});

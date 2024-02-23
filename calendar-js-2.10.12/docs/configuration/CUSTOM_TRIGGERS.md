# Calendar.js - Custom Triggers:

Below is a list of all the custom triggers supported in Calendar.js, which are fired when specific actions occur.
<br>
<br>


## For Events:

### options.onBeforeEventAddEdit( *event* ):
Fires when an event is about to be added/edited via the Event Editor dialog (stops the Event Editor dialog opening).
<br>
***Parameter:*** event: '*Event*' - The event details (if being edited).

### options.onEventAdded( *event* ):
Fires when an event is added.
<br>
***Parameter:*** event: '*Event*' - The event details.

### options.onEventUpdated( *event* ):
Fires when an event is updated.
<br>
***Parameter:*** event: '*Event*' - The event details.

### options.onEventRemoved( *event* ):
Fires when an event is removed.
<br>
***Parameter:*** event: '*Event*' - The event details.

### options.onEventsAdded( *events* ):
Fires when events are added.
<br>
***Parameter:*** events: '*Event[]*' - The array of events.

### options.onEventsUpdated( *events* ):
Fires when events are updated.
<br>
***Parameter:*** events: '*Event[]*' - The array of events.

### options.onEventsSet( *events* ):
Fires when events are set (all other events are cleared).
<br>
***Parameter:*** events: '*Event[]*' - The array of events.

### options.onEventsSetFromJSON( *json* ):
Fires when events are set from JSON (all other events are cleared).
<br>
***Parameter:*** json: '*string*' - The JSON.

### options.onEventsAddedFromJSON( *json* ):
Fires when events are added from JSON.
<br>
***Parameter:*** json: '*string*' - The JSON.

### options.onEventsExported( *events* ):
Fires when events are exported.
<br>
***Parameter:*** events: '*Event[]*' - The array of events.

### options.onEventsCleared():
Fires when events are cleared.

### options.onEventDragStart( *event* ):
Fires when dragging an event is started.
<br>
***Parameter:*** event: '*Event*' - The event details.

### options.onEventDragStop( *event* ):
Fires when dragging an event is stopped.
<br>
***Parameter:*** event: '*Event*' - The event details.

### options.onEventDragDrop( *event*, *targetDate* ):
Fires when an event that was dragged is dropped on a date.
<br>
***Parameter:*** event: '*Event*' - The event details.
<br>
***Parameter:*** targetDate: '*Object*' - The date the event was dropped on.

### options.onEventClick( *event* ):
Fires when an event is clicked.
<br>
***Parameter:*** event: '*Event*' - The event details.

### options.onEventDoubleClick( *event* ):
Fires when an event is double-clicked (only enabled when Editing Mode is disabled).
<br>
***Parameter:*** event: '*Event*' - The event details.

### options.onEventUrlClicked( *url* ):
Fires when an event URL is clicked.
<br>
***Parameter:*** url: '*string*' - The URL clicked.

### options.onEventsFetch():
Fires when the calendar refreshes (it will pull an array of events to add, or update).
<br>
***Returns:*** '*Event[]*' - An array of event.

### options.onEventsImported( *events* ):
Fires when events are imported.
<br>
***Parameter:*** events: '*Event[]*' - The array of events.


<br>

## For Rendering:

### options.onRender( *id* ):
Fires when the Calendar is rendered.
<br>
***Parameter:*** id: '*string*' - The Id of the Calendar.

### options.onFullDayEventRender( *element*, *event* ):
Fires when the Full Day view renders an event.
<br>
***Parameter:*** element: '*Object*' - The events DOM element that has been added.
<br>
***Parameter:*** event: '*Event*' - The event details.
<br>
***Returns:*** '*boolean*' - States if this event has been custom rendered.

### options.onFullWeekEventRender( *element*, *event* ):
Fires when the Full Week view renders an event.
<br>
***Parameter:*** element: '*Object*' - The events DOM element that has been added.
<br>
***Parameter:*** event: '*Event*' - The event details.
<br>
***Returns:*** '*boolean*' - States if this event has been custom rendered.

### options.onFullMonthEventRender( *element*, *event* ):
Fires when the Full Month view (default) renders an event.
<br>
***Parameter:*** element: '*Object*' - The events DOM element that has been added.
<br>
***Parameter:*** event: '*Event*' - The event details.
<br>
***Returns:*** '*boolean*' - States if this event has been custom rendered.

### options.onAllEventsEventRender( *element*, *event* ):
Fires when the All Events view renders an event.
<br>
***Parameter:*** element: '*Object*' - The events DOM element that has been added.
<br>
***Parameter:*** event: '*Event*' - The event details.
<br>
***Returns:*** '*boolean*' - States if this event has been custom rendered.

### options.onTimelineEventRender( *element*, *event* ):
Fires when the Timeline view renders an event.
<br>
***Parameter:*** element: '*Object*' - The events DOM element that has been added.
<br>
***Parameter:*** event: '*Event*' - The event details.
<br>
***Returns:*** '*boolean*' - States if this event has been custom rendered.

### options.onWidgetEventRender( *element*, *event* ):
Fires when the Widget mode renders an event.
<br>
***Parameter:*** element: '*Object*' - The events DOM element that has been added.
<br>
***Parameter:*** event: '*Event*' - The event details.
<br>
***Returns:*** '*boolean*' - States if this event has been custom rendered.

### options.onToolTipEventRender( *tooltip*, *event* ):
Fires when a tooltip is rendered for an event.
<br>
***Parameter:*** tooltip: '*Object*' - The tooltip DOM element that has been shown.
<br>
***Parameter:*** event: '*Event*' - The event details.
<br>
***Returns:*** '*boolean*' - States if this tooltip has been custom rendered.

### options.onFullDayTitleRender( *dateTime* ):
Fires when the Full Day view renders its title.
<br>
***Parameter:*** dateTime: '*Object*' - The Date and Time being displayed.
<br>
***Returns:*** '*boolean*' - States if the title has been custom rendered.

### options.onFullWeekTitleRender( *weekStartDateTime*, *weekStartEndTime* ):
Fires when the Full Week view renders its title.
<br>
***Parameter:*** weekStartDateTime: '*Object*' - The Date and Time being displayed for the start of the end.
<br>
***Parameter:*** weekStartEndTime: '*Object*' - The Date and Time being displayed for the end of the week.
<br>
***Returns:*** '*boolean*' - States if the title has been custom rendered.

### options.onTimelineTitleRender( *dateTime* ):
Fires when the Timeline view renders its title.
<br>
***Parameter:*** dateTime: '*Object*' - The Date and Time being displayed.
<br>
***Returns:*** '*boolean*' - States if the title has been custom rendered.

### options.onFullMonthPinUpRender( *pinup*, *date* ):
Fires when the Full Month pin-up is rendered after a month/year change.
<br>
***Parameter:*** pinup: '*Object*' - The pinup DOM element that has been shown.
<br>
***Parameter:*** date: '*Object*' - The Date being displayed.
<br>
***Returns:*** '*boolean*' - States if the pin-up area has been custom rendered.


<br>

## For The Display Date:

### options.onPreviousMonth( *date* ):
Fires when the calendar moves to the previous month.
<br>
***Parameter:*** date: '*Object*' - The new display date.

### options.onNextMonth( *date* ):
Fires when the calendar moves to the next month.
<br>
***Parameter:*** date: '*Object*' - The new display date.

### options.onPreviousYear( *date* ):
Fires when the calendar moves to the previous year.
<br>
***Parameter:*** date: '*Object*' - The new display date.

### options.onNextYear( *date* ):
Fires when the calendar moves to the next year.
<br>
***Parameter:*** date: '*Object*' - The new display date.

### options.onToday():
Fires when the calendar is moved to today's date.

### options.onSetDate( *date* ):
Fires when the calendar date is set manually.
<br>
***Parameter:*** date: '*Object*' - The new display date.


<br>

## For Groups:

### options.onGroupsCleared():
Fires when all the groups are cleared from the events.

### options.onGroupRemoved( *groupName* ):
Fires when a specific group is removed.
<br>
***Parameter:*** groupName: '*string*' - The name of the group.


<br>

## For Options:

### options.onOptionsUpdated( *options* ):
Fires when the configurable options are updated.
<br>
***Parameter:*** options: '*Options*' - The options.

### options.onSearchOptionsUpdated( *options* ):
Fires when the configurable search options are updated.
<br>
***Parameter:*** options: '*Search*' - The options.


<br>

## For DatePicker Mode:

### options.onDatePickerDateChanged( *date* ):
Fires when the DatePicker moves to a specific date.
<br>
***Parameter:*** date: '*Object*' - The new display date.

### options.onDatePickerOpened( *id* ):
Fires when the DatePicker is opened.
<br>
***Parameter:*** id: '*string*' - The Id of the DatePicker.

### options.onDatePickerClosed( *id* ):
Fires when the DatePicker is closed.
<br>
***Parameter:*** id: '*string*' - The Id of the DatePicker.


<br>

## For Actions:

### options.onFullScreenModeChanged( *flag* ):
Fires when the full-screen mode is changed.
<br>
***Parameter:*** flag: '*boolean*' - States if full-screen mode is on.

### options.onDestroy( *id* ):
Fires when the Calendar is destroyed.
<br>
***Parameter:*** id: '*string*' - The Id of the Calendar.

### options.onRefresh():
Fires when the Calendar is refreshed.

### options.onBusyStateChange( *flag* ):
Fires when the busy state changes.
<br>
***Parameter:*** flag: '*boolean*' - The flag that states if the calendar is busy.


<br>

## For Browser Notifications:

### options.onNotificationClicked( *event* ):
Fires when a browser notification is clicked for an event.
<br>
***Parameter:*** event: '*Event*' - The event details.

### options.onNotification( *event* ):
Fires when a browser notification is shown for an event.
<br>
***Parameter:*** event: '*Event*' - The event details.


<br>

## For Visibility Changes:

### options.onVisibleGroupsChanged( *groupNames* ):
Fires when the visible groups are changed.
<br>
***Parameter:*** groupNames: '*string[]*' - The visible group names.

### options.onVisibleEventTypesChanged( *eventTypeIds* ):
Fires when the visible groups are changed.
<br>
***Parameter:*** eventTypeIds: '*number[]*' - The visible event type IDs.

<br>


## Example:

```markdown
<script> 
  calendarInstance.setOptions( {
      onEventAdded: yourJsFunction
  } );
</script>
```
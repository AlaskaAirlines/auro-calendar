# auro-calendar

## Properties

| Property                | Type                | Description                                      |
|-------------------------|---------------------|--------------------------------------------------|
| `centralDate`           | `Object`            | The date that determines the currently visible month. |
| `focusedDate`           | `Date \| null`      | The currently focused date (if any).             |
| `maxDate`               | `Date`              | Maximum date. All dates after will be disabled.  |
| `minDate`               | `Date`              | Minimum date. All dates before will be disabled. |
| `selectedDate`          | `Date \| undefined` | The selected date, usually synchronized with datepicker-input.<br />Not to be confused with the focused date (therefore not necessarily in active month view). |
| `weekdayHeaderNotation` | `string`            | Weekday header notation, based on Intl DatetimeFormat:<br />- 'short' (e.g., Thu)<br />- 'narrow' (e.g., T).<br />Default is 'short'. |

## Methods

| Method              | Type                          | Description                                      |
|---------------------|-------------------------------|--------------------------------------------------|
| `focusCentralDate`  | `(): void`                    |                                                  |
| `focusDate`         | `(date: Date): Promise<void>` | **date**: undefined                              |
| `focusSelectedDate` | `(): Promise<void>`           |                                                  |
| `goToNextMonth`     | `(): void`                    |                                                  |
| `goToNextYear`      | `(): void`                    |                                                  |
| `goToPreviousMonth` | `(): void`                    |                                                  |
| `goToPreviousYear`  | `(): void`                    |                                                  |
| `initCentralDate`   | `(): void`                    | This exposes an interface for datepickers that want to<br />reinitialize when calendar is opened |

## Events

| Event                       | Type               | Description                                      |
|-----------------------------|--------------------|--------------------------------------------------|
| `auroCalendar-dateSelected` | `CustomEvent<any>` | Notifies that a date has been selected in the calendar. |
| `auroCalendar-ready`        | `CustomEvent<any>` | Notifies that the component has finished initializing. |

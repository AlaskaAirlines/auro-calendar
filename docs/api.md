# auro-calendar

## Properties

| Property                | Modifiers | Type                     |
|-------------------------|-----------|--------------------------|
| `centralDate`           |           | `Date`                   |
| `dayPreprocessor`       |           | `(day: Day) => Day`      |
| `disableDates`          |           | `(day: Date) => boolean` |
| `firstDayOfWeek`        |           | `number`                 |
| `focusedDate`           | readonly  | `Date \| null`           |
| `locale`                |           | `string`                 |
| `maxDate`               |           | `Date`                   |
| `minDate`               |           | `Date`                   |
| `selectedDate`          |           | `Date \| undefined`      |
| `weekdayHeaderNotation` |           | `string`                 |

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
| `auroCalendar-dateSelected` | `CustomEvent<any>` |                                                  |
| `auroCalendar-ready`        | `CustomEvent<any>` | Notifies that the component has finished initializing. |

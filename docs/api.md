# auro-calendar

## Properties

| Property                | Attribute               | Type     | Default     |
|-------------------------|-------------------------|----------|-------------|
| `centralDate`           | `centralDate`           |          |             |
| `disableDates`          | `disableDates`          | `string` | "undefined" |
| `firstDayOfWeek`        | `firstDayOfWeek`        | `number` | 0           |
| `locale`                | `locale`                | `string` | "undefined" |
| `maxDate`               | `maxDate`               |          | "undefined" |
| `minDate`               | `minDate`               |          | "undefined" |
| `selectedDate`          | `selectedDate`          |          | "undefined" |
| `weekdayHeaderNotation` | `weekdayHeaderNotation` | `string` | "narrow"    |

## Events

| Event                       | Type               | Description                                      |
|-----------------------------|--------------------|--------------------------------------------------|
| `auroCalendar-dateSelected` | `CustomEvent<any>` |                                                  |
| `auroCalendar-ready`        | `CustomEvent<any>` | Notifies that the component has finished initializing. |

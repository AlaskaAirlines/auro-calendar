

# auro-calendar

## Properties

| Property                | Type                | Description                                      |
|-------------------------|---------------------|--------------------------------------------------|
| [centralDate](#centralDate)           | `Object`            | The date that determines the currently visible month. |
| [focusedDate](#focusedDate)           | `Date \| null`      | The currently focused date (if any).             |
| [maxDate](#maxDate)               | `Date`              | Maximum date. All dates after will be disabled.  |
| [minDate](#minDate)               | `Date`              | Minimum date. All dates before will be disabled. |
| [selectedDate](#selectedDate)          | `Date \| undefined` | The selected date, usually synchronized with datepicker-input.<br />Not to be confused with the focused date (therefore not necessarily in active month view). |
| [weekdayHeaderNotation](#weekdayHeaderNotation) | `string`            | Weekday header notation, based on Intl DatetimeFormat:<br />- 'short' (e.g., Thu)<br />- 'narrow' (e.g., T).<br />Default is 'short' |

## Methods

| Method              | Type                          | Description                                      |
|---------------------|-------------------------------|--------------------------------------------------|
| [focusCentralDate](#focusCentralDate)  | `(): void`                    |                                                  |
| [focusDate](#focusDate)         | `(date: Date): Promise<void>` | **date**: undefined                              |
| [focusSelectedDate](#focusSelectedDate) | `(): Promise<void>`           |                                                  |
| [goToNextMonth](#goToNextMonth)     | `(): void`                    |                                                  |
| [goToNextYear](#goToNextYear)      | `(): void`                    |                                                  |
| [goToPreviousMonth](#goToPreviousMonth) | `(): void`                    |                                                  |
| [goToPreviousYear](#goToPreviousYear)  | `(): void`                    |                                                  |
| [initCentralDate](#initCentralDate)   | `(): void`                    | This exposes an interface for datepickers that want to<br />reinitialize when calendar is opened |

## Events

| Event                       | Type               | Description                                      |
|-----------------------------|--------------------|--------------------------------------------------|
| `auroCalendar-dateSelected` | `CustomEvent<any>` | Notifies that a date has been selected in the calendar. |
| `auroCalendar-ready`        | `CustomEvent<any>` | Notifies that the component has finished initializing. |

## API Examples

### Basic

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <auro-calendar></auro-calendar>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-calendar></auro-calendar>
```

</auro-accordion>

### Property Examples

#### centralDate

Date that determines the currently visible month.

<div class="exampleWrapper">
  <auro-calendar id="auroCalendarCentralDate"></auro-calendar>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```js
setTimeout(setCentralDate, 200);

function setCentralDate() {
  const auroCalendarCentralDateElem = document.querySelector('#auroCalendarCentralDate');

  auroCalendarCentralDateElem.centralDate = new Date(2000, 6, 6);
}
```

```html
<auro-calendar id="auroCalendarCentralDate"></auro-calendar>
```

</auro-accordion>

#### maxDate

To give a higher limit you can bind a date to the `maxDate` property. In this example, we show how to create an offset of + 2 days.

<div class="exampleWrapper">
  <auro-calendar id="auroCalendarMaxDate"></auro-calendar>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-calendar id="auroCalendarMaxDate"></auro-calendar>
```

</auro-accordion>

#### minDate

To give a lower limit you can bind a date to the `minDate` property.

<div class="exampleWrapper">
  <auro-calendar id="auroCalendarMinDate"></auro-calendar>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-calendar id="auroCalendarMinDate"></auro-calendar>
```

</auro-accordion>

#### selectedDate

The `selectedDate` is the date which is currently marked as selected.
You usually select a date by clicking on it with the mouse or hitting Enter on the keyboard.

The `selectedDate` might not be within the dates in the current month view.

<div class="exampleWrapper">
  <auro-calendar id="auroCalendarSelectedDate"></auro-calendar>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-calendar id="auroCalendarSelectedDate"></auro-calendar>
```

</auro-accordion>

#### weekdayHeaderNotation

Weekday header notation, based on Intl DatetimeFormat:

- 'short' (e.g., Thu)
- 'narrow' (e.g., T).

Default is 'short'

<div class="exampleWrapper">
  <auro-calendar id="auroCalendarWeekdayHeaderNotation"></auro-calendar>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-calendar id="auroCalendarWeekdayHeaderNotation"></auro-calendar>
```

</auro-accordion>

### Method Examples

#### <a name="methodName"></a>`methodName`<a href="#auro-calendar" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-calendar></auro-calendar>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-calendar></auro-calendar>
```

</auro-accordion>

### Event Examples

#### <a name="eventName"></a>`eventName`<a href="#auro-calendar" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-calendar></auro-calendar>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-calendar></auro-calendar>
```

</auro-accordion>

### Slot Examples

#### <a name="slotName"></a>`slotName`<a href="#auro-calendar" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-calendar></auro-calendar>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-calendar></auro-calendar>
```

</auro-accordion>

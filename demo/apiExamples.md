

# auro-calendar

## Properties

| Property                | Modifiers | Type                     |
|-------------------------|-----------|--------------------------|
| [centralDate](#centralDate)           |           | `Date`                   |
| [dayPreprocessor](#dayPreprocessor)       |           | `(day: Day) => Day`      |
| [disableDates](#disableDates)          |           | `(day: Date) => boolean` |
| [firstDayOfWeek](#firstDayOfWeek)        |           | `number`                 |
| [focusedDate](#focusedDate)           | readonly  | `Date \| null`           |
| [locale](#locale)                |           | `string`                 |
| [maxDate](#maxDate)               |           | `Date`                   |
| [minDate](#minDate)               |           | `Date`                   |
| [selectedDate](#selectedDate)          |           | `Date \| undefined`      |
| [weekdayHeaderNotation](#weekdayHeaderNotation) |           | `string`                 |

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
| `auroCalendar-dateSelected` | `CustomEvent<any>` |                                                  |
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

### Attribute Examples

#### <a name="attributeName"></a>`attributeName`<a href="#auro-calendar" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
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

### Property Examples

#### <a name="propertyName"></a>`propertyName`<a href="#auro-calendar" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
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

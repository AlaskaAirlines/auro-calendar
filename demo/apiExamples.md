

# auro-calendar

The auro-calendar element provides users a way to ... (it would be great if you fill this out).

## Attributes

| Attribute  | Type      | Description                                      |
|------------|-----------|--------------------------------------------------|
| [cssClass](#cssClass) | `String`  | Applies designated CSS class to demo element - you want to delete me! |
| [fixed](#fixed)    | `Boolean` | Uses fixed pixel values for element shape        |

## Properties

| Property       | Attribute      | Default |
|----------------|----------------|---------|
| [centralDate](#centralDate)  | `centralDate`  |         |
| [maxDate](#maxDate)      | `maxDate`      |         |
| [minDate](#minDate)      | `minDate`      |         |
| [selectedDate](#selectedDate) | `selectedDate` | null    |

## Methods

| Method        | Type                           |
|---------------|--------------------------------|
| [clickTest](#clickTest)   | `(): void`                     |
| [setDateProp](#setDateProp) | `(prop: any, date: any): void` |

## API Examples

### Basic

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- <auro-calendar></auro-calendar> -->
      <!-- <auro-calendar selectedDate="2022, 06, 10"></auro-calendar> -->
      <!-- <auro-calendar selectedDate="2019/12/09" maxDate="2019/12/25"  minDate="2019/12/06"></auro-calendar> -->
      <!-- <auro-calendar selectedDate="06/14/2022"></auro-calendar> -->
      <!-- <auro-calendar selectedDate="2019/12/09" centralDate="2019/11/04"></auro-calendar> -->
      <auro-calendar></auro-calendar>
      <!-- <auro-calendar selectedDate="06/06/2022" centralDate="06/08/2022"></auro-calendar> -->
      <!-- <auro-calendar minDate="12/12/2002" maxDate="01/02/2023"></auro-calendar> -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<!-- <auro-calendar></auro-calendar> -->
<!-- <auro-calendar selectedDate="2022, 06, 10"></auro-calendar> -->
<!-- <auro-calendar selectedDate="2019/12/09" maxDate="2019/12/25"  minDate="2019/12/06"></auro-calendar> -->
<!-- <auro-calendar selectedDate="06/14/2022"></auro-calendar> -->
<!-- <auro-calendar selectedDate="2019/12/09" centralDate="2019/11/04"></auro-calendar> -->
<auro-calendar></auro-calendar>
<!-- <auro-calendar selectedDate="06/06/2022" centralDate="06/08/2022"></auro-calendar> -->
<!-- <auro-calendar minDate="12/12/2002" maxDate="01/02/2023"></auro-calendar> -->
```

</auro-accordion>

### Attribute Examples

#### <a name="attributeName"></a>`attributeName`<a href="#auro-calendar" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <!-- <auro-calendar></auro-calendar> -->
  <!-- <auro-calendar selectedDate="2022, 06, 10"></auro-calendar> -->
  <!-- <auro-calendar selectedDate="2019/12/09" maxDate="2019/12/25"  minDate="2019/12/06"></auro-calendar> -->
  <!-- <auro-calendar selectedDate="06/14/2022"></auro-calendar> -->
  <!-- <auro-calendar selectedDate="2019/12/09" centralDate="2019/11/04"></auro-calendar> -->
  <auro-calendar></auro-calendar>
  <!-- <auro-calendar selectedDate="06/06/2022" centralDate="06/08/2022"></auro-calendar> -->
  <!-- <auro-calendar minDate="12/12/2002" maxDate="01/02/2023"></auro-calendar> -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<!-- <auro-calendar></auro-calendar> -->
<!-- <auro-calendar selectedDate="2022, 06, 10"></auro-calendar> -->
<!-- <auro-calendar selectedDate="2019/12/09" maxDate="2019/12/25"  minDate="2019/12/06"></auro-calendar> -->
<!-- <auro-calendar selectedDate="06/14/2022"></auro-calendar> -->
<!-- <auro-calendar selectedDate="2019/12/09" centralDate="2019/11/04"></auro-calendar> -->
<auro-calendar></auro-calendar>
<!-- <auro-calendar selectedDate="06/06/2022" centralDate="06/08/2022"></auro-calendar> -->
<!-- <auro-calendar minDate="12/12/2002" maxDate="01/02/2023"></auro-calendar> -->
```

</auro-accordion>

### Property Examples

#### <a name="propertyName"></a>`propertyName`<a href="#auro-calendar" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <!-- <auro-calendar></auro-calendar> -->
  <!-- <auro-calendar selectedDate="2022, 06, 10"></auro-calendar> -->
  <!-- <auro-calendar selectedDate="2019/12/09" maxDate="2019/12/25"  minDate="2019/12/06"></auro-calendar> -->
  <!-- <auro-calendar selectedDate="06/14/2022"></auro-calendar> -->
  <!-- <auro-calendar selectedDate="2019/12/09" centralDate="2019/11/04"></auro-calendar> -->
  <auro-calendar></auro-calendar>
  <!-- <auro-calendar selectedDate="06/06/2022" centralDate="06/08/2022"></auro-calendar> -->
  <!-- <auro-calendar minDate="12/12/2002" maxDate="01/02/2023"></auro-calendar> -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<!-- <auro-calendar></auro-calendar> -->
<!-- <auro-calendar selectedDate="2022, 06, 10"></auro-calendar> -->
<!-- <auro-calendar selectedDate="2019/12/09" maxDate="2019/12/25"  minDate="2019/12/06"></auro-calendar> -->
<!-- <auro-calendar selectedDate="06/14/2022"></auro-calendar> -->
<!-- <auro-calendar selectedDate="2019/12/09" centralDate="2019/11/04"></auro-calendar> -->
<auro-calendar></auro-calendar>
<!-- <auro-calendar selectedDate="06/06/2022" centralDate="06/08/2022"></auro-calendar> -->
<!-- <auro-calendar minDate="12/12/2002" maxDate="01/02/2023"></auro-calendar> -->
```

</auro-accordion>

### Method Examples

#### <a name="methodName"></a>`methodName`<a href="#auro-calendar" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <!-- <auro-calendar></auro-calendar> -->
  <!-- <auro-calendar selectedDate="2022, 06, 10"></auro-calendar> -->
  <!-- <auro-calendar selectedDate="2019/12/09" maxDate="2019/12/25"  minDate="2019/12/06"></auro-calendar> -->
  <!-- <auro-calendar selectedDate="06/14/2022"></auro-calendar> -->
  <!-- <auro-calendar selectedDate="2019/12/09" centralDate="2019/11/04"></auro-calendar> -->
  <auro-calendar></auro-calendar>
  <!-- <auro-calendar selectedDate="06/06/2022" centralDate="06/08/2022"></auro-calendar> -->
  <!-- <auro-calendar minDate="12/12/2002" maxDate="01/02/2023"></auro-calendar> -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<!-- <auro-calendar></auro-calendar> -->
<!-- <auro-calendar selectedDate="2022, 06, 10"></auro-calendar> -->
<!-- <auro-calendar selectedDate="2019/12/09" maxDate="2019/12/25"  minDate="2019/12/06"></auro-calendar> -->
<!-- <auro-calendar selectedDate="06/14/2022"></auro-calendar> -->
<!-- <auro-calendar selectedDate="2019/12/09" centralDate="2019/11/04"></auro-calendar> -->
<auro-calendar></auro-calendar>
<!-- <auro-calendar selectedDate="06/06/2022" centralDate="06/08/2022"></auro-calendar> -->
<!-- <auro-calendar minDate="12/12/2002" maxDate="01/02/2023"></auro-calendar> -->
```

</auro-accordion>

### Event Examples

#### <a name="eventName"></a>`eventName`<a href="#auro-calendar" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <!-- <auro-calendar></auro-calendar> -->
  <!-- <auro-calendar selectedDate="2022, 06, 10"></auro-calendar> -->
  <!-- <auro-calendar selectedDate="2019/12/09" maxDate="2019/12/25"  minDate="2019/12/06"></auro-calendar> -->
  <!-- <auro-calendar selectedDate="06/14/2022"></auro-calendar> -->
  <!-- <auro-calendar selectedDate="2019/12/09" centralDate="2019/11/04"></auro-calendar> -->
  <auro-calendar></auro-calendar>
  <!-- <auro-calendar selectedDate="06/06/2022" centralDate="06/08/2022"></auro-calendar> -->
  <!-- <auro-calendar minDate="12/12/2002" maxDate="01/02/2023"></auro-calendar> -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<!-- <auro-calendar></auro-calendar> -->
<!-- <auro-calendar selectedDate="2022, 06, 10"></auro-calendar> -->
<!-- <auro-calendar selectedDate="2019/12/09" maxDate="2019/12/25"  minDate="2019/12/06"></auro-calendar> -->
<!-- <auro-calendar selectedDate="06/14/2022"></auro-calendar> -->
<!-- <auro-calendar selectedDate="2019/12/09" centralDate="2019/11/04"></auro-calendar> -->
<auro-calendar></auro-calendar>
<!-- <auro-calendar selectedDate="06/06/2022" centralDate="06/08/2022"></auro-calendar> -->
<!-- <auro-calendar minDate="12/12/2002" maxDate="01/02/2023"></auro-calendar> -->
```

</auro-accordion>

### Slot Examples

#### <a name="slotName"></a>`slotName`<a href="#auro-calendar" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <!-- <auro-calendar></auro-calendar> -->
  <!-- <auro-calendar selectedDate="2022, 06, 10"></auro-calendar> -->
  <!-- <auro-calendar selectedDate="2019/12/09" maxDate="2019/12/25"  minDate="2019/12/06"></auro-calendar> -->
  <!-- <auro-calendar selectedDate="06/14/2022"></auro-calendar> -->
  <!-- <auro-calendar selectedDate="2019/12/09" centralDate="2019/11/04"></auro-calendar> -->
  <auro-calendar></auro-calendar>
  <!-- <auro-calendar selectedDate="06/06/2022" centralDate="06/08/2022"></auro-calendar> -->
  <!-- <auro-calendar minDate="12/12/2002" maxDate="01/02/2023"></auro-calendar> -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<!-- <auro-calendar></auro-calendar> -->
<!-- <auro-calendar selectedDate="2022, 06, 10"></auro-calendar> -->
<!-- <auro-calendar selectedDate="2019/12/09" maxDate="2019/12/25"  minDate="2019/12/06"></auro-calendar> -->
<!-- <auro-calendar selectedDate="06/14/2022"></auro-calendar> -->
<!-- <auro-calendar selectedDate="2019/12/09" centralDate="2019/11/04"></auro-calendar> -->
<auro-calendar></auro-calendar>
<!-- <auro-calendar selectedDate="06/06/2022" centralDate="06/08/2022"></auro-calendar> -->
<!-- <auro-calendar minDate="12/12/2002" maxDate="01/02/2023"></auro-calendar> -->
```

</auro-accordion>

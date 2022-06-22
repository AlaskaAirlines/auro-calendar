// Copyright (c) 2022 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import {LitElement, html} from 'lit';
import '@lion/calendar/define';

// If using auroElement base class
// See instructions for importing auroElement base class https://git.io/JULq4
// import { html, css } from "lit-element";
// import AuroElement from '@alaskaairux/webcorestylesheets/dist/auroElement/auroElement';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";
import styleCssFixed from './style-fixed-css.js';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-calendar element provides users a way to ... (it would be great if you fill this out).
 *
 * @attr {Boolean} fixed - Uses fixed pixel values for element shape
 * @attr {String} cssClass - Applies designated CSS class to demo element - you want to delete me!
 */

// build the component class
class AuroCalendar extends LitElement {
  constructor() {
    super();
    this.centralDate = { year: 1989, month: 0, date: 12 };
    this.disabledDates = null;
    this.firstDayOfWeek = 3;
    this.locale = null;
    this.maxDate = null;
    this.minDate = null;
    this.selectedDate = '12/6/1990'; //{ year: 1989, month: 0, date: 10 };
  }

  // This function is to define props used within the scope of this component
  // Be sure to review  https://lit-element.polymer-project.org/guide/properties#reflected-attributes
  // to understand how to use reflected attributes with your property settings.
  static get properties() {
    return {
      // ...super.properties,

      centralDate: {
        type: Date,
        reflect: true
      },
      disabledDates: {
        type: Date,
        reflect: true
      },
      firstDayOfWeek: {
        type: String,
        reflect: true
      },
      locale: {
        type: String,
        reflect: true
      },
      maxDate: {
        type: Date,
        reflect: true
      },
      minDate: {
        type: Date,
        reflect: true
      },
      selectedDate: {
        type: Date,
        reflect: true
      }
    };
  }

  static get styles() {
    return [
      styleCss,
      styleCssFixed
    ];
  }

  // clickTest() {
  //   console.warn('clickTest');

  //   this.calendar.focusSelectedDate();
  // }

  // setDateProp(prop, date) {
  //   if (typeof date === 'string') {
  //     date = new Date(date);
  //   }

  //   this[prop] = date;
  // }

  firstUpdated() {
    // if (this.minDate) {
    //   this.setDateProp('minDate', this.minDate);
    // }

    // if (this.maxDate) {
    //   this.setDateProp('maxDate', this.maxDate);
    // }

    if (this.selectedDate) {
      // this.setDateProp('selectedDate', this.selectedDate);
      this.selectedDate = new Date(Date.parse(this.selectedDate));
    }

    console.warn('selectedDate:', this.selectedDate);
    console.warn(this.selectedDate.getFullYear());

    // if (this.centralDate) {
    //   console.warn('process central attr');
    //   this.setDateProp('centralDate', this.centralDate);
    // } else {
    //   console.warn('set central as today');
    //   this.setDateProp('centralDate', new Date());
    // }

    // this.calendar = this.shadowRoot.querySelector('lion-calendar');

    // // this.calendar.focusCentralDate();

    // const testSelectedDate = new Date(Date.parse(this.selectedDate));
    // console.warn('testSelectedDate', testSelectedDate);

    // console.warn(testSelectedDate.getFullYear());
  }

  updated(changedProperties) {
    // if (this.ready) {
    //   if (changedProperties.has('centralDate')) {
    //     this.setDateProp('centralDate', centralDate);
    //   }

    //   if (changedProperties.has('disabledDates')) {
    //     this.setDateProp('disabledDates', disabledDates);
    //   }

    //   if (changedProperties.has('maxDate')) {
    //     this.setDateProp('maxDate', maxDate);
    //   }

    //   if (changedProperties.has('minDate')) {
    //     this.setDateProp('minDate', minDate);
    //   }

    //   if (changedProperties.has('selectedDate')) {
    //     this.calendar.focusSelectedDate();
    //   }
    // }
  }

  // When using auroElement, use the following attribute and function when hiding content from screen readers.
  // aria-hidden="${this.hideAudible(this.hiddenAudible)}"

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <div>
        Selected: ${new Date(Date.parse(this.selectedDate))}
        <br />
        Central: ${JSON.stringify(this.centralDate)}

        <lion-calendar
          .centralDate=${new Date(1990, 3, 6)}
          .disableDates=${day => day.getDay() === 6 || day.getDay() === 0}
          .firstDayOfWeek=${0}
          .locale=${null}
          .minDate=${new Date(1985, 2, 8)}
          .maxDate=${new Date(1992, 7, 9)}
          .selectedDate=${new Date(1990, 3, 10)}>
        </lion-calendar>
      </div>
    `;
  }
}

// define the name of the custom component
if (!customElements.get("auro-calendar")) {
  customElements.define("auro-calendar", AuroCalendar);
}

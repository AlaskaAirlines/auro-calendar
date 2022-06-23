import {LitElement, html} from 'lit';
import '@lion/calendar/define';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * @fires auroCalendar-ready - Notifies that the component has finished initializing.
 */

class AuroCalendar extends LitElement {
  constructor() {
    super();

    this.centralDate = new Date(); /* default to today */
    this.disableDates = undefined;
    this.firstDayOfWeek = 0;
    this.locale = undefined;
    this.maxDate = undefined;
    this.minDate = undefined;
    this.selectedDate = undefined;
    this.weekdayHeaderNotation = 'narrow'; /* long|short|narrow */
  }

  static get properties() {
    return {
      // ...super.properties,

      centralDate: {
        type: Date,
        reflect: true
      },
      disableDates: {
        type: String,
        reflect: true
      },
      firstDayOfWeek: {
        type: Number,
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
      },
      weekdayHeaderNotation: {
        type: String,
        reflect: true
      },
    };
  }

  /**
   * @private
   * @returns {void} Marks the component as ready and sends event.
   */
   notifyReady() {
    this.ready = true;

    this.dispatchEvent(new CustomEvent('auroCalendar-ready', {
      bubbles: true,
      cancelable: false,
      composed: true,
    }));
  }

  firstUpdated() {
    this.notifyReady();
  }

  render() {
    return html`
      <div>
        ${this.weekdayHeaderNotation}
          <!--
          TODO: Make this property work
          .disableDates=${this.disableDates}
          -->
        <lion-calendar
          .centralDate=${new Date(this.centralDate)}
          .firstDayOfWeek=${this.firstDayOfWeek}
          .locale=${new Date(this.locale)}
          .minDate=${new Date(this.minDate)}
          .maxDate=${new Date(this.maxDate)}
          .selectedDate=${new Date(this.selectedDate)}
          .weekdayHeaderNotation=${this.weekdayHeaderNotation}>
        </lion-calendar>
      </div>
    `;
  }
}

// define the name of the custom component
if (!customElements.get("auro-calendar")) {
  customElements.define("auro-calendar", AuroCalendar);
}

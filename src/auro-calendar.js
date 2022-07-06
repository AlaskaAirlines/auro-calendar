import { LionCalendar } from '@lion/calendar';
import styleCss from "./style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * @prop {Object} centralDate - The date that determines the currently visible month.
 * @prop {Object} firstDayOfWeek - Weekday that will be displayed in first column of month grid.
 * 0: sunday, 1: monday, 2: tuesday, 3: wednesday , 4: thursday, 5: friday, 6: saturday
 * Default is 0.
 * @prop {Date | null} focusedDate - The currently focused date (if any).
 * @prop {Date} maxDate - Maximum date. All dates after will be disabled.
 * @prop {Date} minDate - Minimum date. All dates before will be disabled.
 * @prop {Date | undefined} selectedDate - The selected date, usually synchronized with datepicker-input.
 * Not to be confused with the focused date (therefore not necessarily in active month view).
 * @prop {string} weekdayHeaderNotation - Weekday header notation, based on Intl DatetimeFormat:
 * - 'short' (e.g., Thu)
 * - 'narrow' (e.g., T).
 * Default is 'short'.
 * @fires auroCalendar-dateSelected - Notifies that a date has been selected in the calendar.
 * @fires auroCalendar-ready - Notifies that the component has finished initializing.
 */

/* eslint-disable no-self-assign */

// class AuroCalendar extends LitElement {
class AuroCalendar extends LionCalendar {
  constructor() {
    super();

    /**
     * @private
     */
    this.dayPreprocessor = this.dayPreprocessor;

    /**
     * @private
     */
    this.disableDates = this.disableDates;

    /**
     * @private
     */
    this.firstDayOfWeek = this.firstDayOfWeek;

    /**
     * @private
     */
    this.locale = this.locale;
  }

  static get styles() {
    return [
      ...super.styles,
      styleCss
    ];
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

  /**
   * @private
   * @returns {void} Generates the Month Year string used in the header.
   */
  reflectMonthYear() {
    const yearStr = this.centralDate.getFullYear().toString();
    const monthStr = this.shadowRoot.querySelector('.calendar__navigation-heading#month').innerText;

    this.monthYearLabel.innerText = monthStr.concat(' ', yearStr);
  }

  firstUpdated() {
    this.addEventListener('user-selected-date-changed', () => {
      this.dispatchEvent(new CustomEvent('auroCalendar-dateSelected', {
        bubbles: true,
        cancelable: false,
        composed: true,
      }));
    });

    this.monthYearLabel = document.createElement('div');
    this.monthYearLabel.id = "monthYearLabel";

    this.shadowRoot.appendChild(this.monthYearLabel);
    this.reflectMonthYear();

    this.notifyReady();
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('__focusedDate') && this.__focusedDate) { // eslint-disable-line no-underscore-dangle
      this.focusCentralDate();
    }

    this.reflectMonthYear();
  }
}

// define the name of the custom component
if (!customElements.get("auro-calendar")) {
  customElements.define("auro-calendar", AuroCalendar);
}

import { LionCalendar } from '@lion/calendar';
import styleCss from "./style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * @fires auroCalendar-ready - Notifies that the component has finished initializing.
 */

// class AuroCalendar extends LitElement {
class AuroCalendar extends LionCalendar {
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
   * @returns {void} Generates the Month Year string used in the header
   */
  reflectMonthYear() {
    const yearStr = this.centralDate.getFullYear().toString();
    let monthStr = this.shadowRoot.querySelector('.calendar__navigation-heading#month').innerText;

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

    this.notifyReady();
  }

  updated() {
    this.reflectMonthYear()
  }
}

// define the name of the custom component
if (!customElements.get("auro-calendar")) {
  customElements.define("auro-calendar", AuroCalendar);
}

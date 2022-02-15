# Calendar element scope and architecture

The purpose and scope of this document is to provide clear and direct language as to assist in the process of defining a clear and declarative calendar custom element..

_The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC 2119](https://datatracker.ietf.org/doc/html/rfc2119)._

1. MUST support date range, e.g. a user will select a range of dates between start and end date.
1. A DAY component MUST support the display of a numeric date and additional sub-content
1. MUST support i18n date support, e.g. "MM/DD/YYYY" vs "DD.MM.YYYY"
1. MUST show/hide dates adjacent to current month
1. MUST support setting a min and max range of dates for date picker
1. MUST support error handling, e.g. user tries to select a date outside of min/max rage.
1. MUST support disabling of dates
  - disable weekends
  - disable dates prior to today's date
  - disable future dates past max range
  - disable arbitrary dates, e.g. dates unavailable for use with rental calendar
1. MUST support highlighting of specific date or date range
1. MUST support highlighting today's date
1. MUST support truncation of day and month names
1. MUST support custom events for all data changes
1. SHOULD support a simplified HTML API whenever possible†
1. It SHOULD support display of local date/time versus a specified alternate timezone
1. It is RECOMMENDED to support the showing of week numbers

<hr>

† It is of the opinion that we need to ensure, within reason, that all features of the custom element can be expressed just the same in HTML as in JS props/functions. E.g. `<x-cal disable-past-dates>` is preferred over a user defined function of `calendarRef.disablePastDates = true`.

A RECOMMENDED resource for API definitions is the [Auro guide to API development](https://auro.alaskaair.com/generator/define-api).

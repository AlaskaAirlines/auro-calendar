setTimeout(setMaxDate, 200);

function setMaxDate() {
  const auroCalendarMaxDateElem = document.querySelector('#auroCalendarMaxDate');

  const today = new Date();
  const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2);

  auroCalendarMaxDateElem.maxDate = maxDate;
}

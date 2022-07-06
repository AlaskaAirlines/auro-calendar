setTimeout(setMinDate, 200);

function setMinDate() {
  const auroCalendarMinDateElem = document.querySelector('#auroCalendarMinDate');

  auroCalendarMinDateElem.minDate = new Date();
}

setTimeout(setSelectedDate, 200);

function setSelectedDate() {
  const auroCalendarSelectedDateElem = document.querySelector('#auroCalendarSelectedDate');

  auroCalendarSelectedDateElem.selectedDate = new Date();
}

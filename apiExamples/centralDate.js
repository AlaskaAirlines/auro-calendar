setTimeout(setCentralDate, 200);

function setCentralDate() {
  const auroCalendarCentralDateElem = document.querySelector('#auroCalendarCentralDate');

  auroCalendarCentralDateElem.centralDate = new Date(2000, 6, 6);
}

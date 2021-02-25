const searchForm = document.querySelector('.search-form');
const buttonBig = document.querySelector('.button-big');
const dateIn = searchForm.querySelector('[name = date-in]');
const dateOut = searchForm.querySelector('[name = date-out]');
const adults = searchForm.querySelector('[name = adults]');
const kids = searchForm.querySelector('[name = kids]');
const form = searchForm.querySelector('form');
const storage = localStorage.getItem("dateIn");
buttonBig.onclick = function () {
  searchForm.classList.toggle('modal-close');
  dateIn.focus();
}
form.addEventListener("submit", function (evt) {
  if (!dateIn.value || !dateOut.value) {
    evt.preventDefault();
    console.log("нужно дату заезда и дату выезда");
  }
  else {
    localStorage.setItem("dateIn", dateIn.value);
  }
})
form.addEventListener("submit", function (evt) {
  if (!adults.value || !kids.value) {
    evt.preventDefault();
    console.log("нужно выбрать количество взрослых и детей")
  }
})



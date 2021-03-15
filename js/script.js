const buttonBig = document.querySelector(".button-big");
const searchForm = document.querySelector(".search-form");
const dateIn = searchForm.querySelector("[name = date-in]");
const dateOut = searchForm.querySelector("[name = date-out]");
const Adults = searchForm.querySelector("[name = adults]");
const Kids = searchForm.querySelector("[name = kids]");

searchForm.addEventListener("submit", function(evt) {
  if (!dateIn.value || !dateOut.value || !Adults.value || !Kids.value) {
    evt.preventDefault();
    searchForm.classList.remove("modal-error");
    searchForm.offsetWidth = searchForm.offsetWidth;
    searchForm.classList.add("modal-error");
  }
});

searchForm.classList.add("modal-close");

buttonBig.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchForm.classList.toggle("modal-show");
  searchForm.classList.remove("modal-error");
});

buttonBig.onclick = function () {
  searchForm.classList.toggle("modal-close");
  searchForm.classList.toggle("modal-show");
  dateIn.focus();
}

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (!searchForm.classList.contains("modal-close")) {
      event.preventDefault();
      searchForm.classList.add("modal-close");
      searchForm.classList.remove("modal-error");
    }
  }
});



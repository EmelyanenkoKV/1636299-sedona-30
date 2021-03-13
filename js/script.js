const buttonBig = document.querySelector(".button-big");
const searchForm = document.querySelector(".search-form");
const dateIn = searchForm.querySelector("[name = date-in]");

searchForm.classList.add("modal-close");

buttonBig.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchForm.classList.toggle("modal-show");
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
    }
  }
});



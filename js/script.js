const buttonBig = document.querySelector(".button-big");
const searchForm = document.querySelector(".search-form")

buttonBig.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchForm.classList.toggle("modal-show");
});

buttonBig.onclick = function () {
  searchForm.classList.toggle("modal-close");
  searchForm.classList.toggle("modal-show");
}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (searchForm.classList.contains("modal-close")) {
      evt.preventDefault();
      searchForm.classList.remove("modal-close");
    }
  }
  });

/*
searchForm.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (searchForm.classList.contains("modal-show")) {
      evt.preventDefault();
      searchForm.classList.remove("modal-show");
    }
  }
);*/

/*

const searchForm = document.querySelector(".search-form");
const buttonBig = document.querySelector(".button-big");
const dateIn = searchForm.querySelector("[name = date-in]");
const dateOut = searchForm.querySelector("[name = date-out]");
const adults = searchForm.querySelector("[name = adults]");
const kids = searchForm.querySelector("[name = kids]");
const form = searchForm.querySelector("form");
let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("dateIn");
} catch (err) {
  isStorageSupport = false;
}
buttonBig.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchForm.classList.toggle("modal-show");
  dateIn.focus();
  if (storage) {
    dateIn.value = storage;
    dateOut.focus();
  } else {
    dateIn.focus();
  }
});

buttonBig.onclick = function () {
  searchForm.classList.toggle("modal-close");
  searchForm.classList.remove("modal-error");
  searchForm.classList.toggle("modal-show");
}
try {
  storageAdult = localStorage.getItem("adult");
} catch (err) {
  isStorageSupport = false;
}

try {
  storageKids = localStorage.getItem("kids");
} catch (err) {
  isStorageSupport = false;
}

form.addEventListener("submit", function (evt) {
  if (!dateIn.value || !dateOut.value || !adults.value || !kids.value) {
    evt.preventDefault();
    searchForm.classList.remove("modal-error");
    searchForm.offsetWidth = searchForm.offsetWidth;
    searchForm.classList.add("modal-error");

    /!*console.log("Введите данные");*!/ /!*Эту строку нужно оставлять?*!/

  } else {
    if (isStorageSupport) {
      localStorage.setItem("dataIn", dateIn.value);
      localStorage.setItem("dataIn", dateOut);
      localStorage.setItem("dataIn", adults.value);
      localStorage.setItem("dataIn", kids.value);
    }

};

/!* Окно не закрывается с клавиши ESC *!/

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (searchForm.classList.contains("modal-show")) {
      evt.preventDefault();
      searchForm.classList.remove("modal-show");
      searchForm.classList.remove("modal-error");
    }
  }
);

*/


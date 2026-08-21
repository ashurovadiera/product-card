// Изменение цвета первой карточки

const card = document.querySelector(".product-card");
const changeColorFirstCardButton = document.querySelector(
  "#change-first-card-color-button",
);
const peachColorHash = "#ff9393";
const pinkColorHash = "#eea6c2";
const googleURL = "https://google.com";

changeColorFirstCardButton.addEventListener("click", () => {
  card.style.backgroundColor = peachColorHash;
});

// Изменение цвета всех карточек

const cards = document.querySelectorAll(".product-card");
const changeColorAllCardsButton = document.querySelector(
  "#change-all-cards-color-button",
);

changeColorAllCardsButton.addEventListener("click", () => {
  cards.forEach((card) => (card.style.backgroundColor = pinkColorHash));
});

// Открыть страницу Google

const openCooglePage = document.querySelector("#open-google-page-button");
openCooglePage.addEventListener("click", openGoogle);

function openGoogle() {
  const answer = confirm("Вы действительно хотите открыть Google?");
  if (answer === true) {
    window.open("https://google.com");
  }
}

// Вывод консоль лога и alert

const outputLogButton = document.querySelector("#output-console-log");
outputLogButton.addEventListener("click", () => outputConsoleLog("ДЗ №6"));
function outputConsoleLog(message) {
  alert("ДЗ №6");
  console.log(message);
}

// При помощи слушателя событий вывести главный заголовок в консоль

const pageTitle = document.querySelector(".title");
pageTitle.addEventListener("mouseover", (event) => {
  console.log(event.target.textContent);
});

// Кнопка переключатель

const toggleButton = document.querySelector(".button-toggle");
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active-color");
});

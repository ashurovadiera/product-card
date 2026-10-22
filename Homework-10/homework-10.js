import { productCards } from "./products.js";

function askCardCount() {
  let input = prompt("Сколько карточек отобразить от 1 до 5?");
  let count = Number(input);
  if(input === null || isNaN(count) || count < 1 || count > 5) {
    alert("Ошибка.Введите число от 1 до 5.");
    return askCardCount();
  }
  return count;
};



  function renderCards (cardsArray) {
  const count = askCardCount();
  const container = document.querySelector(".container__cards");
  const template = document.querySelector(".product-template");
  if(!container || !template){
    console.log("Не найдено!")
    return;
  };

container.innerHTML = "";
const cardsToRender = cardsArray.slice(0, count);
cardsToRender.forEach(product => {
  const cardNode = template.content.cloneNode(true);
  cardNode.querySelector(".product-card__image") .src = product.image;
  cardNode.querySelector(".product-card__image") .alt = product.name;
  cardNode.querySelector(".product-card__type") .textContent = product.skinType;
  cardNode.querySelector(".product-card__name") .textContent = product.name;
  cardNode.querySelector(".product-card__information") .textContent = product.information;

  const priceSpan = cardNode.querySelector(".product-card__price span");
  if(priceSpan) {
    priceSpan.textContent = product.price;
  };

  const compositionList = cardNode.querySelector(".product-card__composition");
  if(compositionList && Array.isArray(product.composition)) {
    compositionList.innerHTML = "";
    product.composition.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      compositionList.appendChild(li);
    });
  }
  container.appendChild(cardNode);
  });
  };

window.addEventListener("DOMContentLoaded", () => {
  renderCards(productCards);
});


const productsReduce = productCards.reduce((acc, product) => {
  acc.push({[product.name]: product.information});
  return acc;
}, []);

console.log(productsReduce);
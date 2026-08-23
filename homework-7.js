// Создать функцию, которая принимает 2 параметра: город и температуру и выводит сообщение в консоль.

function showTemperature(city, temperature) {
  console.log(
    `Сейчас в ${city} температура — ${temperature} градусов по Цельсию`
  );
}

showTemperature('Бруклин', 27);



// Создать переменную, которая хранит внутри себя скорость света.

const speedOfLight = 299792458;

function checkSpeed(speed) {
  if (speed > speedOfLight){
    console.log("Сверхсветовая скорость");
  } else if (speed < speedOfLight){
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света")
  }
}
// Проверяем
checkSpeed(299800000)
checkSpeed(150000000)
checkSpeed(299792458)



// Создать переменную №1, которая содержит продукт и переменную №2, которая содержит его цену.Покупка товара.

const product = "Ноутбук"
const price = 1000

function buyProduct(budget){
  if (budget > price){
    console.log(`${product} приобретён. Спасибо за покупку!`);
  } else{
    const difference = price - budget;
    console.log(`Вам не хватает ${difference}$, пополните баланс`);
  }
  }
//Проверяем
buyProduct(1100)
buyProduct(900)

// Создать 1 функцию и именовать её по своему усмотрению.

function greet(name){
  console.log(`Здравствуйте, ${name}!`);
}
greet("Диора");

// Создать 3 переменных (без разницы каких) и именовать их по своему усмотрению.
const phone = "Телефон"
const brand = "Samsung"
const sale = 1000
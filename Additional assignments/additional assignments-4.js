//Часть 1. Функции - база


//1. Создайте функцию sayHello, которая выводит в консоль строку «Hello!». Затем вызовите её.
function sayHello () {
  console.log("Hello");
};
sayHello();



//2. Создайте функцию greet, которая принимает имя и выводит строку вида «Привет, Amina!».Вызовите функцию минимум с тремя разными именами.
function greet(name) {
  console.log(`Привет, ${name}`);
};
greet("Amina");



//3. Создайте функцию sum, которая принимает два числа и возвращает их сумму через return.
function sum(a, b) {
  return a + b;
};
console.log(sum(5,3));



//4. Создайте функцию multiply, которая принимает два числа и возвращает их произведение.
function multiply(a, b) {
  return (a * b);
};
console.log(multiply(4, 4));



//5. Создайте функцию formatPrice, которая принимает цену и возвращает строку вида «300000 ₸».
function formatPrice(price) {
  return price + "₸"
};
console.log(formatPrice(300000));


//6. Создайте функцию checkAge, которая принимает возраст и возвращает «Доступ разрешён», если возраст 18 или больше, иначе «Доступ запрещён».
function checkAge (a) {
  if (a >= 18) {
    return ("Доступ разрешён")
  } else {
    return ("Доступ запрещён")
  }
};
console.log(checkAge(18));

//7. Создайте функцию greet с параметром по умолчанию name = 'Гость'. Проверьте вызов функции с аргументом 
// и без аргумента.
function greet2(name = "Гость") {
  console.log(`Hello ${name}`)
  };
greet2("Anna");
greet2();


//8. Объясните своими словами разницу между параметром и аргументом. Приведите собственный пример функции.
//Параметр - это переменная внутри функции которая указана в описании функции. Аргумент - это присваивание значения при вызове функции.
function showMessage (name2) {
  console.log(`Добро пожаловать ${name2}!`)
};
showMessage ("Мария");


//Часть 2. Виды функций
//9. Перепишите Function Declaration в Function Expression.
//function showMessage() {
//console.log('Hello');
//};

const showMessage2 = function() {
  console.log('Hello');
};
showMessage2();


//10. Перепишите эту же функцию в Arrow Function.
const showMessage3 = ()=> {
  console.log('Hello');
};
showMessage3();



//11. Перепишите функцию ниже в короткую стрелочную функцию с неявным return.
//function double(number) {
//return number * 2;
//}
const double = n => n*2;
console.log(double(3));


//12. Не запускайте код сразу. Что произойдёт и почему? В консоле выведит Hello так,
// как тут применили вид функции который называется Function Declaration.
//sayHello();
//function sayHello() {
//console.log('Hello');
//}


//13. Не запускайте код сразу. Что произойдёт и почему? В консоле выведит критическую ошибку,так
// как тут применили вид функции который называется Function Expression.
//sayHello();
//const sayHello = function () {
//  console.log('Hello');
//};


//14. Напишите три одинаковые по логике функции sum(a, b): Function Declaration, Function Expression и Arrow Function.
//Function Declaration
sum(10, 5);
function sum(a, b) {
  console.log (a + b);
};

//Function Expression
const sum2 = function(a, b) {
  console.log(a + b)
};
sum2(10, 5);

//Arrow Function
const sum3 =(a, b) => {
  console.log(a + b);
};
sum3(10, 5);


//Часть 3. return и область видимости функции
//15. Что выведется? Почему?
//Выведит 5, а затем undefined так, как в функции не прописан return.
//function sum(a, b) {
//  console.log(a + b);
//}
//const result = sum(2, 3);
//console.log(result);


//16. Исправьте функцию так, чтобы result получил число 5.
function sum4(a, b) {
  return(a + b);
}
const result = sum4(2, 3);
console.log(result);


//17. Что выведется и почему?
//Выведится Inside то что внутри блока функции, а затем выведится Outside то что вне блока функции то есть то что в глобальной видимости.
const message = 'Outside';
function showMessage() {
  const message = 'Inside';
  console.log(message);
}
showMessage();
console.log(message);


//18. Найдите проблему.
//Чтобы comsole.log сработал необходимо его прописать внутри блока функции.
//function createUser() {
//  const user = {
//    name: 'Amina',
//    age: 20
//  };
//}
//console.log(user);


//19. Измените функцию createUser так, чтобы созданный объект можно было сохранить в переменную снаружи функции.
function createUser() {
  const user = {
    name: 'Amina',
    age: 20
  };
  return (user)
};
const createUser2 = createUser();
console.log(createUser2);


//Часть 4. Callback-функции
//20. Объясните, почему здесь передаётся showNumber без круглых скобок.
//Потому что мы не хотим запускать эту функцию прямо сейчас, мы просто дали как бы инструкцию для forEach.
//const numbers = [1, 2, 3];
//function showNumber(number) {
//  console.log(number);
//}
//numbers.forEach(showNumber);


//21. Что не так в этом коде?
//showNumber передали с круглыми скобками, то есть дали задачу запустить функцию прямо сейчас и на этой строке, фунция сработает один раз и выведит undefined,
//а метод forEach получить undefined и выведит ошибку в консоле.
//const numbers = [1, 2, 3];
//function showNumber(number) {
//  console.log(number);
//}
//numbers.forEach(showNumber());


//22. Создайте отдельную функцию showProductName(product), которая выводит название товара. Передайте её в forEach.
const products = [
  { name: 'Phone', price: 300000 },
  { name: 'Laptop', price: 500000 },
  { name: 'Mouse', price: 15000 }
];

function showProductName(product) {
  console.log(product.name);
}
products.forEach(showProductName);


//23. Создайте функцию getProductName(product), которая возвращает product.name.
//Передайте её в map и получите массив названий товаров.
function getProductName(product) {
  return (product.name)
};
const getArrayProductName = products.map(getProductName)
console.log(getArrayProductName);


//24. Создайте функцию isExpensive(product), которая возвращает true, если
//цена больше 100000. Передайте её в filter.
function isExpensive(product) {
  return(product.price > 100000)
};
const filterProductPrice = products.filter(isExpensive);
console.log(filterProductPrice);


//Часть 5. map, filter и функции
//25. С помощью map получите массив цен, увеличенных на 10%.
const prices = [1000, 2000, 5000];
const anArrayOfIncreasedPrices = prices.map((price) => {
  return (price*1.1);
});
console.log(anArrayOfIncreasedPrices);


//26. С помощью filter оставьте только совершеннолетних пользователей.
const users = [
  { name: 'Amina', age: 17 },
  { name: 'Dana', age: 25 },
  { name: 'Ali', age: 16 },
  { name: 'Aruzhan', age: 20 }
];
const adultUsers = users.filter((user) => {
  return(user.age >= 18)
});
console.log(adultUsers);


//27. Сначала filter: оставьте доступные товары.
//Затем map: получите только их названия.
const products2 = [
  { name: 'Phone', price: 300000, isAvailable: true },
  { name: 'Laptop', price: 500000, isAvailable: false },
  { name: 'Mouse', price: 15000, isAvailable: true }
];
const namesOfAvailableProducts = products2
.filter((product) => product.isAvailable)
.map((product) => product.name);
console.log(namesOfAvailableProducts);

//28. Найдите логическую ошибку. Задача - получить только товары дороже 100000.
//Надо вместо map написать filter.
//const result = products.map((product) => {
//  return product.price > 100000;
//});


//29. Найдите ошибку. Задача - получить удвоенные числа.
//Не прописан return в блоке функции.
const numbers = [1, 2, 3];
const result2 = numbers.map((number) => {
  number * 2;
});


//30. Объясните разницу между результатами map и filter на одном и том же массиве.
//Метод filter перебирает массив и создает новый массиы в который забирает
//значения подходящие по условию.Например:
const products3 = [
  { name: 'Phone', price: 300000, isAvailable: true },
  { name: 'Laptop', price: 500000, isAvailable: false },
  { name: 'Mouse', price: 15000, isAvailable: true }
];
const filterResult = products3.filter((product) => {
  return (product.isAvailable)
})
console.log(filterResult);

//Метод map изменяет каждый элемент массива и создает из них новый массив такой же длины.Например:
const mapResult = products3.map((product) => {
  return (product.isAvailable)
});
console.log(mapResult);


//Часть 6. addEventListener - база.


//31. Найдите кнопку .show-button через querySelector и добавьте обработчик click, который
// выводит «Кнопка нажата».
const showButton = document.querySelector(".show-button");
showButton.addEventListener("click", () => {
  console.log("Кнопка нажата")
});


//32. Вынесите обработчик клика в отдельную функцию showMessage и передайте
//функцию в addEventListener.
function showMessage() { 
  console.log("Кнопка нажата");
  };
  if(showButton) {
    showButton.addEventListener("click", showMessage);
  };


//33. Объясните разницу между этими двумя вариантами и укажите, какой правильный.
//Вот этот вариант верный:button.addEventListener('click', showMessage);Так круглые скобки после showMessage() дает
// команду применить эту функцию прямо сейчас и на этой строке, и в итоге выведит undefined.
//button.addEventListener('click', showMessage);
//button.addEventListener('click', showMessage());


//34. При клике на .color-button переключайте класс active через classList.toggle.
const toggleButton = document.querySelector(".color-button");
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("active");
});
};


//35. При наведении мыши на .title выводите в консоль именно textContent заголовка, а не текст,
//написанный вручную.
const mouseoverTitle = document.querySelector(".title");
if (mouseoverTitle) {
  mouseoverTitle.addEventListener("mouseover", (event) => {
    console.log(event.target.textContent);
});
};


//36. Добавьте событие mouseleave для заголовка и выводите «Курсор ушёл».
const mouseleaveTitle = document.querySelector(".title");
if(mouseleaveTitle) {
  mouseleaveTitle.addEventListener("mouseleave", () => {
    console.log("Курсор ушёл");
  });
};


//37. На поле .name-input повесьте событие input и выводите в консоль текущее значение поля.
const nameInput = document.querySelector(".name-input")
if(nameInput) {
  nameInput.addEventListener("input", () => {
    console.log(nameInput.value);
  });
};


//38. Попробуйте использовать event.target.value вместо заранее сохранённой переменной input.
if(nameInput) {
  nameInput.addEventListener("input", (event) => {
    console.log(event.target.value);
  });
};


//Часть 7. event и preventDefault


//39. Что такое event в этом коде? Что, по вашему мнению, в нём хранится?
//Это объект события, который браузер автоматически создает в момент действия пользователя,
//в нем хранится как, где и когда произошло это событие.
//button.addEventListener('click', (event) => {
//console.log(event);
//});


//40. Выведите event.target при клике на кнопку. Посмотрите в консоли, какой HTML-элемент вы получили.
//Выведится HTML элемент: <button class="button">Кликни на кнопку</button>
const button = document.querySelector(".button");
button.addEventListener('click', (event) => {
console.log(event.target);
});


//41. Добавьте обработчик клика на ссылку .google-link. Используйте event.preventDefault(), чтобы
//переход на Google не произошёл, и выведите «Переход отменён».
const clickEventGoogleLink = document.querySelector(".google-link");
if(clickEventGoogleLink) {
  clickEventGoogleLink.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Переход отменён");
});
};


//42. Добавьте обработчик submit для .form. Отмените стандартную отправку формы через event.preventDefault().
const submitForForm = document.querySelector(".form");
if(submitForForm) {
  submitForForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });
};


//43. После preventDefault выведите значение .email-input в консоль.
const submitForForm2 = document.querySelector(".form");
const emailInput = document.querySelector(".email-input");
if(submitForForm2) {
  submitForForm2.addEventListener("submit", (event) => {
    event.preventDefault();
if(emailInput) {
  console.log(emailInput.value);
};
});
};


//44. Ответьте своими словами: что именно отменяет preventDefault? Отменяет ли он выполнение вашего JS-кода?

//preventDefault отменяет перезагрузку страницы при нажатии кнопки, и он не отменяет наш код.


//Часть 8. Функции + события.
//45. Создайте отдельную функцию showInputValue, которая выводит значение .name-input.
// Вызывайте её при клике на .show-button.
const nameInput2 = document.querySelector(".name-input");
const showButton2 = document.querySelector(".show-button");

function showInputValue () {
  if(nameInput2) {
    console.log(nameInput2.value);
};
};
if(showButton2) {
  showButton2.addEventListener("click", showInputValue);
};


//46. Измените showInputValue так, чтобы она возвращала значение input через return. В
// обработчике клика сохраните результат в переменную и выведите её.
function showInputValue2 (){
  const nameInput3 = document.querySelector(".name-input");
  if(nameInput3) {
    return nameInput3.value;
  }
  return "";
};
const showButton3 = document.querySelector(".show-button");
if(showButton3) {
  showButton3.addEventListener("click", () => {
    const result = showInputValue2();
    console.log(result);
  });
};


//47. Создайте функцию isInputEmpty(value), которая возвращает true, если строка пустая. При
// клике на кнопку проверяйте поле и выводите «Введите имя» или введённое имя.
function isInputEmpty(value) {
  if(!value){
    return(true);
  };
  return(false);
};


function showInputValue3() {
  const nameInput4 = document.querySelector(".name-input");
  if(nameInput4) {
    return nameInput4.value;
  };
};

const showButton4 = document.querySelector(".show-button");
if(showButton4) {
  showButton4.addEventListener("click", () => {
    const text = showInputValue3();
    if(isInputEmpty(text)) {
      console.log("Введите имя");
    } else {
      console.log(text);
    };
  });
};

//48. Создайте функцию toggleButton(button), которая принимает HTML-элемент и переключает у
// него класс active. Используйте её внутри click-обработчика.
function toggleButton2(button) {
  if(button) {
    button.classList.toggle("active");
  };
};

const showButton5 = document.querySelector(".show-button");
if(showButton5) {
  showButton5.addEventListener("click", () => {
    toggleButton(showButton5);
  });
};


//49. Есть несколько карточек. Для каждой через forEach добавьте обработчик click. При клике
// добавляйте класс selected только той карточке, на которую нажали.
//<div class="card">Phone</div>
//<div class="card">Laptop</div>
//<div class="card">Tablet</div>
const productCards = document.querySelectorAll(".card");
productCards.forEach((card)=> {
  card.addEventListener("click", () => {
    card.classList.add("selected");
    });
})


//50. Решите предыдущую задачу, используя event.target вместо
// переменной card внутри callback.
const productCards2 = document.querySelectorAll(".card");
productCards2.forEach((card)=> {
  card.addEventListener("click", (event) => {
    event.target.classList.add("selected");
    });
});


//Часть 9. Задачи чуть сложнее


//51. Создайте массив товаров. С помощью filter получите доступные товары, 
// map - их названия, а затем forEach - выведите каждое название.
const products4 = [
{ name: 'Phone', price: 300000, isAvailable: true },
{ name: 'Laptop', price: 500000, isAvailable: false },
{ name: 'Mouse', price: 15000, isAvailable: true },
{ name: 'Tablet', price: 200000, isAvailable: true }
];

const getAvailableProducts = products4
.filter((product)=> {return product.isAvailable;})
.map((product)=> {return product.name})
.forEach((name)=> {console.log(name)});

//52. Создайте функцию getAvailableProductNames(products), которая принимает 
// массив товаров и возвращает массив названий только доступных товаров. 
// Используйте filter + map.
function getAvailableProductNames(products4) {
  return products4
  .filter((product)=>{return product.isAvailable})
  .map((product)=> {return product.name});
};


//53. Создайте функцию getExpensiveProducts(products, minPrice), которая возвращает 
// товары дороже minPrice.
function getExpensiveProducts(products4, minPrice) {
  return products4.filter(product => product.price > minPrice)
};

const minPrice = 20000;
console.log(getExpensiveProducts(products4, minPrice));


//54. Создайте кнопку «Показать дорогие товары». По клику вызывайте getExpensiveProducts 
// и выводите результат в консоль.
const buttonToShowExpensiveProducts = document.querySelector(".show-other-products-button");
buttonToShowExpensiveProducts.addEventListener("click", () => {
  const getResult = getExpensiveProducts(products4, minPrice);
  console.log(getResult);
});


//55. Создайте input для минимальной цены и кнопку. Пользователь вводит цену, нажимает 
// кнопку, после чего в консоли отображаются товары дороже введённой цены. Не забудьте,
// что input.value возвращает строку.
const numberInput = document.querySelector(".number-input");
const buttonToShowProductPrice = document.querySelector(".show-other-products-button");
buttonToShowProductPrice.addEventListener("click", () => {
  const minPrice = +numberInput.value;
  console.log(getExpensiveProducts(products4, minPrice));
});

function getExpensiveProducts (products, minPrice) {
  return products.filter(product => product.price > minPrice);
};


//56. Усложнение: если поле цены пустое, не выполняйте filter, а выведите сообщение 
// об ошибке.
const numberInput2 = document.querySelector(".number-input");
const buttonToShowProductPrice2 = document.querySelector(".show-other-products-button");
buttonToShowProductPrice2.addEventListener("click", () => {
  const inputValue = numberInput2.value.trim();
  if (inputValue === "") {
    console.log("Ошибка: Поле цены не может быть пустым!");
    return;
  };
  const minPrice2 = Number(inputValue);
console.log(getExpensiveProducts(products4, minPrice2));
});

function getExpensiveProducts (products, minPrice) {
  return products.filter(product => product.price > minPrice);
};


//Часть 10. Code review


//57. Найдите ошибку.
//const button = document.querySelector('.button');
//function showMessage() {
//console.log('Hello');
//}
//button.addEventListener('click', showMessage())
//Я думаю выведит ошибку так как после showMessage не надо ставить скобки, так как JS
//выполнит эту функцию сразу же в момент чтения строки с addEventListener.


//58. Почему этот код не выводит удвоенные числа?

//Так как тут надо было прописать return перед number * 2.

//const numbers = [1, 2, 3];
//const result = numbers.map((number) => {
//  number * 2;
//});
//console.log(result);


//59. Что здесь не так, если нужно получить только совершеннолетних?

//Метод map возвращает новый массив с измененными данными но с исходным 
// количеством объектов в нем.
//Тут надо заменить метод map на filter. Так как filter создает новый массив
//в который помещает объекты подходящие по требованию.

//const adults = users.map((user) => {
//  return user.age >= 18;
//});


//60. Что произойдёт? Почему?
//Будет поломка кода, так как браузер не сможет найти переменную name из-за того что она
//была прописана внутри функции, то есть она является локальной переменной.
//Думаю выведит Amina, а затем undefined, так как вызов консоле переменной name
//был написан вне функции.

//function showName() {
//  const name = 'Amina';
//}
//showName();
//console.log(name);


//61. Найдите две проблемы.

//Думаю ошибка в переменной const message = 'Saved'и ошибка в вызове консоле;
// Переменная const message локальная переменная, то есть создана внутри
// функции и вызов этой переменной приведет к ошибке и поломке кода, еще 
// переменная const message будет создаваться при клике на кпоку а консоль срабоатывает
//сразу же при загрузке страницы.

//const button = document.querySelector('.save-button');
//button.addEventListener('click', () => {
//  const message = 'Saved';
//});
//console.log(message);


//62. Код работает, но можно ли сделать его логичнее? Перепишите с помощью map.
//const numbers = [1, 2, 3];
//const doubled = [];
//numbers.forEach((number) => {
//  doubled.push(number * 2);
//});
const numbers2 = [1, 2, 3];
const numbersDoubled = numbers2.map((number)=> {
  return number * 2;
});
console.log(numbersDoubled);


//Часть 11. Итоговая мини-задача


//Создайте небольшую страницу со списком товаров и фильтром по цене.
//Требования:

//1. Есть массив объектов products с name, price и isAvailable.
const productsList = [
  {name: "Fridge", price: 650000, isAvailable: true},
  {name: "Stove", price: 400000, isAvailable: false},
  {name: "Microwave", price: 350000, isAvailable: false},
  {name: "Coffee machine", price: 150000, isAvailable: true},
];


//2. Есть input для минимальной цены.
const priceInput = document.querySelector(".price-input");


//3. Есть кнопка «Показать товары».
const filterButton = document.querySelector(".filter-button");


//4. По клику на кнопку получить значение input.
//5. Преобразовать значение input в number.
//Дополнительно: если поле пустое, вывести «Введите минимальную цену» и не выполнять фильтрацию.
filterButton.addEventListener("click", ()=> {
  const valueInput = priceInput.value
  if(!valueInput) {
    console.log("Введите минимальную цену")
  } else {
      const priceNumber = Number(valueInput);
      const finalResult = filterProducts(priceNumber);
  console.log(finalResult)
}});


//6. Через filter оставить доступные товары дороже введённой цены.
//7. Через map получить массив их названий.
//8. Вывести результат в console.log.
//9. Логику фильтрации вынести в отдельную функцию.
//10. Обработчик клика также можно вынести в отдельную функцию.
function filterProducts(price) {
  return productsList
  .filter((productList)=> { return productList.isAvailable && productList.price > price})
  .map((productList) => { return productList.name})
};


filterButton.addEventListener("click", ()=> {
  const priceInputValue = priceInput.value
  const priceNumber = Number(priceInputValue)
  const finalResult = filterProducts(priceNumber);
  console.log(finalResult)
});





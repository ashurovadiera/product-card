//Дополнительные задания часть 1:переменные, const и let, типы данных,
//сравнения, if / else, чтение и анализ кода.

const name = "Diora"; //1.
//const age = 31; //2.
const city = "New York"; // 3
const isStudent = false; //4.
const price = 5000; //5.
//6. Выведит имя Amina
//7. Выведит 15, потому что let это переменная значение которой можно изменить, переписать.
//8. Выведит 7
//9. const age = 20;
// let score = 0;
// const siteName = 'Shop';
// let count = 1;
//10. const - это переменная значение которой нельзя изменить, переписать.

//11. Название переменных должны писаться методом camelCase:
     const userName = 'Amina';

//12. Название переменных не должны начинаться с цифр, сначало текст а потом цифры:
     const name1 = 'Amina';

//13. Строчный тип данных(string), пишется в ковычках.
//14. Числовый тип данных(number), пишется без ковычек, просто цифры.
//15. Логический тип данных (boolean).
//16. Строчный тип данных,так цифры написаны в ковычка то JS будет считывать их как строчный тип а не как цифровой.
//17. Логический тип данных (boolean).
//18. Переменная ничего не хранит поэтому будет undefined.
//19. true 
//20. false
//21. true
//22. false
//23. true
//24. fasle
//25. true
//26. Выведит false, так как'20'написано с ковычках, сравнение идет между строчным типом данных и числовым,то есть типы данных не соврадают и в консоле будет выводить false.
//27. Выведит 'Можно' (true)
//28. Ничего не выведит так как нет второго условия (else).
//29. Выведит 'Вход запрещён'(false).

//30.Выведит "Жарко".
// const temperature = 30;
//if (temperature > 25) {
//  console.log("Жарко");
//} else {
//  console.log("Не жарко");
//}


//31.Выведит "Совершеннолетний".
// const age = 19;
//if (age >= 18){
//  console.log("Совершеннолетний");
//} else {
//  console.log("Не совершеннолетний");
//}

//32.Выведит "Зачёт".
// const score = 80;
//if (score >= 60) {
//  console.log("Зачёт");
//} else {
//  console.log( "Не зачёт");
//}

const password = '12345';    //33.Выведит "Добро пожаловать".

if (password === '12345') {
  console.log ("Добро пожаловать");
} else {
  console.log ("Не верный пароль");
}

//34. Выведит 'Пользователь онлайн'.
//35. Выведит 'Билета нет'.

//36.Выведит 'Нельзя войти'.
// const age = 15;
//if (age >= 18) {
//  console.log('Можно войти');
//} else {
//  console.log('Нельзя войти');
//}


//37.Выведит 'Можно'.
// const age = 18;
//if(age >= 18){
//  console.log('Можно');
//}else{
//  console.log('Нельзя');
//}

//38. const age = 18;
//if (age === 18) {            (=)- оператор присваивания значения, (===)-строгое равенство.
//  console.log('Возраст 18');
//}

//39.Выведит А(true) так, как результат 7>6.
//40.Выведит 'Успех'(true).
//41.Выведит 'Дорогой'(true).
//42.Выведит 'Возраст не подходит'(false), так как возраст написан в ковычках(строковое значение).

const number = 20;    //43.Выведит 'Положительное число'.

if (number >= 0) {
  console.log('Положительное число');
} else {
  console.log('Число не положительное');
}

const temperature = 20;    //44.Выведит 'Прохладно'.

if (temperature >= 25) {
  console.log('Жарко');
} else {
  console.log('Прохладно');
}

const score = 63;    //45.Выведит 'Экзамен сдан'.

if (score >= 60) {
  console.log('Экзамен сдан');
} else {
  console.log('Экзамен  не сдан');
}

const isLoggedIn = true;    //46.Выведит 'Добро пожаловать'.

if(isLoggedIn) {
  console.log('Добро пожаловать');
} else {
  console.log('Пожалуйста, войдите в аккаунт');
}

//47.const age = '20' -строчное значение а должно быть цифровое, не '20' а 20.
//if age >= 18 { -условие должно быть в круглых скобках if(age >= 18)
//  console.log('Можно войти')
//} else {
//  console.log('Нельзя войти')
//}

//48.let count = 2; создали переменную let и дали ей название count,
//затем присвоили ей значение = 2
//count = count + 3; Прибавили к текущему значение count число 3 и
//сохранили новый результат обратно в переменную.
//if (count >= 5) {   Проверяем условие: если count будет больше или равно 5,то условие
//будет true и JS остановится на блоке if и выполнит его, а если count будет меньше 5,
//то JS пойдет дальше и выполнит блок else так как условие будет false.
//  console.log('A');
//} else {
//  console.log('B');
//}

//49.Выведит 'Второй', так как (!==)-означает не равно, то есть в нашем примере спрашивается: 10 не равно 10?
const value = 10;

if (value !== 10) {
  console.log('Первый');
} else {
  console.log('Второй');
}

//50.Выведит 'Доступ запрещён'.
// let age = 17;
//if(age >= 18){
//  console.log('Доступ разрешён');
//} else {
//  console.log('Доступ запрещён');
//}

//Выведит 'Доступ разрешён'.
age1 = 20;
if(age1 >= 18){
  console.log('Доступ разрешён');
} else {
  console.log('Доступ запрещён');
}


//Дополнительные задания часть 2:объекты, массивы, forEach, функции,
//querySelector, getElementById, getElementsByClassName.

//Часть 1. Объекты

//1.const user = {
//name: "Diora",
//age: 32,
//city: "New York"
//};


//2.const product = {
//name: "Laptop",
//price: 450000,
//isAvailable: true
//};


const user = {    //3.
name: 'Amina',
age: 20,
city: 'Astana'
};
console.log(user.name);

console.log(user.age);    //4.


const user2 = {    //5.
  ...user,
  age: 21
};
console.log(user2.age);


const user3 = {    //6.
  ...user2,
  isStudent: true
};
console.log(user3.isStudent);


const user4 = {    //7.
  ...user3,
  country: "Kazakhstan"
};
console.log(user4.country);


const product = {    //8.
name: 'Phone',
price: 300000,
color: 'black'
};
console.log(product.name, product.price);


const product1 = {    //9.
  ...product,
  price: 250000
};
console.log(product1);

delete product1.color;    //10.
console.log(product1);




//Часть 2. Объекты + условия

const student = {    //11.
name: 'Dana',
score: 80
};
if(student.score >= 60){
  console.log("Зачёт")
} else {
  console.log("Не зачёт")
;}


const user5 = {    //12.
name: 'Aruzhan',
age: 17
};
if(user5.age >= 18) {
  console.log("Доступ разрешён")
} else {
  console.log("Доступ запрещён")
};


const book = {    //13.
  title: "Капитанская дочка",
  author:"Александр Сергеевич Пушкин",
  pages: 500
};
console.log(book.title)
console.log(book.author)
console.log(book.pages)


const car = {    //14.
brand: 'Toyota',
year: 2020
};
const car2 = {
  ...car,
  color: "White",
  year: 2022
};
console.log(car2)




//Часть 3. Массивы

const products = ["watermelon", "peach", "fig"]    //15.
console.log(products)


const numbers1 = [10, 20, 30, 40]    //16.
console.log(numbers1)


const fruits1 = ['apple', 'banana', 'orange'];
console.log(fruits1[0])    //17.
console.log(fruits1[1])    //18.
console.log(fruits1[2])    //19.


//20. Выведит 'green'
//21. Выведит 3


const animals = ['cat', 'dog', 'rabbit'];    //22.
animals[1] = 'fox';
console.log(animals)

animals.push('horse')    //23.
console.log(animals)

animals.pop()    //24.
console.log(animals)

animals.unshift('lion')    //25.
console.log(animals)

animals.shift()    //26.
console.log(animals)




//Часть 4. Массив объектов

const users = [    //27.
  {
    name: "Diana",
    age: 25
  },
  {
    name: "Anna",
    age: 30
  },
  {
    name: "Masha",
    age: 28
  },
];
console.log(users)


const users2 = [    //28.
{ name: 'Amina', age: 20 },
{ name: 'Dana', age: 25 }
];
console.log(users2[0].name)
console.log(users2[1].age)    //29.


const products2 = [    //30.
{ name: 'Phone', price: 300000 },
{ name: 'Laptop', price: 500000 },
{ name: 'Tablet', price: 200000 }
];
console.log(products2[2].name)
console.log(products2[1].price)    //31.

products2[0].price = 250000    //32.
console.log(products2)




//Часть 5. forEach

const fruits = ['apple', 'banana', 'orange'];    //33.
fruits.forEach((fruit) => {
  console.log(fruit)
});


const numbers = [1, 2, 3, 4, 5];    //34.
numbers.forEach((number) => {
  console.log(number)
});


const names = ['Amina', 'Dana', 'Aruzhan'];    //35.
names.forEach((name) => {
  console.log(`Привет, ${name}`)
});


const numbers2 = [2, 4, 6];    //36.
numbers2.forEach((num) => {
  console.log(num*2)
});


const colors = ['red', 'green', 'blue'];    //37.
colors.forEach((color, index) => {
  console.log(index, color)
});


const numbers3 = [10, 20, 30, 40];    //38.
numbers3.forEach((num, index) => {
  if(index < 2) {
  console.log(num)
}
});


const products3 = [    //39.
{ name: 'Phone', price: 300000 },
{ name: 'Laptop', price: 500000 },
{ name: 'Tablet', price: 200000 }
];
products3.forEach((product) => {
  console.log(product.name)
});


products3.forEach((product) => {    //40.
  console.log(`${product.name} - ${product.price}`)
});




//Часть 6. forEach + условия

const numbers4 = [1, 5, 10, 15, 20];    //41.
numbers4.forEach((num) => {
  if(num > 10) {
    console.log(num)
  }
});


const ages = [15, 18, 20, 16, 30];    //42.
ages.forEach((age) => {
  if(age >= 18) {
    console.log("Совершеннолетний")
  } else {
    console.log("Несовершеннолетний")
  }
  console.log(age)
});


const products4 = [    //43.
{ name: 'Phone', price: 300000 },
{ name: 'Laptop', price: 500000 },
{ name: 'Mouse', price: 15000 }
];
products4.forEach((product) => {
  if(product.price > 100000) {
    console.log(product)
  }
});


const cards = ['card1', 'card2', 'card3', 'card4'];    //44.
cards.forEach((card, index) => {
  if(index < 2) {
    console.log("Первая группа")
  } else {
    console.log("Вторая группа")
  }
});




//Часть 7. Функции

function sayHello () {    //45.
  console.log("Hello");
}
sayHello()


function showName (name) {    //46.
  console.log(name);
}
showName("Diora")


function sum (a, b) {    //47.
  console.log(a + b);
}
sum(3,3)


function multiply (a, b) {    //48.
  return a * b;
}
console.log(multiply(5, 5)); //надо перепроверить, переписать


function checkAge (a) {    //49.
  if(a >= 18) {
    return ("Можно войти")
  } else {
    return ("Нельзя войти")
  }
}
console.log(checkAge(15))


function greet(name) {    //50.
console.log(`Привет, ${name}`);
}
greet("Anna");
greet("Masha");
greet("Diana");




//Часть 8. Функция + массив

const numbers5 =[1, 2, 3];    //51.
function showNumber(num) {
  console.log(num);
}
numbers5.forEach(showNumber);


const numbers6 =[1, 2, 3];    //52.
function showNumber2(num) {
  console.log(`Число: ${num}`);
}
numbers5.forEach(showNumber2);


const names2 = ['Amina', 'Dana', 'Aruzhan'];    //53.
function greet2(name) {
  console.log(`Hello ${name}!`);
}
names2.forEach(greet2);


//54. Объясните разницу между numbers.forEach(showNumber) и numbers.forEach(showNumber()).
//numbers.forEach(showNumber) - тут мы даем ссылку на функцию и говорим не запускать её
//прямо сейчас, а пройтись по массиву и вызвать ее для каждого числа.
//numbers.forEach(showNumber()) - JS видит() и сразу же запускает функцию showNumber()
//ещё до того как forEach начнет перебирать массив. Функция showNumber() сработает только 
//один раз потому что в скобках ничего нет и она попытается вывести undefined.




//Часть 9. Поиск элементов в HTML

const findTitleById = document.getElementById("title");    //55.
console.log(findTitleById);


const findButtonById = document.getElementById("button");    //56.
console.log(findButtonById);


const findFirstTextByClassName = document.querySelector(".text");    //57.
console.log(findFirstTextByClassName);


const findFirstCard = document.querySelector(".card");    //58.
console.log(findFirstCard);


const findAllCards = document.querySelectorAll(".card");    //59.
console.log(findAllCards);


const findAllElementsByClass = document.getElementsByClassName("text");    //60.
console.log(findAllElementsByClass);


const findTitle = document.querySelector("#title");    //61.
console.log(findTitle);


const findButton = document.querySelector("#button");    //62.
console.log(findButton);




//Часть 10. Сравнение способов поиска

const findMainTitleById = document.getElementById("main-title");    //63.
console.log(findMainTitleById);

const mainTitle = document.querySelector("#main-title");
console.log(mainTitle);


//64.document.getElementById('title')-получает элемент только по Id и поэтому в собках при 
// указании его имени не надо ставить #, достаточно будет только указать имя этого Id.
//document.querySelector('#title')-это более оптимальный и универсальный вариант, так как
//подходит для class и для Id. Отличается тем что для class перед указанием его имени
//необходимо поставить точку, а для Id перед указанием его имени необходимо поставить #


//65.Вернет только самую первую карточку, так как этот селектор берет первый попавшийся элемент
//и возвращает его.


//66.document.querySelectorAll('.card')


//67. querySelector-найдет самую первую карточку и вернет ее нам, 
//а querySelectorAll-найдет все карточки и вернет нам их все.


//68.Вернет все элементы которые были сохранены под именем класса ('item') то есть div вернет их в 
//HTMLCollection




//Часть 11. DOM + forEach

const allCards = document.querySelectorAll(".card2")    //69.
allCards.forEach((card2) => {
  console.log(card2);
});


allCards.forEach((card2) => {    //70.
  console.log(card2.textContent);
});


allCards.forEach((card2) => {    //71.
  card2.classList.add("active");
});


const addingAClassToTheCards = document.querySelectorAll(".card3")    //72.
addingAClassToTheCards.forEach((card3, index) => {
if(index < 2) {
  card3.classList.add("first");
} else {
  card3.classList.add("second");
}
});
console.log(addingAClassToTheCards)


const addingAClassToTheCards2 = document.querySelectorAll(".card4")    //73.
addingAClassToTheCards2.forEach((card4, index) => {
if(index < 5) {
  card4.classList.add("old");
} else {
  card4.classList.add("new");
}
});
console.log(addingAClassToTheCards2);




//Часть 12. Код-ревью

//74.const user = {
//name: 'Amina', // не была поставлена запятая, пары ключ:значение должны разделяться запятыми
//age: 20
//};


//75.const fruits = ['apple', 'banana', 'orange'];
//console.log(fruits[3]);   выведит undefined так как значение с индексом 3 не было задано

//76.const user = {
//name: 'Amina',
//age: 20
//};
//console.log(user.city); выведит undefined так как ключ и его значение не были заданы


//77.Ошибка в том что в консоле выводится весь массив numbers-console.log(numbers), а надо выводить один 
//элемент массива то есть-console.log(number)


//78.document.querySelector - найдет и выведит только первый элемент, у одиночных элементов нет метода forEach


//79. const cards = document.querySelector('.card'); необходимо было написть document.querySelectorAll
//cards.forEach((card) => {
//console.log(card);
//});


//80.const title = document.getElementById('#title');- перед title не надо ставить #,
//так как селектор getElementById ищет только Id, достаточно лишь в скобках указать наименование Id


//81.const card = document.querySelector('card');- перед именованием класса должна ставиться точка так как это класс


//82.С помощью document.querySelectorAll находим все карточки с классом card, затем каждую карточку перебираем по
//индексу и пишем функцию в которой прописываем условие: если индекс карточки меньше или равен 2 то надо ей добавить
// класс "first" иначе(то есть карточкам чей индекс больше 2) добавить класс "second"




//Итоговое задание


//83.
const allProducts = document.querySelectorAll(".product") 
allProducts.forEach((product) => {
  console.log(product.textContent)
})

const allProducts2 = document.querySelectorAll(".product")
allProducts2.forEach((product, index) => {
  if(index < 2) {
    product.classList.add("product--first");
  } else {
    product.classList.add("product--second");
  }
  console.log(allProducts2)
})//  с помощью селектора querySelectorAll
// мы получили все элементы с наименованием product, затем с помощью метода forEach вывели текст
//каждого элемента(textContent), затем также с помощью метода forEach перебрали все элементы по
//индексу и задали условие: если индекс элемента меньше 2 то добавить ему класс product--first,
//а остальным элементам чей индекс больше 2 добавить класс product-second


//84.
const products5 = [
{ name: 'Phone', price: 300000 },
{ name: 'Laptop', price: 500000 },
{ name: 'Mouse', price: 15000 }
];
products5.forEach((product) => {
  console.log(product.name, product.price);
});

products5.forEach((product) => {
  if(product.price >= 100000) {
    console.log("Дорогой товар");
  } else {
    console.log("Бюджетный товар");
  }
});
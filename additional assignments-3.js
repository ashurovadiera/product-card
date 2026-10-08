//Часть 1. forEach - закрепление

//1.Есть массив. С помощью forEach выведите каждый элемент в консоль.
const fruits = ['apple', 'banana', 'orange'];
fruits.forEach((fruit) => {
  console.log(fruit);
});

//2.Выведите каждое число, умноженное на 2.
const numbers = [2, 4, 6, 8];
numbers.forEach((number) => {
  console.log(number*2);
});

//3.Выведите строки вида «Привет, Amina», «Привет, Dana» и т.д.
const names = ['Amina', 'Dana', 'Aruzhan'];
names.forEach((name) => {
  console.log(`Привет,${name}`);
});

//4.Используйте второй параметр forEach - index - и выведите индекс и значение каждого элемента.
const colors = ['red', 'green', 'blue'];
colors.forEach((color, index) => {
  console.log(color, index);
});

//5.Выведите только элементы с индексом меньше 3.
const numbers2 = [10, 20, 30, 40, 50];
numbers2.forEach((num, index) => {
  if(index < 3) {
    console.log(num);
  }
});

//6.Для каждого возраста выведите «Совершеннолетний» или «Несовершеннолетний».
const ages = [15, 18, 20, 16, 30];
ages.forEach((age) => {
  if(age >= 18) {
    console.log("Совершеннолетний");
  } else {
    console.log("Несовершеннолетний");
  }
  console.log(age);
});

//7. Для каждого товара выведите строку вида «Phone - 300000».
const products = [
  { name: 'Phone', price: 300000 },
  { name: 'Laptop', price: 500000 },
  { name: 'Mouse', price: 15000 }
];
products.forEach((product) => {
  console.log(`${product.name} - ${product.price}`);
});

//8.С помощью forEach выведите только названия товаров дороже 100000.
products.forEach((product) => {
  if(product.price > 100000) {
    console.log(product.name);
  }
});




//Часть 2. Цикл for

//9.С помощью for выведите числа от 0 до 4.
for(let i = 0; i < 5; i++) {
  console.log (i);
};


//10.С помощью for выведите числа от 1 до 5.
for(let i = 1; i < 6; i++ ) {
  console.log(i);
};


//11.С помощью for выведите только чётные числа от 0 до 10.
for( let i = 0; i < 11; i++) {
if(i % 2 ===0) {
  console.log(i);
}
};


//12.С помощью for выведите числа от 5 до 1 в обратном порядке.
for( let i = 5; i >= 1; i--) {
  console.log(i);
};


//13.Переберите массив с помощью for и выведите каждый фрукт.
const fruits2 = ['apple', 'banana', 'orange'];
for(let i = 0; i < fruits2.length; i++) {
  console.log(fruits2[i]);
};


//14.С помощью for выведите каждый элемент массива вместе с его индексом.
const colors2 = ['red', 'green', 'blue'];
for(let i = 0; i < colors2.length; i++) {
  console.log(i+":"+ colors2[i]);
};


//15.С помощью for найдите сумму всех чисел. Используйте отдельную переменную total.
const numbers3 = [10, 20, 30, 40];
let total = 0;
for(let i = 0; i < numbers3.length; i++){
  total += numbers3[i];
};
console.log(total);


//16. С помощью for посчитайте, сколько в массиве чисел больше 10.
const numbers4 = [3, 15, 7, 20, 25, 2];
let count = 0;
for(let i = 0; i < numbers4.length; i++) {
  if(numbers4[i] > 10) {
    count++
  }
};
console.log(count);


//17.С помощью for выведите названия только доступных товаров.
const products2 = [
  { name: 'Phone', isAvailable: true },
  { name: 'Laptop', isAvailable: false },
  { name: 'Mouse', isAvailable: true }
];
for(let i = 0; i < products2.length; i++) {
  if(products2[i].isAvailable) {
    console.log(products2[i].name);
  }
};


//18.Есть карточки на странице. Найдите их через querySelectorAll и с помощью for добавьте всем
//класс active.
const cards = document.querySelectorAll('.card');
for(let i = 0; i < cards.length; i++) {
  cards[i].classList.add("active");
}
console.log(cards);




//Часть 3. for или forEach?

//19. Для каждой задачи ниже напишите, какой вариант вы бы выбрали - for или forEach - и
//коротко объясните почему:

//а) вывести каждый элемент массива; Тут подходит метод forEach, так как он может выполнить 
// действие(например,console.log ) для всех элементов массива без перерыва.

//б) пройти только по каждому второму элементу; Тут подхоидт цикл for, так как в этом цикле можно задать
// шаг итерации через индекс (i+=2)

//в) перебрать массив в обратном порядке; Тут подходит цикл for, можно задать шаг итерации через индекс (i--).

//г) просто добавить класс каждой карточке; Тут подходит метод forEach, так как для всех карточек надо задать
// одинаковый класс, этот метод пройдет по всем элементам массива и ко всем добавит одинаковый класс.

//д) остановить перебор, когда найден нужный элемент; Тут подходит цикл for, так как с помощью этого цикла 
// можно задать шаг итерации через индекс и тем самым остановить перебор элементов когда будет найден нужный элемент.


//20. Перепишите этот код с forEach на обычный for.
//const numbers5 = [1, 2, 3];
//numbers.forEach((number) => {
//  console.log(number);
//});
const numbers5 = [1, 2, 3];
for(let i =0; i < numbers5.length; i++) {
  console.log(numbers5[i]);
}


//21. Перепишите этот код с for на forEach.
//const fruits3 = ['apple', 'banana', 'orange'];
//for (let i = 0; i < fruits.length; i++) {
//  console.log(fruits[i]);
//}
const fruits3 = ['apple', 'banana', 'orange'];
fruits3.forEach((fruit) => {
  console.log(fruit);
});




//Часть 4. while - самостоятельное знакомство

//22. Перед запуском предположите, что выведет код. Затем проверьте себя.
//Выведит:
//0
//1
//2
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}


//23. Самостоятельно напишите while, который выводит числа от 1 до 5.
let i2 = 1;
while (i2 < 6) {
  console.log(i2);
  i2++;
}


//24. Напишите while, который выводит числа от 5 до 1.
let i3 = 5;
while (i3 > 0) {
  console.log(i3);
  i3--;
}


//25. Исправьте код так, чтобы цикл не был бесконечным.
let count2 = 0;
while (count2 < 5) {
  console.log(count2);
  count2++;
}


//26. Ответьте своими словами: чем while отличается от for? В какой ситуации, по вашему мнению,
//while может быть удобнее?
//while и for эти два цикла отличаются по синтаксису и цели использования.
//for собирает все циклом (начало, условие,шаг) в скобки,и используют тогда когда известно количество
// повторений, например посчитать от 1 до 20,пройти по массиву или выполнить какое то действие ровно 5 раз.
// А while в отличии от for, скобках содержит только условие,и используется когда количество повторений заранее 
// неизвестно, и переменную нужно создавать до цикла а менять внутри, например: пока пользователь не ввел 
// правильный пароль. while-переводится "пока".




//Часть 5. Область видимости (scope)
//27. Что произойдёт? Сначала ответьте без запуска.
//if (true) {
//  const name = 'Amina';
//}
//console.log(name);
//Код сломается, так как переменная создана внутри блока условия if а консоль задан вне блока if, то есть 
// вне блочной области видимости, что бы исправить это,надо: сначало объявить переменную в глобальной области 
// видимости, или же задать консоль внутри блока if.


//28. Будет ли ошибка? Почему? Нет, тут нет ошибки, все написано правильно, переменная объявлена в глобальной 
// области видимости, и консоль задан внутрии блока if. В консоле выведится: 'Astana'.
const city = 'Astana'
if (true) {
  console.log(city);
}


//29.Что выведется и почему? Выведится: 10, так как новая переменная let score = 20  объявлена внутри блока if и 
// существует только внутри блока if и никак не влияет на переменную let score = 10.
let score = 10;
if (true) {
  let score = 20;
}
console.log(score);


//30. Что выведется и почему? Выведится 20, так как в блоке if нет слова let, JS не находит новую переменную,
// а находит внешнюю score и перезаписывает ее значение на 20.
//let score = 10;
//if (true) {
//  score = 20;
//}
//console.log(score);


//31. Что произойдёт после завершения цикла? Код сломается, так как консоль задан вне блочной области видимости.
//for (let i = 0; i < 3; i++) {
//  console.log(i);
//}
//console.log(i);


//32. Объясните разницу между двумя примерами: в одном мы создаём новую переменную внутри блока, в другом изменяем внешнюю.
//Новая переменная созданная внутри блока, будет считаться изолированной переменной с блочной областью видимости, 
// то есть будет существовать только внутри блока и никак не влияет на то что происходит снаружи.
// А если взять пример где мы изменяем внешнюю переменную, то JS видит что внутри блока нет новой переменной и поэтому 
// он просто находит существующую переменную и перезаписывает ее значение, и изменения сохранятся и будут видны вне блока.


//33. Что выведется?
//Выведится:
//'Inside'
//'Outside'
//const message = 'Outside';
//if (true) {
//  const message = 'Inside';
//  console.log(message);
//}
//console.log(message);




//Часть 6. map

//34. С помощью map получите новый массив [2, 4, 6, 8].
const numbers6 = [1, 2, 3, 4];
const result = numbers6.map((num) => num*2);
console.log(result);


//35. С помощью map получите массив имён пользователей.
const users = [
  { name: 'Amina', age: 20 },
  { name: 'Dana', age: 25 },
  { name: 'Aruzhan', age: 19 }
];
const arrayOfUsers = users.map((user) => user.name);
console.log(arrayOfUsers);


//36. С помощью map получите массив строк вида «Phone - 300000».
const products3 = [
  { name: 'Phone', price: 300000 },
  { name: 'Laptop', price: 500000 }
];
const productPrice = products3.map((product) => `${product.name} - ${product.price}`);
console.log(productPrice);


//37. С помощью map увеличьте каждое число на 10.
const numbers7 = [5, 10, 15];
const increaseTheNumbers = numbers7.map((number) => number + 10);
console.log(increaseTheNumbers);


//38. Найдите ошибку. Почему результат получается неправильным?
//Потому что он не возвращает результат, надо дописать return number*2.Если внутри стрелочной функции используются 
// фигурные скобки то JS ждет указание того что нужно вернуть и если слова return нет, функция по умолчанию возвращает undefined. 
// И все значения нового массива будут undefined.
//const numbers = [1, 2, 3];
//const result = numbers.map((number) => {
//  number * 2;
//});
//console.log(result);




//Часть 7. filter

//39. С помощью filter оставьте только числа больше 10.
const numbers8 = [5, 10, 15, 20, 3];
const filteredNumbers = numbers8.filter((num) => num > 10);
console.log(filteredNumbers);


//40. Оставьте только совершеннолетних пользователей.
const users2 = [
  { name: 'Amina', age: 17 },
  { name: 'Dana', age: 25 },
  { name: 'Ali', age: 16 },
  { name: 'Aruzhan', age: 20 }
];
const adultUsers = users2.filter((user) => user.age >= 18);
console.log(adultUsers);


//41. Оставьте только доступные товары.
const products4 = [
  { name: 'Phone', isAvailable: true },
  { name: 'Laptop', isAvailable: false },
  { name: 'Mouse', isAvailable: true }
];
const availableProducts = products4.filter((product) => product.isAvailable);
console.log(availableProducts);


//42. Оставьте только товары дороже 100000.
const products5 = [
  { name: 'Phone', price: 300000 },
  { name: 'Laptop', price: 500000 },
  { name: 'Mouse', price: 15000 }
];
const expensiveProducts = products5.filter((product) => product.price >= 100000);
console.log(expensiveProducts);


//43. Объясните, почему для задачи ниже лучше map, а не filter: «получить новый массив, где каждое число умножено на 2».
//map проходит по каждому элементу и изменяет его, но длина массива всегда остается точно такой же.
//filter не изменяет элементы, а решает забирать эти элементы в новый массив или нет, длина массива может быть меньше чем 
// исходный массив, или же такая же, если все элементы подошли под условие фильтрации.




//Часть 8. map + filter вместе

//44. Сначала оставьте только числа больше 10, а затем умножьте каждое оставшееся число на 2.
const numbers9 = [5, 10, 15, 20, 25];
const numbersResult = numbers9
.filter((number) => number > 10)
.map((number) => number*2);
console.log(numbersResult)


//45. Сначала оставьте только доступные товары, затем получите массив только их названий.
const products6 = [
  { name: 'Phone', isAvailable: true },
  { name: 'Laptop', isAvailable: false },
  { name: 'Mouse', isAvailable: true }
];
const productsResult = products6
.filter((product) => product.isAvailable)
.map((product) => product.name);
console.log(productsResult);


//46. Сначала оставьте совершеннолетних пользователей, затем получите массив их имён.
const users3 = [
  { name: 'Amina', age: 17 },
  { name: 'Dana', age: 25 },
  { name: 'Ali', age: 16 },
  { name: 'Aruzhan', age: 20 }
];
const adultUsersResult = users3
.filter((user) => user.age >= 18)
.map((user) => user.name);
console.log(adultUsersResult);




//Часть 9. Code review

//47. Задача - вывести каждый элемент массива отдельно. Найдите логическую ошибку.
//const numbers = [1, 2, 3];
//numbers.forEach((number) => {
//  console.log(numbers);    в консоле надо задать единичный элемент массива то есть number а не numberd
//});


//48. Задача - получить новый массив с удвоенными числами. Что нужно исправить?
//const numbers = [1, 2, 3];
//const result = numbers.filter((number) => {    Нужно заменить filter на map
//  return number * 2;
//});


//49. Что произойдёт? Объясните проблему.
//Код сломается, так как переменная message не определена и создана внутри фигурных скобок цикла for,
// то есть в блочной области видимости.Консоль пытается найти message в глобальной области видимости,
// и JS её не находит и поэтому код ломается.
//for (let i = 0; i < 3; i++) {
//  const message = 'Hello';
//}
//console.log(message);


//50. Что не так с условием цикла?
//Вместо знака <= надо написать строгое меньше <
//const numbers = [10, 20, 30];
//for (let i = 0; i <= numbers.length; i++) {
//  console.log(numbers[i]);
//}


//51. Почему этот while опасен?
//Тем что внутри цикла while необходимо изменять переменную что бы не получить бесконечный цикл
//так как условие всегда будет true.
//let i = 0;
//while (i < 5) {
//  console.log(i)
//  i++;
//}


//52. Задача - оставить только доступные товары. Исправьте код.
//const products = [
//  { name: 'Phone', isAvailable: true },
//  { name: 'Laptop', isAvailable: false }
//];
//const result = products.map((product) => {
//  return product.isAvailable;
//});
//Вмсето map надо применить метод filter.Правильный код:
const products7 = [
  { name: 'Phone', isAvailable: true },
  { name: 'Laptop', isAvailable: false }
];
const availableProducts2 = products7.filter((product) => product.isAvailable)
console.log(availableProducts2)




//Часть 10. Итоговая задача

//53. Работаем с одним массивом. Выполните все пункты по очереди.
const products8 = [
  { name: 'Phone', price: 300000, isAvailable: true },
  { name: 'Laptop', price: 500000, isAvailable: false },
  { name: 'Mouse', price: 15000, isAvailable: true },
  { name: 'Tablet', price: 200000, isAvailable: true }
];

//а) С помощью forEach выведите название каждого товара.
products8.forEach((product) => {
  console.log(product.name)
});

//б) С помощью for выведите название и индекс каждого товара.
for(let i = 0; i < products8.length; i++) {
  console.log(`${i} : ${products8[i].name}`)
};

//в) С помощью filter получите только доступные товары.
const availableProducts3 = products8.filter((product) => product.isAvailable)
console.log(availableProducts3);

//г) С помощью filter получите только товары дороже 100000.
const expensiveProducts2 = products8.filter((product) => product.price > 100000)
console.log(expensiveProducts2);

//д) С помощью map получите массив только названий товаров.
const array = products8.map((product) => product.name)
console.log(array);

//е) Сначала отфильтруйте доступные товары, затем через map получите только их названия.
const filteredProducts2 = products8
.filter((product) => product.isAvailable)
.map((product) => product.name)
console.log(filteredProducts2);

//ж) Объясните, чем отличаются результаты работы forEach, map и filter.
//Метод массива forEach,проходит по каждому элементу и передает ей функцию колбэка.
// Не создает новый массив и ничего не возвращает, используется для совершений действий(например:
// вывести что-то в консоль).

//Метод массива map проходит по каждому элементу и изменяет его, он всегда возвращает новый заполненный
// массив,но длина массива всегда остается такой же.

//Метод массива filter, создает новый массив в который помещает отобранные элементы подходящие по условию,
//при этом не изменяя исходный массив.

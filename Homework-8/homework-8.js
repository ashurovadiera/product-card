// Задание №3.
const userInfo = {
  lastName: 'Ashurova',
  firstName: 'Diora',
  age: 31,
  isStudent: false,
  mail: 'asurovadiera@gmail.com',
  country: 'USA',
  city: 'Brooklyn',
  state: 'New York',
};

console.log(userInfo)



// Задание №4.
const carInfo = {
  make: 'Mercedes-Benz',
  model: 'GLS 450',
  modelYear: 2026,
  color: 'khaki',
};

carInfo.owner = userInfo;

console.log(carInfo)

// Задание №5.
function checkMaxSpeed (car){
  if ('maxSpeed' in car){
    return;
  }
  car.maxSpeed = 200;
}
checkMaxSpeed(carInfo);
console.log(carInfo.maxSpeed);


// Задание №6.
function  getProperty(obj, property){
  console.log(obj[property])
}
getProperty(userInfo, 'firstName');
getProperty(userInfo, 'lastName');
getProperty(userInfo, 'age');

// Задание №7.
const products=['молоко', 'сыр', 'творог', 'сметана'];
console.log(products);

// Задание №8.
const books =[
  {
    title: "Идиот",
    author:"Фёдор Михайлович Достоевский",
    yearOfRelease:1869,
  },
  {
    title: "Война и мир",
    author:"Лев Николаевич Толстой",
    yearOfRelease:1873,
  },
  {
    title: "Капитанская дочка",
    author:"Александр Сергеевич Пушкин",
    yearOfRelease:1836,
  },
]
books.push ({
  title: "Лев и собачка",
  author:"Лев Николаевич Толстой",
  yearOfRelease:1875,
})

console.log(books);

// Задание №9.
const chroniclesOfNarnia =[
  {
    title: "Хроники Нарнии",
    author:"Клайв Стэйплз Льюис",
    yearOfRelease:1950,
  },
  {
    title: "Хроники Нарнии.Принц Каспиан",
    author:"Клайв Стэйплз Льюис",
    yearOfRelease:1951,
  },
   {
    title: "Хроники Нарнии.Покоритель Зари, или Плавание на край света",
    author:"Клайв Стэйплз Льюис",
    yearOfRelease:1952,
  },
  {
    title: "Спутник по Нарнии",
    author:"Пол Ф. Форд",
    yearOfRelease:2005,
  },
]
const listOfBooks =[...books, ...chroniclesOfNarnia]
console.log(listOfBooks);

//Задание №10.
function isRarity(booksArray){
  return booksArray.map(book => {
    return{
      ...book,
      isRare: book.yearOfRelease>2000,
    };
  });
}
const updatedBooks = isRarity(chroniclesOfNarnia);
console.log(updatedBooks);





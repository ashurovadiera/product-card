// Задание №2
const numbers = [1,2,3,4,5,6,7,8,9,10];

const result = numbers.filter(number=>number>4);

console.log(result);


// Задание №3
const furnitures = ['стол', 'стул', 'диван', 'кресло', 'комод', 'шкаф'];

const newArray = furnitures.includes('комод');

console.log(newArray);


// Задание №4
function flipArray(arr){
  return arr.reverse();
}

const flipNumbers = flipArray(numbers)
console.log(flipNumbers);

const flipFurnitures = flipArray(furnitures);
console.log(flipFurnitures);



//Задание №7
import { comments } from "./comments.js";
const filteredComments = comments.filter(comment=>comment.email.includes('.com'));
console.log(filteredComments)



//Задание №8
const updatedCommentsId = comments.map((comment) => {
  if (comment.id <= 5) {
    comment.postId = 2;
  }
  else {
    comment.postId = 1;
  }
  return comment;
})
console.log(updatedCommentsId)



//Задание №9
const updatedCommentsIdName = comments.map((comment)=>{
  return {
    id: comment.id,
    name: comment.name
  }
  });
  console.log(updatedCommentsIdName)



//Задание №10
const messageComments = comments.map((comment)=>{
  return {
    ...comment,
    isInvalid: comment.body.length > 180 
  };
});
console.log(messageComments);


//Задание №11
const arrayEmails = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

console.log(arrayEmails);

const emails = comments.map((comment)=>{
  return comment.email
  });

console.log(emails)


//Задание №12
const emailsToString = arrayEmails.toString();
console.log(emailsToString)

const emailsJoin = arrayEmails.join("|");
console.log(emailsJoin);
// Задание 6. "экспортируемое константа"

import { socialComments } from "./comments.js";

// Задание 2. Отфильтровка чисел от 5 до 10

const numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(function(number)
{
  return number >= 5;
});

console.log (filteredNumbers);

// Задание 3. Проверка массива

const books = [
  "Коран", "Сахих аль-Бухари", "Сахих Муслим", "Сунан абу Дауд", "Сунан ан-Насаи"
];
const hasBook = books.includes("Сахих Муслим");

console.log(hasBook);

// Задание 4. Переворот массива

function reverseArray(arr) {
  arr.reverse();
  return arr;
}

reverseArray(numbers);
reverseArray(books);

console.log(numbers);
console.log(books);

// Задание 7. Почта которая содержит “.com”

const comEmails = socialComments.filter(function(comment) {
  return comment.email.includes(".com");
});

console.log(comEmails);

// Задание 8. Перебор массива postId id

const newPostIds = socialComments.map(function(comment) {
  return {
    ...comment,
    postId: comment.id <= 5 ? 2 : 1
  };
});

console.log(newPostIds);

// Задание 9. Перебор только по id и имя

const idAndNames = socialComments.map(function(comment) {
  return {
    id: comment.id,
    name: comment.name
  };
});

console.log(idAndNames);

// Задание 10. Перебор по свойству isInvalid

const checkedComments = socialComments.map(function(comment) {
  return {
    ...comment,
    isInvalid: comment.body.length > 180
  };
});

console.log(checkedComments);

// Задание 11. Массив почт через reduce и map

// через reduce
const emailsReduce = socialComments.reduce(function(result, comment) {
  result.push(comment.email);
  return result;
}, []);

console.log(emailsReduce);

// через map
const emailsMap = socialComments.map(function(comment) {
  return comment.email;
});

console.log(emailsMap);

// Задание 12. Массив почт в строку

const emailsString1 = emailsMap.toString();
const emailsString2 = emailsMap.join(", ");

console.log(emailsString1);
console.log(emailsString2);

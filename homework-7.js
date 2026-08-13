//Задание 3
function showTemperature(city, temperature) {
  console.log(`Сейчас в ${city} температура + ${temperature} градусов по Цельсию`);
}

showTemperature("Екатеринбурге", 25);

//Задание 4
const speedOfLight = 299792458;

function checkSpeed(speed) {
  if (speed > speedOfLight) {
    console.log("Сверхсветовая скорость");
  } else if (speed < speedOfLight) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}
//В звисимости какую скорость поставлю в консоль лог выводится то или иное сообщение
checkSpeed(300000000);
checkSpeed(200000000);
checkSpeed(299792458);

//Задание 5
const product = "Ноутбук";
const price = 80000;

function buyProduct(budget) {
  if (budget >= price) {
    console.log(`${product} приобретён. Спасибо за покупку!`);
  } else {
    const difference = price - budget;
    console.log(`Вам не хватает ${difference} рублей, пополните баланс.`);
  }
}

buyProduct(100000); //хватает если это
buyProduct(50000); //не хватает если это пополни баланс

// Задание 6
function greet(firstName) {
  console.log(`Привет, ${firstName}!`);
}
greet("Ринат");

// Задание 7
const firstName = "Ринат";
const age = 38;
const city = "Екатеринбург";

console.log(firstName);
console.log(`Мне ${age} лет`);
console.log(city);

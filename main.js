// Покрасить все карточки
const productCards = document.querySelectorAll('.product-card');
const changeColorAllCardButton = document.querySelector('#change-color-all-card');
const greenColorHash = '#00af57';
const blueColorHash = '#3186ff';

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})

// Покарсить первую крточку
const firstProductCards = document.querySelector('.product-card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCards.style.backgroundColor = blueColorHash;
})

//Открыть google
const openGoogleButton = document.querySelector ('#open-google')
openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://google.com')
  } else {
    return;
  }
}
// Вывод консоль лог

const outputLogButton = document.querySelector ('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsolelog('ДЗ №6'));

function outputConsolelog(message) {
  alert(message)
  console.log(message)
}

// Вывод в консоль лог то что написано в заголовке контента
const productsTitle = document.querySelector('.products__title');

productsTitle.addEventListener('mouseenter', () => {
  console.log(productsTitle.textContent); //textContent берет текст из элемента на который мы наводим
});

// Меняем цвет кнопки при нажатии
const changeButtonColor = document.querySelector('#change-button-color');

changeButtonColor.addEventListener('click', () => {
    changeButtonColor.classList.toggle('button-active'); //classList.toggle меняет цвет через стиль при каждом нажатии есть цвет нет цвета 
});

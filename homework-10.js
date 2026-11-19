// 3 задание. Подключить массив товаров

import { products } from './products-data.js';       // Импорт массива products-data из другого JS-файла.

// Получаем элементы HTML
const MIN_CARDS = 1;            // Минимальное и максимальное количество карточек.
const MAX_CARDS = 5;
const productList = document.getElementById('product-list');                  // Находим пустой список, куда будем добавлять карточки.
const productTemplate = document.getElementById('product-template');          // Находим HTML-шаблон одной карточки товара.


// Создаем функцию одной карточки товара
function createProductCard(product) {
  const card = productTemplate.content.cloneNode(true);                // Клонирует HTML-шаблон вместе со всеми вложенными элементами.
  const image = card.querySelector('.product-card__image');           // Находит изображение и подставляет путь к картинке и альтернативный текст.
  image.src = product.image;
  image.alt = product.imageAlt;

  // Находит элементы карточки и подставляет данные из объекта.
  card.querySelector('.product-card__label').textContent = product.category;
  card.querySelector('.product-card__title').textContent = product.title;
  card.querySelector('.product-card__description').textContent = product.description;

  // Выводит цену товара с разделением разрядов.
  card.querySelector('.product-card__price-value').textContent =
    `${product.price.toLocaleString('ru-RU')} ${product.currency}`;
  const componentsList = card.querySelector('.product-card__components');            // Находит список компонентов внутри карточки.
  product.components.forEach((component) => {                                       // Перебирает массив компонентов товара.
    const item = document.createElement('li');                                     // Создаёт новый HTML-элемент списка.
    item.textContent = component;                                                 // Записывает название компонента в созданный элемент.
    componentsList.appendChild(item);                                            // Добавляет элемент в список компонентов.
  });

  return card;                                                                  // Возвращает готовую карточку.
}

// Создаем функцию отображения карточек
function renderProducts(productsArray) {
  productList.innerHTML = '';                                                 // Очищает список перед добавлением карточек.
  const fragment = document.createDocumentFragment();                        // Создаёт временный контейнер для карточек.
  productsArray.forEach((product) => {                                      // Перебирает переданный массив товаров.
    fragment.appendChild(createProductCard(product));                      // Создаёт карточку и добавляет её во временный контейнер.
  });
  productList.appendChild(fragment);                                      // Добавляет все карточки на страницу одним действием.
}

// Запрос количество карточек у пользователя
function getCardsCount() {
  while (true) {                                            // Цикл повторяется, пока пользователь не введёт правильное число или не нажмёт кнопку «Отмена».
    const answer = prompt(
      `Сколько карточек отобразить? Введите число от ${MIN_CARDS} до ${MAX_CARDS}`
    );
    if (answer === null) {                                // Если пользователь нажал «Отмена», показываем все карточки.
      return MAX_CARDS;
    }

    const count = Number(answer);                        // Преобразуем введённое значение в число.

    // Проверяем, что введено целое число от 1 до 5.
    if (
      Number.isInteger(count) &&
      count >= MIN_CARDS &&
      count <= MAX_CARDS
    ) {
      return count;
    }
    alert(`Введите целое число от ${MIN_CARDS} до ${MAX_CARDS}`);                 // Если значение неправильное, показываем предупреждение.
  }
}

// Получаем количество карточек от пользователя.
const cardsCount = getCardsCount();
renderProducts(products.slice(0, cardsCount));                                  // Метод slice() возвращает нужное количество товаров из массива. Затем renderProducts() отображает эти товары на странице.

// 4 задание. Создать массив объектов через reduce()
// Создаём новый массив. Каждый его объект содержит название товара и его описание.

const titleDescriptionList = products.reduce((acc, product) => {                // Добавляем в аккумулятор новый объект. Название товара становится ключом, а описание товара — значением.
  acc.push({
    [product.title]: product.description,
  });
  return acc;                                                                 // Возвращаем аккумулятор для следующей итерации.
}, []);

console.log(titleDescriptionList);                                          // Выводим массив в консоль.

// Задание №3. Объект с данными пользователя

const user = {
    firstName: "Ринат",
    lastName: "Байтуллин",
    age: 38,
    email: "@rinatbajtullin87",
    country: "Россия",
    city: "Уфа",
    job: "Финансовое управление",
    profession: "Старший техник-программист",
    familyStatus: "женат"
};

console.log(user.profession);

// Задание №4. Объект автомобиля

const car = {
    brand: "Lada",
    model: "Granta",
    year: 2020,
    color: "серебристый",
    transmission: "механическая"
};

// Добавляем владельца user
car.master = user

console.log("Владелец автомобиля -" , car.master.firstName);

// Задание №5. Добавление максимальной скорости
// hasOwnProperty - это метод проверки

function addMaxSpeed(car) {
    if (!car.hasOwnProperty("maxSpeed")) {
        car.maxSpeed = 180;
    }
}

addMaxSpeed(car);

console.log(car);

// №6. Получаем свойства из объекта

function getProperty(object, property) {
    console.log(object[property]);
}

getProperty(car, "brand");
getProperty(car, "model");
getProperty(car, "year");

// №7. Массив продукты

const products = [
    "хлеб",
    "молоко",
    "йогурты",
    "яблоки",
    "бананы"
];

console.log(products);

// №8. Массив исламских книг

const books = [
    {
        title: "Сахих аль-Бухари",
        author: "Имам аль-Бухари",
        year: 846,
        coverColor: "зелёный",
        genre: "хадисы"
    },
    {
        title: "Сахих Муслим",
        author: "Имам Муслим",
        year: 875,
        coverColor: "красный",
        genre: "хадисы"
    },
    {
        title: "Сунан Абу Дауд",
        author: "Имам Абу Дауд",
        year: 889,
        coverColor: "синий",
        genre: "хадисы"
    },
    {
        title: "Джами ат-Тирмизи",
        author: "Имам ат-Тирмизи",
        year: 884,
        coverColor: "коричневый",
        genre: "хадисы"
    }
];

// Добавляем еще одну книгу в конец

books.push({
    title: "Сунан ан-Насаи",
    author: "Имам ан-Насаи",
    year: 915,
    coverColor: "чёрный",
    genre: "хадисы"
});

console.log(books);

// №9. Второй массив исламских книг

const additionalBooks = [
    {
        title: "Сунан Ибн Маджа",
        author: "Имам Ибн Маджа",
        year: 887,
        coverColor: "белый",
        genre: "хадисы"
    }
];

const allBooks = [...books, ...additionalBooks];

console.log(allBooks);

// №10. Добавляем свойство isRare

function checkRareBooks(books) {
    return books.map(function(book) {
        book.isRare = book.year > 900;
        return book;
    });
}

const rareBooks = checkRareBooks(allBooks);

console.log(rareBooks);
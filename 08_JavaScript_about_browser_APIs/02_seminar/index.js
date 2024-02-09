// Дан CSS:
// ```
// <!--<style>-->
// <!--  nav ul {-->
// <!--    list-style-type: none;-->
// <!--    margin: 0;-->
// <!--    padding: 0;-->
// <!--    display: flex;-->
// <!--    background-color: #333;-->
// <!--  }-->
// <!-- -->
// <!--  nav ul li {-->
// <!--    margin: 0;-->
// <!--    padding: 0;-->
// <!--  }-->
// <!-- -->
// <!--  nav ul li a {-->
// <!--    display: block;-->
// <!--    padding: 10px 20px;-->
// <!--    color: #fff;-->
// <!--    text-decoration: none;-->
// <!--    transition: background-color 0.3s;-->
// <!--  }-->
// <!-- -->
// <!--  nav ul li a:hover {-->
// <!--    background-color: #555;-->
// <!--  }-->
// <!-- -->
// <!--  nav ul li a.active {-->
// <!--    background-color: #f00;-->
// <!--  }-->
// <!--</style>-->
// ```

// Дан HTML:
//     ```
// <nav>
//   <ul class="menu">
//     <li><a class="menu__link" href="#">Главная</a></li>
//     <li><a class="menu__link" href="#">О нас</a></li>
//     <li><a class="menu__link" href="#">Услуги</a></li>
//     <li><a class="menu__link" href="#">Контакты</a></li>
//   </ul>
// </nav>
// ```

// Вам необходимо создать навигационное меню для веб-сайта, в
// котором меняется активный пункт при клике без фактического
// перехода на другие страницы. Меню должно обладать следующими
// характеристиками:
//     1. Подсветка активного пункта: При клике на пункт меню он
// должен становиться активным, и для активного пункта должен
// применяться определенный стиль (например, изменение цвета
// фона). Если выбрать другой пункт, предыдущий должен
// перестать быть активным.
// 2. Эффекты наведения: При наведении курсора на пункты меню
// должны применяться эффекты (например, изменение цвета
// текста или фона) для подсказки пользователю, что пункт меню
// является интерактивным.

// const menuEl = document.querySelector(".menu");
// const listLink = menuEl.querySelectorAll(".menu__link");
// const popUpEl = document.querySelector(".popup");
// const closePopUpEl = popUpEl.querySelector(".close-popUp");
// menuEl.addEventListener("click", function ({target}) {
//     [...listLink].find(item => item.classList.contains("active")).classList.remove("active")
//     target.classList.add("active");
//     if (target.classList.contains("open-popUp")) {
//         console.log("нажали кнопку")
//         popUpEl.classList.add("d-none")
//     }
// })
// closePopUpEl.addEventListener("click", function () {
//     popUpEl.classList.remove("d-none")
// })

// Задание 2.
//
// Создайте простое модальное окно, которое появляется при клике
// на кнопку "Открыть модальное окно" и закрывается при клике на
// кнопку "Закрыть". Модальное окно должно содержать заголовок
// "Модальное окно" и кнопку для закрытия. Модальное окно должно
// плавно появляться и исчезать при открытии и закрытии.

// Задание 3.
//
// У вас есть кнопка "Купить". Создайте скрипт, который при клике
// на эту кнопку меняет её текст на "Товар добавлен в корзину" в
// течение 2 секунд, а затем возвращает исходный текст "Купить".
//     В обработчике события клика также проверьте, является ли
// событие доверенным (event.isTrusted). Если событие является
// доверенным, выполните изменение текста кнопки и убедитесь,
//     что после 2 секунд текст возвращается в исходное состояние.

// const btnBuyEl = document.querySelector(".btn__buy");
// btnBuyEl.addEventListener("click", function (event) {
//     if (event.isTrusted) {
//         btnBuyEl.textContent = "Товар добавлен в корзину";
//         setTimeout(function () {
//             btnBuyEl.textContent = "Купить";
//         }, 2000);
//     }
// })
// const clickEvent = new Event('click');
//
// // Вызываем обработчик события
// btnBuyEl.dispatchEvent(clickEvent);

// Задание 4
//
// Вам предоставляется задача создать простой онлайн опросник, который позволяет пользователям
// отвечать на вопросы с вариантами ответов. Ваша задача - разработать интерфейс и функциональность
// для этого опросника, используя HTML, CSS и JavaScript.
// 1. Создайте интерфейс с несколькими вопросами и вариантами ответов. Каждый вопрос должен
// иметь несколько вариантов ответов.
// 2. Реализуйте обработку событий, чтобы пользователи могли выбирать варианты ответов.
// 3. Добавьте кнопку "Завершить опрос", которая будет показывать результаты опроса.
// 4. При нажатии на кнопку "Завершить опрос", вы должны проверить, что пользователь ответил на все
// вопросы, и отобразить выбранные им варианты ответов.
// 5. Если пользователь не ответил на все вопросы, покажите ему сообщение о необходимости ответить
// на все вопросы перед завершением опроса.
// 6. По желанию можно добавить стилизацию опросника с использованием CSS для лучшего
// пользовательского опыта.
//
//     ```
// <!DOCTYPE html>
// <html lang="en">
//
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>Modal Window</title>
//   <style>
//     body {
//       font-family: Arial, sans-serif;
//     }
//
//     .question {
//       margin-bottom: 20px;
//     }
//
//     .options {
//       display: flex;
//       flex-direction: column;
//     }
//
//     label {
//       cursor: pointer;
//       margin-bottom: 10px;
//     }
//
//     .result {
//       font-weight: bold;
//     }
//   </style>
// </head>
//
// <body>
//   <div class="question">
//     <p>Вопрос 1: Какой ваш любимый цвет?</p>
//     <div class="options">
//       <label>
//         <input type="radio" name="q1" value="Синий"> Синий
//       </label>
//       <label>
//         <input type="radio" name="q1" value="Зеленый"> Зеленый
//       </label>
//       <label>
//         <input type="radio" name="q1" value="Красный"> Красный
//       </label>
//     </div>
//   </div>
//
//   <div class="question">
//     <p>Вопрос 2: Какое ваше любимое животное?</p>
//     <div class="options">
//       <label>
//         <input type="radio" name="q2" value="Собака"> Собака
//       </label>
//       <label>
//         <input type="radio" name="q2" value="Кот"> Кот
//       </label>
//       <label>
//         <input type="radio" name="q2" value="Попугай"> Попугай
//       </label>
//     </div>
//   </div>
//
//   <button id="submit">Завершить опрос</button>
//
//   <div class="result" style="display: none;">
//     <p>Результаты:</p>
//     <p id="result-q1">Вопрос 1: <span></span></p>
//     <p id="result-q2">Вопрос 2: <span></span></p>
//   </div>
// </body>
//
// </html>
// ```

const questionsEl = document.querySelectorAll(".question");
const btnSubmitEl = document.getElementById("submit");
const resultEl = document.querySelector(".result");
const errorTextEl = document.querySelector(".errortext");
btnSubmitEl.addEventListener("click", function () {
    const resultArray = [];
    questionsEl.forEach(questionEl => {
        const valueInput = questionEl.querySelector("input:checked")?.value;
        if (valueInput === undefined) {
            questionEl.classList.add("error");
        } else {
            questionEl.classList.remove("error");
            resultArray.push(valueInput)
        }
    })
    if (resultArray.length === questionsEl.length) {
        resultEl.style.removeProperty("display");

        const template = resultArray.map((answer, index) => {
            return `<p id="result-q${index + 1}">Вопрос ${index + 1}: <span>${answer}</span></p>`;
        }).join("");
        resultEl.insertAdjacentHTML("beforeend", template);

        btnSubmitEl.disabled = true;
        errorTextEl.textContent = "ответил на все вопросы";
    } else {
        errorTextEl.textContent = "не на все вопросы получены ответы"
    }
})
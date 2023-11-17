// 1. В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

// const btn = document.querySelector('.btn');
//
// btn.addEventListener('click', (event) => {
//     event.preventDefault()
//     if (!document.querySelector('input[type=checkbox]').checked) {
//         btn.insertAdjacentHTML('beforebegin', `<p>Необходимо согласиться с условиями</p>`)
//     }
// })

// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести сообщение “Кофе закончился”

// const form = document.querySelector('.form');
// const strTea = form.querySelector('.tea');
// const strCoffee = form.querySelector('.coffee');
// const btn = form.querySelector('.btn');
// const error = form.querySelector('.error');
// const inputTea = form.querySelector('.inTea');
// const inputCoffee = form.querySelector('.inCoffee');
//
// btn.addEventListener('click', errorToProduct)
//
// function errorToProduct(event) {
//     event.preventDefault();
//     if (inputTea.checked) {
//         abc(error, strTea);
//     }
//     else if (inputCoffee.checked) {
//         abc(error, strCoffee);
//     }
//     else {
//         error.textContent = 'ничего не выбрано. выбирите напиток';
//     }
// }
//
// function addError(str) {
//     return `${str} закончился`
// }
// function abc(error, str) {
//     error.textContent = addError(str.textContent);
// }

// const form = document.querySelector('.form');
// const inPassword = form.querySelector('.inPassword');
// const password = prompt('Введите ваш пароль');
//
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     if (inPassword.value === password) {
//         inPassword.style.borderColor = 'green';
//     } else {
//         inPassword.style.borderColor = 'red';
//     }
// })

// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода
// * Создать список покупок, вводим, нажимаем добавить и он добавляет в список.
const input = document.querySelector('.input');
const h1 = document.querySelector('.h1');

const ul = document.querySelector("ul");
const btn = document.querySelector('.btn');

input.addEventListener('keyup', () => {
    h1.textContent = input.value;
    // list.push(input.value);
})

btn.addEventListener('click', (event) => {
    // event.preventDefault();
    const li = document.createElement("li");
    li.textContent = input.value;
    console.log(li)
    ul.append(li);
})
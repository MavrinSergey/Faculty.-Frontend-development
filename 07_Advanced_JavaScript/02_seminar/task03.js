// Вы создаете интерфейс, где пользователь вводит число. Ваша задача — проверить, является ли введенное
// значение числом или нет, и дать соответствующий ответ.
//     Создайте HTML-структуру: текстовое поле для ввода числа и кнопку "Проверить".
//     Добавьте место (например, div) для вывода сообщения пользователю.
//     Напишите функцию, которая будет вызвана при нажатии на кнопку. Эта функция должна использовать
//     try и catch для проверки вводимого значения.

const btn = document.querySelector('.btn');
const div = document.querySelector('.div');
const input = document.getElementById('input');

function validation (){
    try {
        if (isNaN(Number(input.value)) || input.value === ''){
            throw new Error('this is not a number');
        }
        div.textContent = 'congratulations!!!'
    }
    catch (error) {
        div.textContent = error.message;
    }
}
btn.addEventListener('click', validation);

"use strict";
// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

const num1 = Number.parseFloat(prompt("Введите число меньше или равно 1 "));
const num2 = Number.parseFloat(prompt("Введите число больше и равное 3 "));
if (num1 > 1) {
    alert("Значение num1 неверное");
} else if (num2 < 3) {
    alert("Значение num2 неверное");
} else alert("Значения верные")


"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

const salaryGross = obtainingSalaryData();
const salaryNet = deductsTax(salaryGross);

console.log(
    `Размер заработной платы за вычетом налогов равен ${salaryNet}`
);

function obtainingSalaryData() {
    let salary;
    do {
        salary = +prompt("Введите зарплату к начислению: ");
        if (!Number.isFinite(salary)) {
            console.log("Значение задано неверно");
        }
    } while (!Number.isFinite(salary));
    return salary;
}

function deductsTax(num) {
    return num * 0.87;
}

"use strict";

/*
Необходимо пользователя попросить ввести температуру в градусах Цельсия,
преобразовать введенное пользователем значение в соответствующую температуру
в градусах по Фаренгейту и вывести в alert сообщение с таким текстом:
"Цельсий: {C}, Фаренгейт: {F}"
Где вместо {C} и {F} должны быть подставлены соответствующие значения, которые
были получены ранее.
Формула перевода градусов Цельсия в градусы Фаренгейта:
градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32

Уточнение: пользователь всегда вводит корректное число.
*/

const convertBtn = document.getElementById("converterBtn");
convertBtn.addEventListener("click", getInput);

function getInput() {
    const deg = document.getElementById("converterInput").value;
    const far = converterDegToFar(deg);
    setRes(deg, far);
}

function converterDegToFar(deg) {
    return (9 / 5) * deg + 32;
}
function setRes(deg, far) {
    alert(`Температура ${deg}\u{00B0} эквивалентна ${far}\u{00B0}F`);
}

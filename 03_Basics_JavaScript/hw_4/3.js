"use strict";
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
const arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(Math.floor(Math.random() * 10));
}
console.log("Сгенерированный массив:", arr);

// 1. Рассчитать сумму элементов этого массива
console.log("Сумма элементов массива: ", arr.reduce((acc, el) => acc + el, 0));

// 2. Найти минимальное число
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (min > el) {
        min = el;
    }
}
console.log("Минимальное число в массиве: ", min);
// 3. Найти есть ли в этом массиве число 3

const indexes = arr
    .map((value, index) => ({value, index}))
    .filter((obj) => obj.value === 3)
    .map((obj) => obj.index);

console.log("Массив индексов с числом 3:", indexes);
// Третье задание через reduce
// const indexesReduce = arr.reduce((acc, num, index) => {
//     if (num === 3) {
//         acc.push(index);
//     }
//     return acc;
// }, []);

"use strict";

// Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в
// диапазоне [0, 9].
const arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(Math.floor(Math.random() * 4));
}
console.log("Сгенерированный массив:", arr);

// После создания массива необходимо вывести в консоль следующие значения:
// 1. Сумму элементов массива
console.log(arr.reduce((acc, el) => acc + el, 0));

// 2. Минимальное значение в массиве
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (min > el) {
        min = el;
    }
}

// 3. Новый массив, содержащий индексы сгенерированного выше массива, в которых
// значение равно 3.
// Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести
// в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
// массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
// не окажется, значит нужно будет вывести пустой массив.
const indexes = arr
    .map((value, index) => ({ value, index }))
    .filter((obj) => obj.value === 3)
    .map((obj) => obj.index);

console.log("Массив индексов с числом 3:", indexes);
// Через reduce
const indexesReduce = arr.reduce((acc, num, index) => {
    console.log(acc);
    if (num === 3) {
        console.log(acc);
        acc.push(index);
        console.log(acc);
    }
    console.log(acc);
    return acc;
}, []);
console.log(indexesReduce);

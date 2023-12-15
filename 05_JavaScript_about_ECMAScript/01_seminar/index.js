"use strict";

// // Задание 1.
// // Создайте функцию mergeArrays, которая принимает два
// // массива и возвращает новый массив, содержащий все
// // элементы из обоих массивов. Используйте spread
// // оператор для объединения массивов.
// // mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,
// // 2, 3, 4, 5, 6]

// const mergeArrays1 = [...[1, 2, 3], ...[4, 5, 6]];

// const mergeArrays2 = (firstArray, secondArray) => {
//   return [...firstArray, ...secondArray];
// };

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// console.log(mergeArrays3(arr1, arr2));
// function mergeArrays3(a, b) {
//   const arr3 = [...a, ...b];
//   return arr3;
// }

// // Создайте функцию removeDuplicates, которая принимает
// // любое количество аргументов и возвращает новый
// // массив, содержащий только уникальные значения.
// // Используйте rest оператор для сбора всех аргументов в
// // массив а затем filter для определения дубликатов.
// // removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
// // результат: [1, 2, 3, 4, 5]

// function removeDuplicates1() {
//   const args = Array.prototype.slice.call(arguments);
//   return args.filter((item, pos) => {
//     return args.indexOf(item) === pos;
//   });
// }
// //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/arguments

// function removeDuplicates2(...args) {
//   return args.filter((item, pos) => args.indexOf(item) == pos);
// }

// function removeDuplicates3(...args) {
//     const setArr = new Set(args);
//     return [...setArr];
// }

// console.log(removeDuplicates2(1, 2, 3, 2, 4, 1, 5));
// console.log(removeDuplicates3(1, 2, 3, 2, 4, 1, 5));

// const setArr = new Set([1, 2, 3, 2, 4, 1, 5]);
// console.log(setArr);
// console.log(setArr);
// // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set


// // Задание 2 (Чистые функции 25минут)

// // Текст задания
// // 1. Напишите функцию getEvenNumbers, которая принимает массив
// // чисел в качестве аргумента и возвращает новый массив,
// // содержащий только четные числа.

// function getEvenNumbers(arr) {
//   return arr.filter((num) => num % 2 === 0);
// }
// console.log(getEvenNumbers([1, 2, 3, 2, 4, 1, 5, "f"]));

// // 2. Задача: Напишите функцию calculateAverage, которая принимает
// // массив чисел в качестве аргумента и возвращает среднее значение
// // этих чисел.

// function calculateAverage(array) {
//   return array.reduce((acc, item) => acc + item, 0) / array.length;
// }
// console.log(calculateAverage([2, 3, 5, 6, 7, 9]));

// // 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// // качестве аргумента и возвращает новую строку, в которой первая
// // буква каждого слова является заглавной.

// function capitalizeFirstLetter1(text) {
//   return text
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }

// console.log(
//   capitalizeFirstLetter1("качестве аргумента и возвращает новую строку")
// );


// const capitalizeFirstLetter2 = (str) => {
//   return str.replace(/(^|\s)\S/g, (a) => a.toUpperCase());
// };

// console.log(capitalizeFirstLetter2("привет, дорогой друг!"));


// // Задание 3 (Замыкания 20 минут)
// // 1. Напишите функцию createCalculator, которая принимает начальное
// // значение и возвращает объект с двумя методами: add и subtract.
// // Метод add должен увеличивать значение на переданное число, а
// // метод subtract должен уменьшать значение на переданное число.
// // Значение должно быть доступно только через методы объекта, а не
// // напрямую.

// const createCalculator = (incomingNumber) => {
//     return {
//         add: (arg) => {incomingNumber += arg},
//         subtract: (arg) => {incomingNumber -= arg},
//         getNumber: () => {return incomingNumber}
//     }
// }

// // Задание 4 (Лексический контекст 15 минут)
// // 1. Напишите функцию createGreeting, которая принимает имя
// // пользователя и возвращает функцию, которая будет выводить
// // приветствие с использованием этого имени.
// // // Пример использования:
// // const greeting = createGreeting('John');
// // greeting(); // Ожидаемый результат: "Hello, John!"

// function createGreeting(name) {
//     return () => {console.log(`Hello, ${name}`)};
// }


// Задание 5 (тайминг 15 минут)
// 1. Задача: Напишите функцию createPasswordChecker, которая
// принимает допустимую длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина соответствует допустимой, и false в противном
// случае.
// // Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат:
// false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

// function createPasswordChecker(passwordLength) {
//     return (password) => {
//         return password.length >= passwordLength;
//     };
// }

// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат: false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true


// // Задание 6 (Рекурсия 25 минут)
// // 1. Напишите рекурсивную функцию sumDigits, которая принимает
// // положительное целое число в качестве аргумента и возвращает
// // сумму его цифр.
// // // Пример использования:
// // console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// // console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
// // + 7 + 8 + 9)

// function sumDigits(num) {
//     if (num < 10) {
//         return num;
//     }
//     return num % 10 + sumDigits(Math.trunc(num / 10));
// }
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)

// // без рекурсии
// const sumDigits = (num) => {
// 	let sum = 0;
// 	for (const numb of `${num}`) {
// 		sum += +numb;
// 	}
// 	return sum;
// };

// console.log(sumDigits(123));
// console.log(sumDigits(456789));
// 1. Создайте массив с элементами 1, 2, 3.
// Выведите на экран каждый из этих элементов.
// const array = [1, 2, 3]
// console.log(array[0], array[1], array[2]);

// 2. Создайте массив с произвольными элементами.
// Выведите на экран количество элементов в этом массиве.
// const array = [2, 'hello', '117'];
// console.log(array.length);

// 3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.
// const array = ['a', 'b', 'c'];
// array[0] = 1;
// array[1] = 2;
// array[2] = 3;
// console.log(array);

// 1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте
// каждый элемент массива на единицу.
// const array = [1, 2, 3];
// for (let i = 0; i < array.length; i++){
//     array[i] ++;
// }
// console.log(array);

// 2. Узнайте длину следующего массива и объясните почему такое значение:

// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// console.log(arr);
// console.log(arr[2]);

// 3. Пусть дан такой массив: `[1, 2, 3]`. Добавьте ему в конец элементы 4 и 5.

// let array = [1, 2, 3];
// array = [...array, 4, 5];
// console.log(array);

// const array = [1, 2, 3];
// array.push(4, 5);
// console.log(array);

// 4. Создайте произвольный массив из 5 элементов, удалите из него два элемента. Проверьте, какое станет значение свойства length после этого.
// const array = [3, 7, 'hey', 4, 8];
// array.slice(0, -2);
// array.splice(1, 2);
// console.log(array);
// console.log(array.length);
// console.log(array);

// array.splice(1, 0, 'rr', 'world');
// console.log(array);
// const el = array.pop();
// console.log(array);
// console.log(el);
// const el = array.shift();
// console.log(array);
// console.log(el);
// array.unshift('Elena');
// console.log(array);
// delete array[3];
// console.log(array);
// const some = array.at(3);
// console.log(some);

// let element = 5;
// console.log(element++);
// console.log(++element);

// 1. С помощью цикла for выведите в консоль числа от 11 до 33.

// for (let i = 11; i <= 33; console.log(++i));

// 2. С помощью цикла for выведите в консоль нечетные числа в промежутке от 1
// до 100 включительно.
// for (let i = 1; i <= 100; i += 2) {
//     console.log(i);
// }

// 3. С помощью цикла for выведите в консоль числа от 100 до 0.
// for (let i = 100; i >= 0; i--) {
//     console.log(i);
// }

// 4. Создать переменную с заданным числом. Умножайте число на 3 столько раз,
// пока результат умножения не станет больше 1000. Какое число получится?
// Посчитайте количество итераций, необходимых для этого.

// let num = 5;
// let count = 0;
// while (num <= 1000) {
//     num *= 3;
//     count++;
// }
// console.log(count);
// console.log(num);

// 1. Создать массив `[2, 5, 9, 15, 1, 4]`.
// Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.
// const array = [2, 5, 9, 15, 1, 4];
// const newArray = array.filter(el => el > 3 && el < 10);
// console.log(newArray);
// const newArray = [];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] > 3 && array[i] < 10) {
//     newArray.push(array[i]);
//   }
// }
// console.log(newArray);

// 2. Найдите сумму четных чисел от 2 до 100.
// let sum = 0;
// for (let i = 2; i < 100; i += 2) {
//   sum += i;
// }
// console.log(sum);

// 3. Создать массив `[2, 5, 9, 3, 1, 4]`.
// Найдите сумму элементов этого массива.
// const array = [2, 5, 9, 3, 1, 4];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
// }
// console.log(sum);
// const sum = array.reduce((acc, el) => acc + el, 0);
// console.log(sum);

// 4. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
// let str = "";
// for (let i = 1; i < 10; i++) {
//   str += -i;
// }
// console.log(str + "-");

// 5. Создать массив `[2, 5, 9, 0, 3, 1, 4]`.
// Запустите цикл, который будет по очереди выводить элементы этого массива в
// консоль до тех пор, пока не встретится элемент со значением 0. После этого
// цикл должен завершить свою работу.
// const array = [2, 5, 9, 0, 3, 1, 4];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] === 0) {
//     break;
//   }
//   console.log(array[i]);
// }

// 1. Создать массив из 10 случайных чисел от 0 до 100 включительно.
// Наобходимо вывести в консоль все числа, которые делятся и на 2, и на 3.

// const array = [];
// for (let i = 0; i < 10; i++) {
//   array.push(Math.floor(Math.random() * 100));
// }
// const newArray = array.filter((el) => el % 6 === 0);
// console.log(array);
// console.log(newArray);

// 2. Дан массив: `[1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]`. Подсчитайте количество
// цифр 3 в этом массиве.
// const array = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let count = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] === 3) {
//     count++;
//   }
// }
// console.log(count);
// const count = array.reduce((acc, el) => (el === 3 ? acc + 1 : acc), 0);
// console.log(count);

// 4. Дан массив: `[1, 2, 3, 4, 5]`.
// С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]
const array = [1, 2, 3, 4, 5];
array.splice(1, 2);
console.log(array);

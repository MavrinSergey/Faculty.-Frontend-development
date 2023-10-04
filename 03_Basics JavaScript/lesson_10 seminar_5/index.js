// 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена
// дней недели. Выведите на экран “Вторник”.
// const week = {
//   1: "Monday",
//   2: "Tuesday",
//   3: "Wednesday",
//   4: "Thursday",
//   5: "Friday",
//   6: "Saturday",
//   7: "Sunday",
// };
// console.log(week[2]);
// console.log(week);

// 2. Создайте объект user с ключами 'name', 'surname', 'age'. Выведите в консоль
// фамилию, имя и возраст одной строкой.
// const user = {
//     userName: "Ivan",
//     surname: "Ivanov",
//     age: 30,
//   };
//   console.log(`${user.userName} ${user.surname} ${user.age}`);
//   // console.log(Object.values(user));

//   // 3. Добавьте в объект user свойство отчество, которое пользователь должен
//   // ввести с клавиатуры.
//   user.patronimic = prompt("Enter patronimic:");
//   console.log(Object.values(user));

//   // 4. Удалите свойство surname.
//   delete user.surname;

// Задание 2:

// 1. Создайте два массива: первый с названиями дней недели, а второй - с их
// порядковыми номерами:
// `['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']`
// `[1, 2, 3, 4, 5, 6, 7]`
// const dayWeek = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// const numDayWeek = [1, 2, 3, 4, 5, 6, 7];

// // 2. С помощью цикла создайте объект, ключами которого будут названия дней,
// // а значениями - их номера.
// const week = {};
// for (let i = 0; i < dayWeek.length; i++) {
//     week[dayWeek[i]] = numDayWeek[i];
// }
// console.log(week);

// 3. Создайте объект: `{x: 1, y: 2, z: 3}`. Переберите этот объект циклом и
// возведите каждый элемент этого объекта в квадрат.
// const obj = { x: 1, y: 2, z: 3 };

// for (const key in obj) {
//     if (Object.hasOwn(obj, key)) {
//         obj[key] = obj[key] ** 2;
//     }
// }
// console.log(obj);

// Задание 3:
// Найдите сумму всех чисел, приведенного объекта.
// const obj = {
//     key1: {
//         key2: 1,
//         key3: 2,
//         key4: 3,
//     },
//     key5: {
//         key6: 4,
//         key7: 5,
//         key8: 6,
//     },
//     key9: {
//         key10: 7,
//         key11: {
//             nem: 40,
//             keq: 45,
//             heq: 56,
//         },
//         key12: 9,
//     },
//     key500: 500,
// };
// const sum = (val) =>
//     val instanceof Object
//         ? Object.values(val).reduce((acc, n) => acc + sum(n), 0)
//         : val;
// const sum = (val) => {
//     if (val instanceof Object) {
//         let summ = 0;
//         for (const key in val) {
//             summ += sum(val[key]);
//         }
//         return summ;
//     }
//     return val;
// };
// console.log(sum(obj));

// Задание 4:
// 1. Создайте объект riddle.
// 2. Добавьте свойства question со значениями(текст загадки) и
// answer (ответ на загадку).
// 3. Создайте метод askQuestion который спрашивает у пользователя вопрос
// question и сравнивает ответ с answer.
// В случае верного ответа, необходимо поздравить пользователя.
// В случае, если пользователь ответил неверно, необходимо подсказать,
// подсказок может быть несколько.
// Если пользователь ответил неверно после всех подсказок, то в консоль
// выводится текст: “вы проиграли”.
// const riddle = {
//     question: "зимой и летом одним цветом",
//     answer: "ёлка",
//     listHint: ["колючая", "зеленая", "не листья а иголки", "пахнет пихтой"],
//     askQuestion() {
//         for (let i = 0; i < this.listHint.length; i++) {
//             const answer = prompt(this.question);
//             if (answer === this.answer) {
//                 return alert("вы угадали");
//             }
//             alert(this.listHint[i]);
//         }
//         alert("проиграли");
//     },
// };
// riddle.askQuestion();

/*
Новый фильм "Мстители" только что вышел! В кассе кинотеатра много людей,
стоящих в огромной очереди. Каждый из них имеет по одной купюре, номиналом
100, 50 или 25 $.
Билет "Мстители" стоит 25 $.
Вася сейчас работает клерком. Он хочет продать билет каждому человеку в этой
очереди.
Может ли Вася продать билет каждому человеку и дать сдачу, если у него
изначально нет денег и он продает билеты строго в порядке очереди?
Верните YES, если Вася сможет продать билет каждому человеку и дать сдачу.
В противном случае верните NO.
*/

function tickets(people) {
    // let moneyVasy = 0;
    const billVasya = {
        25: 0,
        50: 0,
        100: 0,
    };
    for (const billPerson of people) {
        if (billPerson === 25) {
            billVasya[25]++;
        } else if (billPerson === 50) {
            if (billVasya[25] === 0) {
                return "NO";
            }
            billVasya[50]++;
            billVasya[25]--;
        } else if (billPerson === 100) {
            if (billVasya[50] >= 1 && billVasya[25] >= 1) {
                billVasya[100]++;
                billVasya[50]--;
                billVasya[25]--;
            } else if (billVasya[25] >= 3) {
                billVasya[100]++;
                billVasya[25] -= 3;
            } else {
                return "NO";
            }
        }
    }
    return "YES";
}
console.log(tickets([25, 50, 25, 100])); // "YES"
console.log(tickets([25, 25, 25, 100])); // "YES"
console.log(tickets([25, 25, 50])); // "YES"
console.log(tickets([25, 100])); // "NO" (У Васи нет сдачи со 100)
console.log(tickets([25, 25, 50, 50, 100])); // "NO"
console.log(tickets([25, 25, 25, 25, 25, 100, 100])); // "NO"
console.log(tickets([25, 25, 50, 100, 25, 50, 25, 100, 25, 25, 25, 100])); // "YES"
console.log(tickets([25, 25, 25, 100, 25, 25, 50, 100, 25, 25, 25, 100])); // "YES"
console.log(
    tickets([25, 25, 25, 25, 25, 25, 25, 50, 50, 50, 100, 100, 100, 100])
); // => "NO"
console.log(tickets([25, 25, 50])); // "YES"
console.log(tickets([25, 100])); // "NO"
console.log(tickets([25, 25, 50, 50, 100])); // "NO"
console.log(tickets([25, 50, 50])); // "NO"
console.log(tickets([25, 25, 25, 25, 25, 50, 100])); // "YES"
console.log(tickets([25, 100])); // "NO"

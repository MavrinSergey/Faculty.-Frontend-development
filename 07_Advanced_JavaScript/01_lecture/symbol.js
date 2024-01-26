// let buddies = {
//     [Symbol('Жучка')]: 'Жучка',
//     [Symbol('Мурка')]: 'Мурка',
//     [Symbol('Таракашка')]: 'Таракашка',
//     elephant: 'Слон'
// }
//
// console.log(buddies)
//
// let newBuddies = {};
// Object.assign(newBuddies, buddies); // Object.assign скопирует все свойства, в том числе и символьные
//
// console.log(newBuddies)


// // ------------------ Symbol.for --------
// let id = Symbol.for("id"); // читаем сивол из глобального реестра если его не было то создаем
// let idAgain = Symbol.for("id"); // читаем если он есть то записываем в другую переменную
// console.log(id === idAgain)


const string = "Hello";
for (const str of string) {
    console.log(str)
}
"use strict"
// Класс должен содержать приватное свойство #balance, которое инициализируется значением 0 и представляет собой
// текущий баланс счета.
//     Реализуйте геттер balance, который позволит получить информацию о текущем балансе.
//     Реализуйте метод deposit(amount), который позволит вносить средства на счет. Убедитесь, что сумма внесения не
//     отрицательная; в противном случае выбрасывайте ошибку.
//     Реализуйте метод withdraw(amount), который позволит снимать средства со счета. Убедитесь, что сумма для снятия
//     неотрицательная и что на счете достаточно средств; в противном случае выбрасывайте ошибку.
//     Реализуйте конструктор, который принимает начальный баланс в качестве аргумента. Убедитесь, что начальный баланс
//     не отрицательный; в противном случае выбрасывайте ошибку.
// class Account {
//     #balance = 0
//     constructor(balance) {
//         if (typeof balance !== "number" || balance < 0) {
//             throw new Error("Баланс не может быть отрицательна");
//         }
//         this.#balance = balance;
//     }
//     get balance() {
//         return this.#balance;
//     }
//     deposit(amount) {
//         if (typeof amount !== "number" || amount < 0) {
//             throw new Error("Сумма не может быть отрицательна")
//         }
//         return this.#balance +=  amount;
//     }
//     withdraw(amount) {
//         if (typeof amount !== "number" || amount < 0) {
//             throw new Error("Сумма не может быть отрицательна")
//         }
//         if (amount > this.#balance) {
//             throw new Error("Сумма не может быть больше баланса")
//         }
//         return this.#balance -= amount;
//     }
// }
//
// const sergeyAcc = new Account(1500);
// console.log(sergeyAcc);
// console.log(sergeyAcc.balance);
// console.log(sergeyAcc.deposit(1500));
// console.log(sergeyAcc.withdraw(21000));

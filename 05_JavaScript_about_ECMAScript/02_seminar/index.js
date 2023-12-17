// Создайте объект Person, представляющий человека, с
// следующими свойствами: name, age и gender. Добавьте
// также методы introduce и changeName. Метод introduce
// должен выводить информацию о человеке, включая его
// имя, возраст и пол. Метод changeName должен изменять
// имя человека на новое заданное значение.
// const Person ={
//     name: "",
//     age: "",
//     gender: "",
//     introduce: function () {
//         console.log(`My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`);
//     },
//     changeName: function (newName) {
//         this.name = newName;
//     },
// }
//
// Person.name = "John";
// Person.age = 25;
// Person.gender = "male";
// Person.introduce(); // Ожидаемый результат: My name is John. I'm 25 years old and I identify as male.
// Person.changeName("Mike");
// Person.introduce(); // Ожидаемый результат: My name is John. I'm 25 years old and I identify as male.


// 1. Создайте объект Animal со свойством name и методом eat(), который
// выводит сообщение о том, что животное ест. Создайте объект Dog со
// свойством name и методом bark(), который выводит сообщение о
// том, что собака лает. Используйте одалживание метода eat() из
// объекта Animal для объекта Dog, чтобы вывести сообщение о том,
//     что собака ест.
// Одалживание метода eat() из объекта Animal к объекту Dog


const Animal = {
    name: "",
    eat: function () {
        console.log(`${this.name} is eating.`)
    }
}
const Dog = {
    name: "",
    bark: function () {
        console.log(`${this.name} is barking.`)
    }
}
Animal.name = "barsik";
Dog.name = "bobik";
Dog.eat = Animal.eat;
Dog.eat(); // Вывод: Rex is eating.

// Задание 3 (call, apply 20 минут)
// 1. Создайте объект calculator с методами add(), subtract() и multiply(),
//      которые выполняют соответствующие математические операции над
//      двумя числами. Используйте методы call и apply для вызова этих
//      методов с передачей аргументов.

const Calculator = {
    add: function () {
        return this.num1 + this.num2;
    },
    subtract: function () {
        return a - b;
    },
    multiple: function (a, b) {
        return a * b;
    }
}

const calc = {
    num1: 10,
    num2: 18
}

console.log(Calculator.add.call(calc));
console.log(Calculator.subtract.apply(calc, [calc.num1, calc.num2]));
console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2

// Создайте класс Person, который имеет свойства name и age, а также
// метод introduce(), который выводит сообщение с представлением
// имени и возраста персоны.

class Person {
    name = "";
    age = "";
    gender = "";

    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    introduce() {
        console.log(`My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`);
    };

    changeName(newName) {
        this._name = newName;
    };
}

const john = new Person("John", 25, "male");
john.introduce(); // Ожидаемый результат: My name is John. I'm 25 years old and I identify as male.

// Создайте класс BankAccount, который представляет банковский счет.
// У него должны быть свойства accountNumber (номер счета) и balance
// (баланс), а также методы deposit(amount) для пополнения счета и
// withdraw(amount) для снятия денег со счета. Класс должен иметь
// также статическое свойство bankName, которое содержит название
// банка.
class BankAccount{
    static bankName = "HSBC";
    #accaccountNumber = "";
    #balance = 0;
    constructor(accountNumber, balance) {
        this.accaccountNumber = accountNumber
        this.#balance = balance
    }
    deposit(amount) {
        this.#balance += amount;
        console.log(`${BankAccount.bankName}: Deposited ${amount} into account ${this.accaccountNumber}. New balance: ${this.#balance}`)
    }
    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`${BankAccount.bankName}: Withdrawn ${amount} from account ${this.accaccountNumber}. New balance: ${this.#balance}`)
        }
        else {
            console.log(`${BankAccount.bankName}: Insufficient funds in account ${this.accaccountNumber}`)
        }
    }
}

class Deposit extends BankAccount {

}

const account1 = new BankAccount("1234567890", 1000);
const account2 = new BankAccount("1234567890", 1000);
account2.balance = 4500
console.log(account2.balance)
console.log(account1)
console.log(account2)
account1.deposit(500); // Вывод: Deposited 500 into account 1234567890. New balance: 1500
account1.withdraw(200); // Вывод: Withdrawn 200 from account 1234567890. New balance: 1300
account1.withdraw(1500); // Вывод: Insufficient funds in account 1234567890

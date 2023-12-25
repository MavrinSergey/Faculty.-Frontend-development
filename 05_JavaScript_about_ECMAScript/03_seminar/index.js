'use strict'
// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.


// const proto = getPrototypeChain({name: 'John'})
// console.log(proto);
//
// function getPrototypeChain(obj) {
//     let currentObject = obj;
//     const arrObj = [currentObject];
//     while (currentObject !== null) {
//         currentObject = Object.getPrototypeOf(currentObject);
//         arrObj.push(currentObject)
//     }
//     return arrObj;
// }
// Создайте класс Animal, который будет представлять животное. У
// класса Animal должны быть следующие свойства и методы:
//     ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
//     Создайте подкласс Dog, который наследует класс Animal. Для
// подкласса Dog добавьте дополнительное свойство и метод:
//     ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// принесла мяч.".
// Задание 5 (Пример использования)

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`Животное ${this.name} издает звук.`);
    };
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    fetch() {
        console.log(`Собака ${this.name}, пароды ${this.breed} принесла мяч.`)
    }
}

const animal1 = new Animal("Животное");
animal1.speak(); // Вывод: Животное издает звук.
const dog1 = new Dog("Бобик", "Дворняжка");
dog1.speak(); // Вывод: Животное Бобик издает звук.
console.log(dog1.breed); // Вывод: Дворняжка
dog1.fetch(); // Вывод: Собака Бобик принесла мяч.


// Создать класс "Калькулятор" с приватными полями "последний результат" и "текущее значение".
// Класс должен иметь публичные методы "сложить", "вычесть", "умножить" и "разделить", которые
// будут изменять значение текущего значения в соответствии с выбранной операцией.
// Также класс должен иметь статическое поле "точность", которое будет задавать количество
// знаков после запятой при выводе результата.

// 1 + 2 = 3
// 3 + 3 = 6
class Calculator {
    #lastResult = 0;
    #presentValue = 0;
    static accuracy = 2;

    #round(num) {
        return num.toFixed(Calculator.accuracy)
    }

    getPresentValue() {
        return this.#round(this.#presentValue);
    }

    sum(num) {
        this.#lastResult = this.#presentValue;
        this.#presentValue = this.#presentValue + num;
    }

    difference(num) {
        this.#lastResult = this.#presentValue;
        this.#presentValue -= num;
    }

    multiplication(num) {
        this.#lastResult = this.#presentValue;
        this.#presentValue *= num;
    }

    division(num) {
        if (num === 0) {
            console.error(`На ноль делить нельзя`);
        } else {

            this.#lastResult = this.#presentValue;
            this.#presentValue /= num;
        }
    }
}

const Canc = new Calculator();
Canc.sum(1);
console.log(Canc.getPresentValue());
Canc.division(1);
console.log(Canc.getPresentValue());
Canc.sum(3);
console.log(Canc.getPresentValue());


// Создать класс "Пользователь" с приватными полями "имя", "возраст" и "электронная почта".
// Класс должен иметь публичные методы "изменить имя", "изменить возраст" и "изменить электронную почту",
// которые будут изменять соответствующие поля объекта. Также класс должен иметь статическое поле "максимальный возраст",
// которое будет задавать максимально допустимый возраст для всех создаваемых объектов.

class User {
    #name;
    #age;
    #email;
    static #maxAge = 120;

    constructor(name, age, email) {
        this.setAge(age);
        this.#email = email;
        this.#name = name;
        // this.setName(name);
        // this.setAge(age);
        // this.setEmail(email);
    }

    setName(value) {
        this.#name = value;
    }

    setAge(value) {
        if (value > User.#maxAge) {
            console.error("Привышен максимально допустимы возраст, пришлите копию паспорта");
        } else {
            this.#age = value
        }
    }

    setEmail(value) {
        this.#email = value;
    }
}

const Bob = new User('Bob', 125, "email");
console.log(Bob)
Bob.setAge(24);
console.log(Bob)

// 3. Создать класс "Товар" с приватными полями "название", "цена" и "количество".
// Класс должен иметь публичные методы "изменить цену", "изменить количество" и "получить стоимость",
// которые будут изменять соответствующие поля объекта и возвращать стоимость товара соответственно.
// Также класс должен иметь статическое поле "максимальное количество", которое будет задавать максимально
// допустимое количество товара для всех создаваемых объектов.
class Goods{
    #name;
    #price;
    #quantity;
    static maxQuantity = 1000;

    constructor(name, price, quantity) {
        this.#name = name;
        this.#price = price;
        this.setQuantity(quantity);
    }


    getName() {
        return this.#name;
    }

    getPrice() {
        return this.#price;
    }

    getQuantity() {
        return this.#quantity;
    }


    setQuantity(value) {
        if(value > Goods.maxQuantity){
            console.error(`max quantity reached (${Goods.maxQuantity})`)
        } else {
            this.#quantity = value;
        }
    }
}

const good1 = new Goods('BMW', 25000, 1);
const good2 = new Goods('Matches', 0.1, 2000);
console.log(good1);
console.log(good2);
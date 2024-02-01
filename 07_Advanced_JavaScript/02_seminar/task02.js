// У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум
// аккаунте, а некоторые - нет. Ваша задача - создать структуру классов для этих пользователей
// и функцию для получения информации о наличии премиум аккаунта, используя Опциональную цепочку
// вызовов методов, оператор нулевого слияния и instanceof.
// Создайте базовый класс User с базовой информацией (например, имя и фамилия).
// Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс PremiumUser
// должен иметь свойство premiumAccount (допустим, дата истечения срока действия), а у RegularUser
// такого свойства нет.
//     Создайте функцию getAccountInfo(user), которая принимает объект класса User и возвращает
//     информацию о наличии и сроке действия премиум аккаунта, используя Опциональную цепочку вызовов
//     методов и оператор нулевого слияния.
//     В функции getAccountInfo используйте instanceof для проверки типа переданного пользователя и дайте
//     соответствующий ответ.
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class PremiumUser extends User {
    constructor(firstName, lastName, premiumAccount) {
        super(firstName, lastName);
        this.premiumAccount = premiumAccount;
    }
}
class RegularUser extends User {
    constructor(firstName, lastName) {
        super(firstName, lastName);
    }
}
function getAccountInfo(user) {
    if (!(user instanceof User)) {
        return null;
    }
    if (user instanceof PremiumUser) {
        return user.premiumAccount;
    } else if (user instanceof RegularUser) {
        return "this user is Regular";
    }
    return "Unknown user";
}
const user1 = new User("ivan", "ivanov");
const user2 = new RegularUser("sergey", "sergeev");
const user3 = new PremiumUser("andrey", "andreev", "05.05.2024");
const user4 = 123;
console.log(getAccountInfo(user1));
console.log(getAccountInfo(user2));
console.log(getAccountInfo(user3));
console.log(getAccountInfo(user4));
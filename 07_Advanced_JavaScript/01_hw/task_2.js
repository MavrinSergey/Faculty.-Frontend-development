let specializationCooks = new Map();
specializationCooks.set("Виктор", "Пицца")
specializationCooks.set("Ольга", "Суши")
specializationCooks.set("Дмитрий", "Десерты")

console.log(specializationCooks)


let dishesCooks = new Map();
dishesCooks.set("Пиццу \"Маргарита\"", "Виктор")
dishesCooks.set("Пиццу \"Пепперони\"", "Виктор")
dishesCooks.set("Суши \"Филадельфия\"", "Ольга")
dishesCooks.set("Суши \"Калифорния\"", "Ольга")
dishesCooks.set("Тирамису", "Дмитрий")
dishesCooks.set("Чизкейк", "Дмитрий")

console.log(dishesCooks)


let orders = new Map();
orders.set({name: "Алексей"}, ["Пиццу \"Пепперони\"", "Тирамису"])
orders.set({name: "Мария"}, ["Суши \"Калифорния\"", "Пиццу \"Маргарита\""])
orders.set({name: "Ирина"}, ["Чизкейк"])

console.log(orders)

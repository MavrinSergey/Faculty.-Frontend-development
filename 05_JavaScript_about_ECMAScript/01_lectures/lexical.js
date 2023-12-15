debugger
const houses = [];
let i = 0;
while (i < 10) {
    let houseNumber = i; // Здесь мы создаём блочную переменную,
    // которая сохранит значение i для конкретной итерации цикла, и
    // именно её значение попадёт в лексическое окружение функции house.
        let house = function () { // функция «дом»
        console.log(houseNumber); // выводит номер дома
    };
    houses.push(house);
    i++;
}
houses[0](); // 0 — у нулевого дома номер 0
houses[7](); // 7 — и у седьмого дома номер 7

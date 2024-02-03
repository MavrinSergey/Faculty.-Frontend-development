"use strict";

// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31.
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

const dayNumber = Number.parseInt(prompt("Введите день месяца: "));

if (dayNumber > 0 && dayNumber <= 10) {
    console.log(`Число ${dayNumber} попадает в 1-ую декаду месяца."`);
} else if (dayNumber > 10 && dayNumber <= 20) {
    console.log(`Число ${dayNumber} попадает во 2-ую декаду месяца."`);
} else if (dayNumber > 20 && dayNumber <= 31) {
    console.log(`Число ${dayNumber} попадает во 3-ию декаду месяца."`);
} else {
    console.log(`Неверное значение"`);
}

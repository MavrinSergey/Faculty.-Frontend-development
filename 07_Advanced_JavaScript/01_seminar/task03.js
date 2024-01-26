"use strict"
// Текст задания:
//     Представьте себе ситуацию: у нас есть группа студентов, и мы хотим
//     отследить, кто из них посетил какие уроки и кто из преподавателей
//     вёл данные уроки.
//     Map будет использоваться для хранения соответствия между уроком и
//     преподавателем.
//     Set будет использоваться для хранения уникальных уроков, которые
//     посетил каждый студент.
// 1. Map: урок => преподаватель
let lessons = new Map();
lessons.set("Математика", "Смирнов")
lessons.set("История", "Иванова")
// "Математика", "Смирнов"
// "История", "Иванова"


// 2. Map: студент => Set уроков
function Student(name) {
    this.name = name;
    this.lessons = new Set;
    this.addedLesson = function (lesson)
    {
        this.lessons.add(lesson)
    }
}

const arrayPetrov = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Petrov = new Student("Петров")
const Ivanov = new Student("Иванов")
arrayPetrov.forEach(item => {
    Petrov.addedLesson(item)
    Ivanov.addedLesson(item)
})

let Students = new Map();
Students.set(Petrov.name, Petrov.lessons)
Students.set(Ivanov.name, Ivanov.lessons)


// Проверка:
console.log(`Преподаватель по Математике: ${lessons.get("Математика")}`); // Смирнов
console.log(`Уроки Ивана: тут вывод уроков ивана ${Students}`); // Математика, История
console.log(Students)
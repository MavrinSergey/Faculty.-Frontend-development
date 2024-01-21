// import calculateResultSum from "./calc.js";
require('colors');

const calculateResultSum = require("./calc.js")

const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);

const text = "Общая стоимость покупок: " + total.toString().green + " рублей".yellow;
console.log(total > 50 ? text.red : text.green);
"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

function printChar(str, num) {
    let res = "";
    for (let i = 0; i < num; i++) {
        res += str;
        console.log(res);
    }
}
printChar("x", 20);

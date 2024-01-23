const fs = require("fs");
const path = require("path");

function makeCounter(fileName) {
    const filePath = path.join(__dirname, fileName);
    let count;
    try {
        count = JSON.parse(fs.readFileSync(filePath));

    } catch (e) {
        count = {
            countPage: 0,
        }
    }

    return function () {
        const objJson = JSON.stringify(count, null, 2);
        fs.writeFileSync(filePath, objJson);
        return ++count.countPage;
    };
}

let counterHome = makeCounter("home.json");
let counterAbout = makeCounter("about.json");

module.exports = {counterHome, counterAbout};



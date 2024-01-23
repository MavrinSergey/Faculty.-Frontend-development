function makeCounter() {
    let currentCount = 1;

    return function() {
        return currentCount++;
    };
}

let counterHome = makeCounter();
let counterAbout = makeCounter();

module.exports = { counterHome, counterAbout };
// import NP from "number-precision";
const NP = require("number-precision");

function calculateResultSum(purchases, discount) {
    let total = purchases.reduce((acc, pur) => NP.plus(acc, pur), 0);

    total = NP.times(total, discount);
    return total;
}
module.exports = calculateResultSum;
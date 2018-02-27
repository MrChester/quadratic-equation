const longAddition = require('./longAddition');
const longSubtraction = require('./longSubtraction');
const longMultiplication = require('./longMultiplication');
const longDivision = require('./longDivision');
const sqrtFunction = require('./sqrtFunction');

module.exports = function solveEquation(equation) {
    let resArr = [];
    let a, b, c, x1, x2, x, discriminant;

    discriminant = Math.sqrt(b * b - 4 * a * c);

    if (d > 0) {
        x1 = (-b + discriminant) / 2 * a;
        x2 = (-b - discriminant) / 2 * a;
        resArr.push(x1);
        resArr.push(x2);
    }
    if (d === 0) {
        x = -b / 2 * a;
    }


    return resArr.sort();
}
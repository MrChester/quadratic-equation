const longAddition = require('./longAddition');
const longSubtraction = require('./longSubtraction');
const longMultiplication = require('./longMultiplication');
const longDivision = require('./longDivision');
const sqrtFunc = require('./sqrtFunction');

module.exports = function solveEquation(equation) {
    var resArr = [],
        a, b, c, x1, x2, x, discriminant,
        regexp = /-\d+|\d+/gi,
        regSpaces = /\s+|\b\^\w/gi,
        tempArr = equation.replace(regSpaces, ''),
        numArr = tempArr.match(regexp);

    a = numArr[0];
    b = numArr[1];
    c = numArr[2];

    console.log(a);
    console.log(b);
    console.log(c);

    discriminant = sqrtFunc(longMultiplication(b, b) - longMultiplication(4, longMultiplication(a, c)));

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
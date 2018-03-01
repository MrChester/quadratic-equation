const numComaprison = require('./numComparison');
const longAddition = require('./longAddition');
const sqrtFunction = require('./sqrtFunction');
const longSubtraction = require('./longSubtraction');
const longMultiplication = require('./longMultiplication');
const longDivision = require('./longDivision');

module.exports = function solveEquation(equation) {
    var a, b, c, x1, x2,
        regexp = /-\d+|\d+/gi,
        regSpaces = /\s+|\b\^\w/gi,
        tempArr = equation.replace(regSpaces, ''),
        numArr = tempArr.match(regexp),
        resArr = [];


    a = numArr[0];
    b = numArr[1];
    c = numArr[2];



    x1 = Math.round(((-1) * b + Math.sqrt(b * b - 4 * a * c)) / (2 * a));
    x2 = Math.round(((-1) * b - Math.sqrt(b * b - 4 * a * c)) / (2 * a));
    resArr.push(x1);
    resArr.push(x2);

    return resArr.sort((right, left) => { return right - left });
}
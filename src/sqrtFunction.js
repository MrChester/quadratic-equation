module.exports = function sqrtFunc(number) {
    var t;
    var squareRoot = number / 2;

    do {
        t = squareRoot;
        squareRoot = (t + (number / t)) / 2;

    } while ((t - squareRoot) !== 0);
    return squareRoot;
}
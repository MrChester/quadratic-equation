module.exports = function longDivision(strNum1, strNum2) {
    var numLength = strNum1.length,
        remainder = 0,
        answer = '',
        i = 0;
    while (i < numLength + 3) {
        var digit = i < numLength ? parseInt(strNum1[i]) : 0;
        if (i == numLength) {
            answer = answer + ".";
        }

        answer = answer + Math.floor((digit + (remainder * 10)) / strNum2);
        remainder = (digit + (remainder * 10)) % strNum2;
        i++;
    }
    return parseFloat(answer);
}
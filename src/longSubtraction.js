const numComaprison = require('./numComparison');

module.exports = function longSubtraction(strNum1, strNum2) {
    let firstNumArr = strNum1.toString().replace(/-/g, '').split("").reverse(),
        secondNumArr = strNum2.toString().replace(/-/g, '').split("").reverse(),
        firstNumArrLen = firstNumArr.length,
        secondNumArrLen = secondNumArr.length,
        bigNumArr, smallNumArr,
        resArr = [],
        sign = -1,
        compareRes = numComaprison(strNum1, strNum2);

    if (compareRes === 1) {
        var len = firstNumArr.length;
        bigNumArr = firstNumArr;
        smallNumArr = secondNumArr;
    } else {
        len = secondNumArr.length;
        bigNumArr = secondNumArr;
        smallNumArr = firstNumArr;
    }

    for (let i = 0; i < len; i++) {
        var temp;
        if (+bigNumArr[i] < Number(smallNumArr[i] || 0)) {
            +bigNumArr[i + 1]--;
            temp = 10 + Number(bigNumArr[i]) - Number(smallNumArr[i] || 0);
        } else {
            temp = Number(bigNumArr[i]) - Number(smallNumArr[i] || 0);
        }
        resArr.push(temp);
    }
    return resArr.reverse().join('');
}
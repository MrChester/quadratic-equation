module.exports = function numComaprison(strNum1, strNum2) {
    let firstNumArr = strNum1.toString().replace(/-/g, '').split("").reverse(),
        secondNumArr = strNum2.toString().replace(/-/g, '').split("").reverse(),
        firstNumArrLen = firstNumArr.length,
        secondNumArrLen = secondNumArr.length,
        flag = 3,
        len = firstNumArr.length;

    if (firstNumArrLen > secondNumArrLen) {
        flag = 1;
        len = firstNumArrLen;
    } else if (secondNumArrLen > firstNumArrLen) {
        flag = 2;
        len = secondNumArrLen;
    } else {
        for (let i = 0; i < len;) {
            if (firstNumArr[i] > secondNumArr[i]) {
                flag = 1;
                break;
            }
            if (secondNumArr[i] > firstNumArr[i]) {
                flag = 2;
                break;
            }
        }
    }

    return flag;
}
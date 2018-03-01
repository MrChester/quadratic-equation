module.exports = function longAddition(strNum1, strNum2) {
    let firstNumArr = strNum1.toString().replace(/-/g, '').split("").reverse(),
        secondNumArr = strNum2.toString().replace(/-/g, '').split("").reverse(),
        len_a = firstNumArr.length,
        len_b = secondNumArr.length,
        len = Math.max(len_a, len_b),
        accuracy = 0,
        resArr = [];

    for (let i = 0; i < len; i++) {
        let temp = Number(firstNumArr[i] || 0) + Number(secondNumArr[i] || 0) + accuracy;
        accuracy = Math.floor(temp / 10);
        resArr.push(temp % 10);
    }
    if (accuracy !== 0) {
        resArr.push(accuracy);
    }
    return resArr.reverse().join('');
}
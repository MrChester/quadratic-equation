module.exports = function longMultiplication(strNum1, strNum2) {
    let firstNumArr = strNum1.split("").reverse();
    let firstNumArrLen = firstNumArr.length;
    let secondNumArr = strNum2.toString().split("").reverse();
    let secondNumArrLen = secondNumArr.length;
    let resArr = [];

    for (let i = 0; i < firstNumArrLen; i++) {
        for (let j = 0; j < secondNumArrLen; j++) {
            let currentNdx = i + j;

            resArr[currentNdx] = firstNumArr[i] * secondNumArr[j] + (currentNdx >= resArr.length ? 0 : resArr[currentNdx]);

            if (resArr[currentNdx] > 9) {
                resArr[currentNdx + 1] = Math.floor(resArr[currentNdx] / 10) + (currentNdx + 1 >= resArr.length ? 0 : resArr[currentNdx + 1]);
                resArr[currentNdx] -= Math.floor(resArr[currentNdx] / 10) * 10;
            }
        }
    }
    return resArr.reverse().join("");
}
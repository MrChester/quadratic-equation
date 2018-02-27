module.exports = function longMultiplication(strNum1, strNum2) {
    let firstNumArr = strNum1.split("").reverse();
    let firstNumArrLen = firstNumArr.length;
    let secondNumArr = strNum2.toString().split("").reverse();
    let secondNumArrLen = secondNumArr.length;
    let resArr = [];
    let resArrLen = resArr.length;

    for (let i = 0; i < firstNumArrLen; i++) {
        for (let j = 0; j < secondNumArrLen; j++) {
            let currentNdx = i + j;

            if (!(currentNdx >= resArrLen)) {
                resArr[currentNdx] = firstNumArr[i] * secondNumArr[j] + resArr[currentNdx];
            } else {
                resArr[currentNdx] = firstNumArr[i] * secondNumArr[j];
            }

            if (resArr[currentNdx] > 9) {
                if (!((currentNdx + 1) >= resArrLen)) {
                    resArr[currentNdx + 1] = Math.floor(resArr[currentNdx] / 10) + resArr[currentNdx + 1];
                } else {
                    resArr[currentNdx + 1] = Math.floor(resArr[currentNdx] / 10);
                }

                resArr[currentNdx] -= resArr[currentNdx] % 10;
            }
        }
    }
    return resArr.reverse().join();
}
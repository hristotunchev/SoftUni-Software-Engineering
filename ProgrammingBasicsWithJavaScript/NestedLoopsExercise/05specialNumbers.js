function specialNumbers(input) {
    let num = Number(input[0]);
    let startNum = 1111;
    let endNum = 9999;
    let printLine = "";
    for (let i = startNum; i <= endNum; i++) {
        let currentNum = "" + i;
        let j = 0;
        let tempNum = "";
        while (j < currentNum.length) {
        let currentDigit = Number(currentNum.charAt(j));
        if (num % currentDigit === 0) {
            tempNum += currentDigit;
            }
        j++
        }
        tempNum = Number(tempNum);
        if (tempNum >= startNum && tempNum <= endNum) {
        printLine += `${tempNum} `;
            }
    }
console.log(printLine);
}
specialNumbers(["11"])
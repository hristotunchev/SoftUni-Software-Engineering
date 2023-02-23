function luckyNumbers(input) {
    let num = Number(input[0]);
    let startNum = 1000;
    let endNum = 9999;
    let printLine = "";
    for(let i = startNum; i <= endNum; i++) {
        let currentNum = "" + i;
        let j = 0;
        let tempNumOne = 0; 
        let tempNumTwo = 0;
        while (j < currentNum.length) {
            let currentDigit = Number(currentNum.charAt(j));
            if (currentDigit === 0) {
                j++;
                break;
            }
            if (j < 2) {
                tempNumOne += currentDigit;
            } else {
                tempNumTwo += currentDigit;
            }
            if (j === 3 && tempNumOne === tempNumTwo && num % tempNumOne === 0) {
                printLine += `${currentNum} `
            }
            j++;
        }
    }
console.log(printLine)
}
luckyNumbers(["3"])
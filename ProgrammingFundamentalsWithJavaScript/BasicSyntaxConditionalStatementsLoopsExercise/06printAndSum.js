function printAndSum(startNum, endNum) {
    let sum = 0;

    let printLine = '';

    for (let currentNum = startNum; currentNum <= endNum; currentNum++) {
        sum += currentNum;

        if (currentNum === endNum) {
            printLine += `${currentNum}`;
        } else {
            printLine += `${currentNum} `;
        }
    }

    console.log(printLine);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10)
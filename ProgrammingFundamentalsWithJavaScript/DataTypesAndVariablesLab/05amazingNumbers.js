function amazingNumbers(num) {
    let numToString = String(num);

    let result = 0;

    for (let i = 0; i < numToString.length; i++) {
        let currentDigit = Number(numToString[i]);
        result += currentDigit;
    }

    let resultToString = String(result);
    let isAmazing = false;

    for (let i = 0; i < resultToString.length; i++) {
        let currentDigit = Number(resultToString[i]);
        if (currentDigit === 9) {
            isAmazing = true;
        }
    }

    if (isAmazing) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}
amazingNumbers(583472)
amazingNumbers(999)
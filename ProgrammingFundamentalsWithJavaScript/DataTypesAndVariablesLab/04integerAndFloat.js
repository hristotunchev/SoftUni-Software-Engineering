function integerAndFloat(num1, num2, num3) {
    let result = num1 + num2 + num3;

    let resultToString = result.toString();

    let isFloat = false;

    for (let i = 0; i < resultToString.length; i++) {
        let currentDigit = resultToString[i];
        if (currentDigit === ".") {
            isFloat = true;
        }
    }

    if (isFloat) {
        console.log(`${result} - Float`);
    } else {
        console.log(`${result} - Integer`);
    }
}
integerAndFloat(9, 100, 1.1)
function sumDigits(num) {
    let numToString = String(num);

    let result = 0;

    for (let i = 0; i < numToString.length; i++) {
        let currentDigit = Number(numToString[i]);
        result += currentDigit;
    }

    console.log(result);
}
sumDigits(245678)
function oddAndEvenSum(number) {
    let numberToString = String(number);

    let evenSum = 0;
    let oddSum = 0;

    for (let digit of numberToString) {
        let currentDigit = Number(digit);

        if (currentDigit % 2 === 0) {
            evenSum += currentDigit;
        } else {
            oddSum += currentDigit;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435)
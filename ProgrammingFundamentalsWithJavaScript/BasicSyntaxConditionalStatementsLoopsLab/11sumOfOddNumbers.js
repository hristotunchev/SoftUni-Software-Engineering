function sumOfOddNumbers(num) {
    let sum = 0;

    numCounter = 0;

    for (let i = 1; i <= 100; i++) {
        if (numCounter >= num) {
            break;
        }
        if (i % 2 !== 0) {
            sum += i;
            numCounter++;
            console.log(i);
        }
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5)
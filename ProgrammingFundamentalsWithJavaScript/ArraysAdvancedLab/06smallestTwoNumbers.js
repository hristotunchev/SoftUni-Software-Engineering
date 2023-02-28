function smallestTwoNumbers(inputArr) {
    let sortedNumbers = inputArr.sort((a, b) => a - b);

    let result = sortedNumbers.slice(0, 2);

    console.log(result.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5])
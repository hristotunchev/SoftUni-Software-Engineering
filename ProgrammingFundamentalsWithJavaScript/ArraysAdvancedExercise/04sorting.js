function sorting(inputArr) {
    let result = [];

    let sorted = inputArr.sort((a, b) => b - a);

    for (let i = sorted.length / 2; i > 0; i--) {
        result.push(sorted.shift());
        result.push(sorted.pop());

        sorted = sorted.sort((a, b) => b - a);
    }

    console.log(result.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
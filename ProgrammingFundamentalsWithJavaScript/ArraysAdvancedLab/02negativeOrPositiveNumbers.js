function negativeOrPositiveNumbers(inputArray) {
    let result = [];

    for (let el of inputArray) {
        if (Number(el) < 0) {
            result.unshift(el);
        } else {
            result.push(el);
        }
    }

    console.log(result.join('\n'));
}
negativeOrPositiveNumbers(['7', '-2', '8', '9'])
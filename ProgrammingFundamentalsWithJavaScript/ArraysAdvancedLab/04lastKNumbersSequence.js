function lastKNumbersSequence(nNumber, kNumber) {
    let result = [1];

    for (let i = 0; i < nNumber - 1; i++) {
        let sequenceK = result.slice(-kNumber);
        let sum = 0;

        for (let el of sequenceK) {
            sum += el;
        }

        result.push(sum);
    }

    console.log(result.join(' '));
}
lastKNumbersSequence(6, 3)
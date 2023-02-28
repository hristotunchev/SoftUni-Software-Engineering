function bombNumbers(sequence, bombNumberAndPower) {
    let bombNumber = bombNumberAndPower[0];
    let powerNumber = bombNumberAndPower[1];

    let result = 0;

    while (sequence.includes(bombNumber)) {
        let bombIndex = sequence.indexOf(bombNumber);
        let startIndex = bombIndex - powerNumber;

        let deleteCount = powerNumber * 2 + 1;

        if (startIndex < 0) {
            deleteCount += startIndex;
            startIndex = 0;
        }

        let removed = sequence.splice(startIndex, deleteCount);
    }

    sequence.forEach(el => result += el);
    console.log(result);
}
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])

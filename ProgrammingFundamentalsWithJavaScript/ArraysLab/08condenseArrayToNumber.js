function condenseArrayToNumber(numbers) {
    let condensed = [];

    for (let element of numbers) {
        condensed.push(element);
    }

    while (condensed.length > 1) {
        let tempArr = [];

        for (let i = 0; i < condensed.length - 1; i++) {
            tempArr[i] = condensed[i] + condensed[i + 1];
        }

        condensed = tempArr;
    }
    
    console.log(condensed.toString());
}
condenseArrayToNumber([2, 10, 3])
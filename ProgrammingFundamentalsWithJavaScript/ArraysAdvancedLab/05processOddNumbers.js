function processOddNumbers(inputArr) {
    //let oddPositionsOfInput = [];
    //let inputL = inputArr.length;

    //for (let i = 0; i < inputL; i++) {
    //    if (i % 2 === 1) {
    //        oddPositionsOfInput.push(inputArr[i]);
    //    }
    //}

    //let result = oddPositionsOfInput.map(x => x * 2).reverse();

    let filteredElements = inputArr.filter((x, i) => i % 2 === 1);

    let result = filteredElements.map(x => x * 2).reverse();

    console.log(result.join(' '));
}
processOddNumbers([10, 15, 20, 25])
function firstAndLastKNumbers(inputArray) {
    let kNumber = Number(inputArray.shift());

    let firstK = inputArray.slice(0, kNumber);
    let lastK = inputArray.slice(-kNumber);
    
    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}
firstAndLastKNumbers([2, 7, 8, 9])
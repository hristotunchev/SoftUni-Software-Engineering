function sumFirstAndLast(inputArray) {
    let firstEl = inputArray.shift();
    let lastEl = inputArray.pop();
    let result = Number(firstEl) + Number(lastEl);
    return result;
}
console.log(sumFirstAndLast(['20', '30', '40']))
//DEMO Solution, bad practice to change the input!
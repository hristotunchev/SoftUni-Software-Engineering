function operationsBetweenNumbers(input) {
    const numOne = Number(input[0]);
    const numTwo = Number(input[1]);
    const operator = input[2];

    let result = 0;
    let type = "";

    switch (operator) {
        case "+": result = numOne + numTwo;
            if (result % 2 === 0) {
                type = "even";
            } else {
                type = "odd";
            }
            console.log(`${numOne} ${operator} ${numTwo} = ${result} - ${type}`); break;
        case "-": result = numOne - numTwo;
            if (result % 2 === 0) {
                type = "even";
            } else {
                type = "odd";
            }
            console.log(`${numOne} ${operator} ${numTwo} = ${result} - ${type}`); break;
        case "*": result = numOne * numTwo;
            if (result % 2 === 0) {
                type = "even";
            } else {
                type = "odd";
            }
            console.log(`${numOne} ${operator} ${numTwo} = ${result} - ${type}`); break;
        case "/": result = numOne / numTwo;
            if (numTwo !== 0) {
                console.log(`${numOne} / ${numTwo} = ${result.toFixed(2)}`);
            } else {
                console.log(`Cannot divide ${numOne} by zero`);
            } break;
        case "%": result = numOne % numTwo
            if (numTwo !== 0) {
                console.log(`${numOne} % ${numTwo} = ${result}`);
            } else {
                console.log(`Cannot divide ${numOne} by zero`);
            } break;
    }
}
operationsBetweenNumbers(["112",
    "0",
    "/"])



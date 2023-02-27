function factorialDivision(firstNum, secondNum) {
    let firstResult = firstNum;
    let secondResult = secondNum;

    for (let i = firstNum; i > 1; i--) {
        let current = firstResult * (i - 1);
        firstResult = current;
    }

    for (let j = secondNum; j > 1; j--) {
        let current = secondResult * (j - 1);
        secondResult = current;
    }

    let finalResult = firstResult / secondResult;

    console.log(finalResult.toFixed(2));
}
factorialDivision(6, 2)
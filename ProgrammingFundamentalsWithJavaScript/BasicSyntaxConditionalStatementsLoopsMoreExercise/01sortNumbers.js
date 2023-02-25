function sortNumbers(firstNum, secondNum, thirdNum) {
    let arr = [];

    if (firstNum > secondNum && firstNum > thirdNum) {
        arr.push(firstNum);

        if (secondNum > thirdNum) {
            arr.push(secondNum);
            arr.push(thirdNum);
        } else {
            arr.push(thirdNum);
            arr.push(secondNum);
        }
    } else if (secondNum > firstNum && secondNum > thirdNum) {
        arr.push(secondNum);

        if (firstNum > thirdNum) {
            arr.push(firstNum);
            arr.push(thirdNum);
        } else {
            arr.push(thirdNum);
            arr.push(firstNum);
        }
    } else if (thirdNum > firstNum && thirdNum > secondNum) {
        arr.push(thirdNum);

        if (secondNum > firstNum) {
            arr.push(secondNum);
            arr.push(firstNum);
        } else {
            arr.push(firstNum);
            arr.push(secondNum);
        }
    }

    for (let el of arr) {
        console.log(el);
    }
}
sortNumbers(-2, 1, 3)
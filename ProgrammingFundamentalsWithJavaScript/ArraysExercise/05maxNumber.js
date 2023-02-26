function maxNumber(arr) {
    let newArr = [];

    let inputL = arr.length;

    for (let i = 0; i < inputL; i++) {
        let firstNum = arr[i];
        let isBiggest = true;

        for (let j = i + 1; j < inputL; j++) {
            let secondNum = arr[j];

            if (firstNum <= secondNum) {
                isBiggest = false;
            }
        }

        if (isBiggest) {
            newArr.push(firstNum);
        }
    }

    console.log(newArr.join(" "));
}
maxNumber([1, 4, 3, 2])
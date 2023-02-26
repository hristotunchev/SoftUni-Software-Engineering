function addAndSubtract(arr) {

    let inputL = arr.length;

    let newArr = [];

    let originalArrSum = 0;
    let newArrSum = 0;

    for (let i = 0; i < inputL; i++) {
        originalArrSum += Number(arr[i]);

        let tempNumber = Number(arr[i]);

        if (tempNumber % 2 === 0) {
            tempNumber += i;
            newArrSum += tempNumber;
        } else {
            tempNumber -= i;
            newArrSum += tempNumber;
        }

        newArr.push(tempNumber);
    }

    console.log(newArr);
    console.log(originalArrSum);
    console.log(newArrSum);
}
addAndSubtract([5, 15, 23, 56, 35])
function evenAndOddSubtraction(arr) {
    let evenSum = 0;
    let oddSum = 0;

    let inputL = arr.length;

    for (let i = 0; i < inputL; i++) {
        let currentNum = Number(arr[i]);

        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }

    let result = evenSum - oddSum;

    console.log(result);
}
evenAndOddSubtraction([1,2,3,4,5,6])
function sumEvenNumbers(arr) {
    let sum = 0;

    let inputL = arr.length;

    for (let i = 0; i < inputL; i++) {
        let currentNum = Number(arr[i]);

        if (currentNum % 2 === 0) {
            sum += currentNum;
        }
    }

    console.log(sum);
}
sumEvenNumbers(['1','2','3','4','5','6'])
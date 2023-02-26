function equalArrays(arr1, arr2) {
    let inputL = arr1.length;

    let isEqual = true;

    let arr1Sum = 0;

    for (let i = 0; i < inputL; i++) {
        let arr1CurrNum = Number(arr1[i]);
        let arr2CurrNum = Number(arr2[i]);

        arr1Sum += arr1CurrNum;

        if (arr1CurrNum !== arr2CurrNum) {
            isEqual = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }
    }

    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${arr1Sum}`);
    }
}
equalArrays(['10', '20', '30'],
    ['10', '20', '30'])

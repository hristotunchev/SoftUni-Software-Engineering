function distinctArray(inputArr) {
    let resultArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        if (!resultArr.includes(inputArr[i])) {
            resultArr.push(inputArr[i]);
        }
    }

    console.log(resultArr.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
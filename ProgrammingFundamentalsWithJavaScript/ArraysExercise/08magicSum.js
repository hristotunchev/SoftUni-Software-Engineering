function magicSum(arr, num) {
    let inputL = arr.length;

    for (let i = 0; i < inputL; i++) {
        let currentNum = Number(arr[i]);

        for (let j = i + 1; j < inputL; j++) {
            let nextNum = Number(arr[j]);
            let magicPair = [];

            if (currentNum + nextNum === num) {
                magicPair.push(currentNum, nextNum);
                console.log(magicPair.join(" "));
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23], 8)
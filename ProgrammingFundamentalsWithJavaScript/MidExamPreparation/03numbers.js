function numbers(input) {
    let numsArr = input.split(" ").map(Number);

    let sum = 0;

    numsArr.forEach(x => sum += x);

    let average = sum / numsArr.length;

    numsArr = numsArr.sort((a, b) => a - b);

    let resultArr = [];

    numsArr.forEach(x => {
        if (x > average) {
            resultArr.push(x);
        }
    });

    if (resultArr.length < 1) {
        console.log('No');
        return;
    }

    let output = resultArr.splice(-5).reverse();
    console.log(output.join(' '));
}
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
numbers('10 20 30 40 50');
numbers('-1 -2 -3 -4 -5 -6');
numbers('1')
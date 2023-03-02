function arrayModifier(inputArr) {
    let numbersArr = inputArr.shift().split(' ').map(Number);

    let index = 0;

    let operation = inputArr[index++];

    while (operation !== 'end') {
        let command = operation.split(' ');
        let action = command.shift();

        switch (action) {
            case 'swap':
                let swapIndexOne = Number(command[0]);
                let swapIndexTwo = Number(command[1]);

                if (swapIndexOne < 0 || swapIndexOne > numbersArr.length || swapIndexTwo < 0 || swapIndexTwo > numbersArr.length) {
                    operation = inputArr[index++];
                    continue;
                }

                let firstSwapEl = numbersArr[swapIndexOne];
                let secondSwapEl = numbersArr[swapIndexTwo];

                numbersArr.splice(swapIndexOne, 1, secondSwapEl);
                numbersArr.splice(swapIndexTwo, 1, firstSwapEl);
                break;
            case 'multiply':
                let miltiplyIndexOne = Number(command[0]);
                let multiplyIndexTwo = Number(command[1]);

                if (miltiplyIndexOne < 0 || miltiplyIndexOne > numbersArr.length || multiplyIndexTwo < 0 || multiplyIndexTwo > numbersArr.length) {
                    operation = inputArr[index++];
                    continue;
                }

                let multiplied = numbersArr[miltiplyIndexOne] * numbersArr[multiplyIndexTwo];
                numbersArr.splice(miltiplyIndexOne, 1, multiplied);
                break;
            case 'decrease':
                numbersArr = numbersArr.map(x => x - 1);
                break;
        }

        operation = inputArr[index++];
    }

    console.log(numbersArr.join(', '));
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);
function computerStore(input) {
    let index = 0;

    let command = input[index++];

    let currentSum = 0;

    while (command !== 'regular' && command !== 'special') {
        let price = Number(command);

        if (price < 0) {
            console.log(`Invalid price!`);
            command = input[index++];
            continue;
        }

        currentSum += price;
        command = input[index++];
    }

    if (currentSum === 0) {
        return `Invalid order!`;
    }

    let taxAmount = currentSum * 0.2;
    let totalSum = currentSum + taxAmount;

    if (command === 'special') {
        totalSum *= 0.9;
    }

    console.log(`Congratulations you've just bought a new computer!\n` +
        `Price without taxes: ${currentSum.toFixed(2)}$\n` +
        `Taxes: ${taxAmount.toFixed(2)}$\n` +
        `-----------\n` +
        `Total price: ${totalSum.toFixed(2)}$`);
}
computerStore(([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30',
    'regular'
]));
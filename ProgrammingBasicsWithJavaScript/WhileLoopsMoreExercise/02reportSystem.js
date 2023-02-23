function reportSystem(input) {
    let index = 0;

    let moneyNeeded = Number(input[index++]);

    let command = input[index++];

    let cashCounter = 0;
    let cardCounter = 0;
    let loopsCounter = 0;

    let cashMoney = 0;
    let cardMoney = 0;

    while (command !== "End") {
        loopsCounter++;

        sum = Number(command);

        if (loopsCounter % 2 === 0 && sum >= 10) {
            cardCounter++;
            cardMoney += sum;
            console.log(`Product sold!`);
        } else if (loopsCounter % 2 === 0 && sum < 10) {
            console.log(`Error in transaction!`);
        }

        if (loopsCounter % 2 !== 0 && sum <= 100) {
            cashCounter++;
            cashMoney += sum;
            console.log(`Product sold!`);
        } else if (loopsCounter % 2 !== 0 && sum > 100) {
            console.log(`Error in transaction!`);
        }

        if ((cashMoney + cardMoney) >= moneyNeeded) {
            console.log(`Average CS: ${(cashMoney / cashCounter).toFixed(2)}`);
            console.log(`Average CC: ${(cardMoney / cardCounter).toFixed(2)}`);
            break;
        }

        command = input[index++];
    }

    if (command === "End") {
        console.log(`Failed to collect required money for charity.`);
    }
}
reportSystem(['500',
    '120',
    '8',
    '63',
    '256',
    '78',
    '317',
])
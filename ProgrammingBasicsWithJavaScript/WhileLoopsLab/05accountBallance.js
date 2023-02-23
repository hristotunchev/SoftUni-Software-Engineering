function accountBallance(input) {
    let index = 0;
    let totalSum = 0;
    let command = input[index++];

    while (command !== "NoMoreMoney") {
        let money = Number(command);

        if (money < 0) {
            console.log(`Invalid operation!`);
            break;
        }

        totalSum += money;
        console.log(`Increase: ${money.toFixed(2)}`);
        command = input[index++]
    }

    console.log(`Total: ${totalSum.toFixed(2)}`);
}
accountBallance(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"])

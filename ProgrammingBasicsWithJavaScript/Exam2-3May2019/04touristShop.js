function touristShop(input) {
    let index = 0;

    const budget = Number(input[index++]);

    let tempMoney = budget;

    let command = input[index++];

    let tempProductCounter = 0;
    let productCounter = 0;

    while (command !== "Stop") {
        let product = command;
        let price = Number(input[index++]);

        tempProductCounter++;

        if (tempProductCounter % 3 === 0) {
            price *= 0.5;
        }

        let diff = Math.abs(tempMoney - price);

        if (tempMoney >= price) {
            tempMoney -= price;
            productCounter++;
        } else {
            console.log(`You don't have enough money!`);
            console.log(`You need ${diff.toFixed(2)} leva!`);
            break;
        }

        command = input[index++];
    }

    let spentMoney = budget - tempMoney;

    if (command === "Stop") {
        console.log(`You bought ${productCounter} products for ${spentMoney.toFixed(2)} leva.`);
    }
}
touristShop(["54",
    "Thermal underwear",
    "24",
    "Sunscreen",
    "45"])

function vacation(input) {
    let index = 0;

    let excursionPrice = Number(input[index++]);
    let money = Number(input[index++]);

    let daysSpent = 0;
    let dayCounter = 0;

    while (money < excursionPrice) {
        let action = input[index++];
        let amountOfmoney = Number(input[index++]);
        dayCounter++;

        switch (action) {
            case "spend": money -= amountOfmoney;
                if (money < 0) {
                    money = 0;
                }
                daysSpent++
                break;
            case "save": money += amountOfmoney;
                daysSpent = 0;
                break;
        }

        if (daysSpent >= 5) {
            console.log(`You can't save the money.`);
            console.log(`${dayCounter}`);
            break;
        }
    }

    if (money >= excursionPrice) {
        console.log(`You saved the money for ${dayCounter} days.`);
    }
}
vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"])

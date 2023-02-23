function tournament(input) {
    let index = 0;

    let days = Number(input[index++]);

    let command = input[index++];

    let winDaysCounter = 0;
    let loseDaysCounter = 0;

    let totalMoney = 0;

    for (let i = 1; i <= days; i++) {
        let winGamesCounter = 0;
        let loseGamesCounter = 0;

        let tempMoney = 0;

        while (command !== "Finish") {
            let sport = command;
            let result = input[index++];

            switch (result) {
                case "win":
                    winGamesCounter++;
                    tempMoney += 20;
                    break;
                case "lose":
                    loseGamesCounter++;
                    break;
            }

            command = input[index++];

            if (command === "Finish") {
                if (winGamesCounter > loseGamesCounter) {
                    tempMoney *= 1.1;
                    winDaysCounter++;
                } else {
                    loseDaysCounter++;
                }
                totalMoney += tempMoney;
            }
        }

        command = input[index++];
    }

    if (winDaysCounter > loseDaysCounter) {
        totalMoney *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}
tournament(["3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"])

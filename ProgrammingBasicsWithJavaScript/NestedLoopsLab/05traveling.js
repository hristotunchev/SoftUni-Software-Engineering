function traveling(input) {
    let index = 0;
    let command = input[index++];

    while (command !== "End") {
        let country = command;
        let minimalBudget = Number(input[index++]);
        let totalMoney = 0;

        while (country === command) {
            let savedMoney = Number(input[index++]);
            totalMoney += savedMoney;
            
            if (totalMoney >= minimalBudget) {
                console.log(`Going to ${country}!`);
                break;
            }
        }
        command = input[index++];
    }
}
traveling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"])

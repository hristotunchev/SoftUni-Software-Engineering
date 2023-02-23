function gameNumberWars(input) {
    let index = 0;

    let firstPlayer = input[index++];
    let secondPlayer = input[index++];
    let command = input[index++];

    let firstCounter = 0;
    let secondCounter = 0;

    let winner = "";

    let winnerPoints = 0;

    while (command !== "End of game") {
        let cardFirst = Number(command);
        let cardSecond = Number(input[index++]);

        if (cardFirst > cardSecond) {
            firstCounter += cardFirst - cardSecond;
        } else if (cardFirst < cardSecond) {
            secondCounter += cardSecond - cardFirst;
        } else {
            let newFirst = Number(input[index++]);
            let newSecond = Number(input[index++]);

            if (newFirst > newSecond) {
                winner = firstPlayer;
                winnerPoints = firstCounter;
            } else {
                winner = secondPlayer;
                winnerPoints = secondCounter;
            }

            console.log(`Number wars!`);
            console.log(`${winner} is winner with ${winnerPoints} points`);
            break;
        }

        command = input[index++];
    }

    if (command === "End of game") {
        console.log(`${firstPlayer} has ${firstCounter} points`);
        console.log(`${secondPlayer} has ${secondCounter} points`);
    }
}
gameNumberWars(["Aleks",
    "Georgi",
    "4",
    "5",
    "3",
    "2",
    "4",
    "3",
    "4",
    "4",
    "5",
    "2"])


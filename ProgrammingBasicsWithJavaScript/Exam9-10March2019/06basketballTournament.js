function basketballTournament(input) {
    let index = 0;

    let command = input[index++];

    let winCounter = 0;
    let loseCounter = 0;
    let gameCounter = 0;

    while (command !== "End of tournaments") {
        let name = command;
        let games = Number(input[index++]);

        let tempGameCounter = 0;
        for (let i = 0; i < games; i++) {
            let homePoints = Number(input[index++]);
            let awayPoints = Number(input[index++]);

            gameCounter++;
            tempGameCounter++;

            if (homePoints > awayPoints) {
                winCounter++;
                console.log(`Game ${tempGameCounter} of tournament ${name}: win with ${homePoints - awayPoints} points.`);
            } else {
                loseCounter++;
                console.log(`Game ${tempGameCounter} of tournament ${name}: lost with ${awayPoints - homePoints} points.`);
            }
        }

        command = input[index++];
    }

    let winPercent = (winCounter / gameCounter) * 100;
    let losePercent = (loseCounter / gameCounter) * 100;

    console.log(`${winPercent.toFixed(2)}% matches win`);
    console.log(`${losePercent.toFixed(2)}% matches lost`);
}
basketballTournament(["Dunkers",
    "2",
    "75",
    "65",
    "56",
    "73",
    "Fire Girls",
    "3",
    "67",
    "34",
    "83",
    "98",
    "66",
    "45",
    "End of tournaments"])

function tennisRanklist(input) {
    let index = 0;

    let tournamentCount = Number(input[index++]);
    let startingPoints = Number(input[index++]);

    //let stage = input(input[index++]);
    let winCounter = 0;
    let currentPoints = 0;

    for (let i = 0; i < tournamentCount; i++) {
        let stage = input[index++];
        switch (stage) {
            case "W": currentPoints += 2000;
                winCounter++;
                break;
            case "F": currentPoints += 1200; break;
            case 'SF': currentPoints += 720; break;
        }
    }

    let finalPoints = startingPoints + currentPoints;
    let averagePoints = Math.floor(currentPoints / tournamentCount);
    let percentage = winCounter / tournamentCount * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${percentage.toFixed(2)}%`);
}
tennisRanklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])

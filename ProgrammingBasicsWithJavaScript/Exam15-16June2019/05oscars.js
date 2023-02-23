function oscars(input) {
    let index = 0;

    let actorName = input[index++];
    let startPoints = Number(input[index++]);
    let juryCount = Number(input[index++]);

    let tempPoints = startPoints;

    for (let i = 0; i < juryCount; i++) {
        let juryName = input[index++];
        let currentPoints = Number(input[index++]);

        currentPoints = Number(juryName.length) * currentPoints / 2;

        tempPoints += currentPoints;

        if (tempPoints >= 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${tempPoints.toFixed(1)}!`);
            break;
        }
    }

    if (tempPoints < 1250.5) {
        let diff = 1250.5 - tempPoints;
        console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
    }
}
oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"])

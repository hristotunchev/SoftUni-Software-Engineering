function oscars(input) {
    let index = 0;

    nameActor = input[index++];

    let points = Number(input[index++]);
    let juryCount = Number(input[index++]);

    for (let i = 0; i < juryCount; i++) {
        let name = input[index++];
        let tempPoints = Number(input[index++]);
        points += name.length * tempPoints / 2;
        
        if (points > 1250.5) {
            console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${points.toFixed(1)}!`);
            break;
        }
    }
    let pointsNeeded = Math.abs(points - 1250.5);

    if (points < 1250.5) {
        console.log(`Sorry, ${nameActor} you need ${pointsNeeded.toFixed(1)} more!`);
    }


}
oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])


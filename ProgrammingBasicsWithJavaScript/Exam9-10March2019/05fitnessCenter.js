function fitnessCenter(input) {
    let index = 0;

    let people = Number(input[index++]);

    let backCounter = 0;
    let chestCounter = 0;
    let legsCounter = 0;
    let absCounter = 0;
    let shakeCounter = 0;
    let barCounter = 0;
    let workoutCounter = 0;
    let proteinCounter = 0;

    for (let i = 0; i < people; i++) {
        let activity = input[index++];
        switch (activity) {
            case "Back":
                backCounter++;
                workoutCounter++;
                break;
            case "Chest":
                chestCounter++;
                workoutCounter++;
                break;
            case "Legs":
                legsCounter++;
                workoutCounter++
                break;
            case "Abs":
                absCounter++;
                workoutCounter++
                break;
            case "Protein shake":
                shakeCounter++;
                proteinCounter++;
                break;
            case "Protein bar":
                barCounter++;
                proteinCounter++;
                break;
        }
    }

    let workoutPercent = (workoutCounter / people) * 100;
    let proteinPercent = (proteinCounter / people) * 100;

    console.log(`${backCounter} - back`);
    console.log(`${chestCounter} - chest`);
    console.log(`${legsCounter} - legs`);
    console.log(`${absCounter} - abs`);
    console.log(`${shakeCounter} - protein shake`);
    console.log(`${barCounter} - protein bar`);
    console.log(`${workoutPercent.toFixed(2)}% - work out`);
    console.log(`${proteinPercent.toFixed(2)}% - protein`);
}
fitnessCenter(["10",
    "Back",
    "Chest",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar",
    "Protein shake",
    "Protein bar",
    "Legs",
    "Abs"])

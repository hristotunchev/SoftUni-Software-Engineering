function bestPlayer(input) {
    let index = 0;

    let best = "";

    let totalGoals = 0;

    let isHattrick = false;

    let command = input[index++];

    while (command !== "END") {
        let name = command;
        let goals = Number(input[index++]);

        if (totalGoals < goals) {
            totalGoals = goals;
            best = name;
        }

        if (goals >= 3) {
            isHattrick = true;
        }

        if (goals >= 10) {
            break;
        }

        command = input[index++];
    }

    console.log(`${best} is the best player!`);

    if (isHattrick) {
        console.log(`He has scored ${totalGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${totalGoals} goals.`);
    }
}
bestPlayer(["Neymar", "2",
    "Ronaldo",
    "1",
    "Messi",
    "3",
    "END"])


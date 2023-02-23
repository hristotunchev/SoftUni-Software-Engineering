function walking(input) {
    let index = 0;

    let command = input[index++];

    let endGoal = 10000;

    while (command !== "Going home") {
        let steps = Number(command);
        endGoal -= steps;

        if (endGoal <= 0) {
            console.log(`Goal reached! Good job!`);
            console.log(`${Math.abs(endGoal)} steps over the goal!`);
            break;
        }

        command = input[index++];
    }

    if (command === "Going home") {
        let leftSteps = Number(input[index++]);
        endGoal -= leftSteps;

        if (endGoal <= 0) {
            console.log("Goal reached! Good job!");
            console.log(`${Math.abs(endGoal)} steps over the goal!`);
        } else {
            console.log(`${Math.abs(endGoal)} more steps to reach goal.`);
        }
    }
}
walking(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"])

function movieStars(input){
    let index = 0;

    let budget = Number(input[index++]);
    let command = input[index++];

    let moneyLeft = budget;

    while (command !== "ACTION"){
        let actorName = command;
        let salary = 0;

        if (actorName.length > 15){
            salary = moneyLeft * 0.2;
        } else {
            salary = Number(input[index++]);
        }

        if (moneyLeft < salary){
            let diff = Math.abs(moneyLeft - salary);
            console.log(`We need ${diff.toFixed(2)} leva for our actors.`);
            break;
        } else {
            moneyLeft -= salary;
        }

        command = input[index++];
    }
    
    if (command === "ACTION"){
        console.log(`We are left with ${moneyLeft.toFixed(2)} leva.`);
    }
}
movieStars(["90000",
"Christian Bale",
"70000.50",
"Leonard DiCaprio",
"Kevin Spacey",
"24000.99"])

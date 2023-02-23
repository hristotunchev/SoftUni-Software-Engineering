function catWalking(input) {
    let minutesPerWalk = Number(input[0]);
    let walksPerDay = Number(input[1]);
    let caloriesPerDay = Number(input[2]);

    let totalMinutesPerDay = minutesPerWalk * walksPerDay;
    let caloriesBurned = totalMinutesPerDay * 5;
    let goal = caloriesPerDay / 2;

    if (caloriesBurned >= goal) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurned}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurned}.`);
    }
}
catWalking(["15",
    "2",
    "500"])

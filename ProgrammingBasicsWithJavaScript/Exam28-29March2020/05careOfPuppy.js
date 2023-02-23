function careOfPuppy(input) {
    let index = 0;

    let foodInKgs = Number(input[index++]);
    let foodInGrams = foodInKgs * 1000;

    let totalEatenFood = 0;

    let command = input[index++];

    while (command !== "Adopted") {
        let foodEaten = Number(command);

        totalEatenFood += foodEaten;

        command = input[index++];
    }

    let diff = Math.abs(foodInGrams - totalEatenFood);

    if (foodInGrams >= totalEatenFood) {
        console.log(`Food is enough! Leftovers: ${diff} grams.`);
    } else {
        console.log(`Food is not enough. You need ${diff} grams more.`);
    }
}
careOfPuppy(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"])

function deerOfSanta(input) {
    let daysAway = Number(input[0]);
    let foodLeftKg = Number(input[1]);
    let deer1FoodKg = Number(input[2]);
    let deer2FoodKg = Number(input[3]);
    let deer3FoodKg = Number(input[4]);

    let allDeersFoofPerDay = deer1FoodKg + deer2FoodKg + deer3FoodKg;
    let totalFoodNeeded = allDeersFoofPerDay * daysAway;
    let diff = Math.abs(foodLeftKg - totalFoodNeeded);

    if (foodLeftKg >= totalFoodNeeded) {
        console.log(`${Math.floor(diff)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
    }
}
deerOfSanta(["2",
    "10",
    "1",
    "1",
    "2"])

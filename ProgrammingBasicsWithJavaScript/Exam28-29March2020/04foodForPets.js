function foodForPets(input) {
    let index = 0;

    let days = Number(input[index++]);
    let totalFoodInGrams = Number(input[index++]);

    let dogCounter = 0;
    let catCounter = 0;
    let biscuitCounter = 0;

    for (let i = 1; i <= days; i++) {
        let foodEatenByDog = Number(input[index++]);
        let foodEatenByCat = Number(input[index++]);

        dogCounter += foodEatenByDog;
        catCounter += foodEatenByCat;

        if (i % 3 === 0) {
            biscuitCounter += (foodEatenByDog + foodEatenByCat) * 0.1;
        }
    }

    let allEatenFood = dogCounter + catCounter;
    let totalFoodPercentage = (allEatenFood / totalFoodInGrams) * 100;
    let dogPercentage = (dogCounter / allEatenFood) * 100;
    let catPercentage = (catCounter / allEatenFood) * 100;
    
    console.log(`Total eaten biscuits: ${Math.round(biscuitCounter)}gr.`);
    console.log(`${totalFoodPercentage.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogPercentage.toFixed(2)}% eaten from the dog.`);
    console.log(`${catPercentage.toFixed(2)}% eaten from the cat.`);
}
foodForPets(["3",
    "500",
    "100",
    "30",
    "110",
    "25",
    "120",
    "35"])

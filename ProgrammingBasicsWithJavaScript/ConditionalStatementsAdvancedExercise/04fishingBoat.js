function fishingBoat(input) {
    const priceSpring = 3000;
    const priceSummerAndAutumn = 4200;
    const priceWinter = 2600;

    const budget = Number(input[0]);
    const season = input[1];
    const fishermen = Number(input[2]);

    let finalPrice = 0;

    switch (season) {
        case "Spring":
            if (fishermen <= 6) {
                finalPrice = priceSpring * 0.9;
            } else if (fishermen >= 7 && fishermen <= 11) {
                finalPrice = priceSpring * 0.85;
            } else if (fishermen >= 12) {
                finalPrice = priceSpring * 0.75;
            }
            break;
        case "Summer":
            if (fishermen <= 6) {
                finalPrice = priceSummerAndAutumn * 0.9;
            } else if (fishermen >= 7 && fishermen <= 11) {
                finalPrice = priceSummerAndAutumn * 0.85;
            } else if (fishermen >= 12) {
                finalPrice = priceSummerAndAutumn * 0.75;
            }
            break;
        case "Autumn":
            if (fishermen <= 6) {
                finalPrice = priceSummerAndAutumn * 0.9;
            } else if (fishermen >= 7 && fishermen <= 11) {
                finalPrice = priceSummerAndAutumn * 0.85;
            } else if (fishermen >= 12) {
                finalPrice = priceSummerAndAutumn * 0.75;
            }
            break;
        case "Winter":
            if (fishermen <= 6) {
                finalPrice = priceWinter * 0.9;
            } else if (fishermen >= 7 && fishermen <= 11) {
                finalPrice = priceWinter * 0.85;
            } else if (fishermen >= 12) {
                finalPrice = priceWinter * 0.75;
            }
            break;
    }

    if (fishermen % 2 == 0 && season != "Autumn") {
        finalPrice *= 0.95;
    }

    let difference = Math.abs(budget - finalPrice);

    if (budget >= finalPrice) {
        console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`);
    }

}
fishingBoat(["2000",
    "Winter",
    "13"])




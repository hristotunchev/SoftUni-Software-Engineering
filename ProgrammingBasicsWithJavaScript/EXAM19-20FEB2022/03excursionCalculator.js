function excursionCalculator(input) {
    let countPeople = Number(input[0]);
    let season = input[1];

    let price = 0;

    switch (season) {
        case "spring":
            if (countPeople <= 5) {
                price = countPeople * 50;
            } else {
                price = countPeople * 48;
            }
            break;
        case "summer":
            if (countPeople <= 5) {
                price = countPeople * 48.5;
            } else {
                price = countPeople * 45;
            }
            break;
        case "autumn":
            if (countPeople <= 5) {
                price = countPeople * 60;
            } else {
                price = countPeople * 49.5;
            }
            break;
        case "winter":
            if (countPeople <= 5) {
                price = countPeople * 86;
            } else {
                price = countPeople * 85;
            }
            break;
    }

    if (season === "summer") {
        price *= 0.85;
    } else if (season === "winter") {
        price *= 1.08;
    }

    console.log(`${price.toFixed(2)} leva.`);
}
excursionCalculator(["5",
    "spring"])

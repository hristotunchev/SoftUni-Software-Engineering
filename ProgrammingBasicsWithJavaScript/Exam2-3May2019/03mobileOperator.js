function mobileOperator(input) {
    let term = input[0];
    let type = input[1];
    let internet = input[2];
    let months = Number(input[3]);

    let pricePerMonth = 0;
    let internetPrice = 0;

    switch (term) {
        case "one":
            switch (type) {
                case "Small": pricePerMonth = 9.98; break;
                case "Middle": pricePerMonth = 18.99; break;
                case "Large": pricePerMonth = 25.98; break;
                case "ExtraLarge": pricePerMonth = 35.99; break;
            }
            break;
        case "two":
            switch (type) {
                case "Small": pricePerMonth = 8.58; break;
                case "Middle": pricePerMonth = 17.09; break;
                case "Large": pricePerMonth = 23.59; break;
                case "ExtraLarge": pricePerMonth = 31.79; break;
            }
            break;
    }

    if (internet === "yes") {
        if (pricePerMonth <= 10) {
            internetPrice = 5.5;
        } else if (pricePerMonth > 10 && pricePerMonth <= 30) {
            internetPrice = 4.35;
        } else {
            internetPrice = 3.85;
        }
    }

    let totalPrice = (pricePerMonth + internetPrice) * months;

    if (term === "two") {
        totalPrice *= 0.9625;
    }

    console.log(`${totalPrice.toFixed(2)} lv.`);
}
mobileOperator(["two",
    "ExtraLarge",
    "yes",
    "20"])

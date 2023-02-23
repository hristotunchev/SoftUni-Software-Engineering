function energyBooster(input) {
    let type = input[0];
    let size = input[1];
    let count = Number(input[2]);

    let waterelonSmallPrice = 56 * 2;
    let watermelonBigPrice = 28.7 * 5;
    let mangoSmallPrice = 36.66 * 2;
    let mangoBigPrice = 19.6 * 5;
    let pineappleSmallPrice = 42.1 * 2;
    let pineappleBigPrice = 24.8 * 5;
    let raspberrySmallPrice = 20 * 2;
    let raspberryBigPrice = 15.2 * 5;

    let finalPrice = 0;

    switch (type) {
        case "Watermelon":
            switch (size) {
                case "small": finalPrice = count * waterelonSmallPrice; break;
                case "big": finalPrice = count * watermelonBigPrice; break;
            }
            break;
        case "Mango":
            switch (size) {
                case "small": finalPrice = count * mangoSmallPrice; break;
                case "big": finalPrice = count * mangoBigPrice; break;
            }
            break;
        case "Pineapple":
            switch (size) {
                case "small": finalPrice = count * pineappleSmallPrice; break;
                case "big": finalPrice = count * pineappleBigPrice; break;
            }
            break;
        case "Raspberry":
            switch (size) {
                case "small": finalPrice = count * raspberrySmallPrice; break;
                case "big": finalPrice = count * raspberryBigPrice; break;
            }
            break;
    }

    if (finalPrice >= 400 && finalPrice <= 1000) {
        finalPrice *= 0.85;
    } else if (finalPrice > 1000) {
        finalPrice *= 0.5;
    }

    console.log(`${finalPrice.toFixed(2)} lv.`);
}
energyBooster(["Raspberry",
    "small",
    "50"])


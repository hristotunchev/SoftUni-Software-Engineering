function logistics(input) {
    let index = 0;

    let cargoCount = Number(input[index++]);

    let vanCounter = 0;
    let truckCounter = 0;
    let trainCounter = 0;
    let totalTons = 0;

    for (let i = 0; i < cargoCount; i++) {
        let cargoWeight = Number(input[index++]);
        totalTons += cargoWeight;
        if (cargoWeight <= 3) {
            vanCounter += cargoWeight;
        } else if (cargoWeight >= 4 && cargoWeight <= 11) {
            truckCounter += cargoWeight;
        } else {
            trainCounter += cargoWeight;
        }
    }

    let vanPrice = vanCounter * 200;
    let truckPrice = truckCounter * 175;
    let trainPrice = trainCounter * 120;

    let averagePrice = (vanPrice + truckPrice + trainPrice) / totalTons;

    let vanPercentage = vanCounter / totalTons * 100;
    let truckPercentage = truckCounter / totalTons * 100;
    let trainPercentage = trainCounter / totalTons * 100;

    console.log(averagePrice.toFixed(2));
    console.log(`${vanPercentage.toFixed(2)}%`);
    console.log(`${truckPercentage.toFixed(2)}%`);
    console.log(`${trainPercentage.toFixed(2)}%`);
}
logistics(["4", "1", "5", "16", "3"])
function toyShop(input) {
    const puzzlePrice = 2.6;
    const talkingDollPrice = 3;
    const teddyBearPrice = 4.1;
    const minionPrice = 8.2
    const truckPrice = 2;

    const vacationPrice = Number(input[0]);
    const puzzleCount = Number(input[1]);
    const talkingDollCount = Number(input[2]);
    const teddyBearCount = Number(input[3]);
    const minionCount = Number(input[4]);
    const truckCount = Number(input[5]);

    let toyPrice = puzzlePrice * puzzleCount + talkingDollPrice * talkingDollCount +
        teddyBearPrice * teddyBearCount + minionPrice * minionCount + truckPrice * truckCount;

    const toyCount = puzzleCount + talkingDollCount + teddyBearCount + minionCount + truckCount;

    if (toyCount >= 50) {
        toyPrice *= 0.75;
    }

    toyPrice *= 0.9;
    const difference = Math.abs(toyPrice - vacationPrice);

    if (toyPrice >= vacationPrice) {
        console.log(`Yes! ${difference.toFixed(2)} lv left.`);

    } else if (toyPrice < vacationPrice) {
        console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
    }
}
toyShop(["40.8",
    "20",
    "25",
    "30",
    "50",
    "10"])


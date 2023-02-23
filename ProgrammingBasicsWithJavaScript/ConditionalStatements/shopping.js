function shopping(input) {
    const budget = Number(input[0]);
    const vCCount = Number(input[1]);
    const procCount = Number(input[2]);
    const ramCount = Number(input[3]);

    const vCPrice = 250;
    const procPrice = (vCCount * vCPrice) * 0.35;
    const ramPrice = (vCCount * vCPrice) * 0.1;

    let totalSum = vCPrice * vCCount + procPrice * procCount + ramPrice * ramCount;

    if (vCCount > procCount) {
        totalSum *= 0.85;
    }
    if (totalSum > budget) {
        let moneyNeeded = totalSum - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    } else {
        let moneyLeft = budget - totalSum;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    }
}
shopping(["920.45",
    "3",
    "1",
    "1"])


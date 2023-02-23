function godzillaVsKong(input) {
    const budget = Number(input[0]);
    const stuntMen = Number(input[1]);
    const stuntMenClothPrice = Number(input[2]);
    const decor = budget * 0.1;

    let finalClothPrice = stuntMen * stuntMenClothPrice;

    if (stuntMen > 150) {
        finalClothPrice *= 0.9;
    }
    let totalPrice = decor + finalClothPrice;

    if (totalPrice > budget) {
        let moneyNeeded = totalPrice - budget;
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    } else {
        let moneyLeft = budget - totalPrice;
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
}
godzillaVsKong(["20000",
    "120",
    "55.5"])

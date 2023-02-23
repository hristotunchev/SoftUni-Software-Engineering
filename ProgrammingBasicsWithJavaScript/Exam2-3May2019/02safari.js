function safari(input) {
    let budget = Number(input[0]);
    let fuelNeeded = Number(input[1]);

    let day = input[2];

    let fuelPrice = 2.1;
    let guidePrice = 100;
    let saturdayDiscount = 0.9;
    let sundayDiscount = 0.8;

    let totalPrice = (fuelNeeded * fuelPrice) + guidePrice;

    switch (day) {
        case "Saturday": totalPrice *= saturdayDiscount; break;
        case "Sunday": totalPrice *= sundayDiscount; break;
    }

    let diff = Math.abs(budget - totalPrice);

    if (budget >= totalPrice) {
        console.log(`Safari time! Money left: ${diff.toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`);
    }
}
safari(["1000",
    "10",
    "Sunday"])

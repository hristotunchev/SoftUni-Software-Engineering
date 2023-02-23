function addBags(input) {
    const priceAbove20Kg = Number(input[0]);
    const luggageWeight = Number(input[1]);
    const daysToFlight = Number(input[2]);
    const luggageCount = Number(input[3]);

    const priceUnder10Kg = priceAbove20Kg * 0.2;
    const price10to20KgIncl = priceAbove20Kg * 0.5;

    let finalPrice = 0;

    if (luggageWeight > 20) {
        finalPrice = luggageCount * priceAbove20Kg;
    } else if (luggageWeight >= 10 && luggageWeight <= 20) {
        finalPrice = luggageCount * price10to20KgIncl;
    } else {
        finalPrice = luggageCount * priceUnder10Kg;
    }

    if (daysToFlight > 30) {
        finalPrice *= 1.1;
    } else if (daysToFlight >= 7 && daysToFlight <= 30) {
        finalPrice *= 1.15;
    } else {
        finalPrice *= 1.4;
    }

    console.log(`The total price of bags is: ${finalPrice.toFixed(2)} lv.`);
}
addBags(['30',
    '18',
    '15',
    '2'
])
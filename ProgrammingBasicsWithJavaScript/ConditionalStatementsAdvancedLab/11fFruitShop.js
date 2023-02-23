function fruitShop(input) {
    const fruit = input[0];
    const day = input[1];
    const count = Number(input[2]);

    const bananaPriceWeek = 2.5;
    const applePriceWeek = 1.2;
    const orangePriceWeek = 0.85;
    const grapefruitPriceWeek = 1.45;
    const kiwiPriceWeek = 2.7;
    const pineapplePriceWeek = 5.5;
    const grapesPriceWeek = 3.85;
    const bananaPriceWeekEnd = 2.7;
    const applePriceWeekEnd = 1.25;
    const orangePriceWeekEnd = 0.9;
    const grapefruitPriceWeekEnd = 1.6;
    const kiwiPriceWeekEnd = 3;
    const pineapplePriceWeekEnd = 5.6;
    const grapesPriceWeekEnd = 4.2;

    let totalPrice = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        switch (fruit) {
            case "banana": totalPrice = bananaPriceWeek * count; console.log(totalPrice.toFixed(2)); break;
            case "apple": totalPrice = applePriceWeek * count; console.log(totalPrice.toFixed(2)); break;
            case "orange": totalPrice = orangePriceWeek * count; console.log(totalPrice.toFixed(2)); break;
            case "grapefruit": totalPrice = grapefruitPriceWeek * count; console.log(totalPrice.toFixed(2)); break;
            case "kiwi": totalPrice = kiwiPriceWeek * count; console.log(totalPrice.toFixed(2)); break;
            case "pineapple": totalPrice = pineapplePriceWeek * count; console.log(totalPrice.toFixed(2)); break;
            case "grapes": totalPrice = grapesPriceWeek * count; console.log(totalPrice.toFixed(2)); break;
            default: console.log("error");
        }
    } else if (day === "Saturday" || day === "Sunday") {
        switch (fruit) {
            case "banana": totalPrice = bananaPriceWeekEnd * count; console.log(totalPrice.toFixed(2)); break;
            case "apple": totalPrice = applePriceWeekEnd * count; console.log(totalPrice.toFixed(2)); break;
            case "orange": totalPrice = orangePriceWeekEnd * count; console.log(totalPrice.toFixed(2)); break;
            case "grapefruit": totalPrice = grapefruitPriceWeekEnd * count; console.log(totalPrice.toFixed(2)); break;
            case "kiwi": totalPrice = kiwiPriceWeekEnd * count; console.log(totalPrice.toFixed(2)); break;
            case "pineapple": totalPrice = pineapplePriceWeekEnd * count; console.log(totalPrice.toFixed(2)); break;
            case "grapes": totalPrice = grapesPriceWeekEnd * count; console.log(totalPrice.toFixed(2)); break;
            default: console.log("error");
        }

    } else {
        console.log("error");
    }
}
fruitShop(["apple", "Tuesday", "2"])
function worldSnookerChampionship(input) {
    let stage = input[0];
    let type = input[1];
    let ticketsCount = Number(input[2]);
    let photo = input[3];

    let photoPrice = ticketsCount * 40;

    let totalPrice = 0;

    switch (type) {
        case "Standard":
            switch (stage) {
                case "Quarter final": totalPrice = ticketsCount * 55.5; break;
                case "Semi final": totalPrice = ticketsCount * 75.88; break;
                case "Final": totalPrice = ticketsCount * 110.1; break;
            }
            break;
        case "Premium":
            switch (stage) {
                case "Quarter final": totalPrice = ticketsCount * 105.2; break;
                case "Semi final": totalPrice = ticketsCount * 125.22; break;
                case "Final": totalPrice = ticketsCount * 160.66; break;
            }
            break;
        case "VIP":
            switch (stage) {
                case "Quarter final": totalPrice = ticketsCount * 118.9; break;
                case "Semi final": totalPrice = ticketsCount * 300.4; break;
                case "Final": totalPrice = ticketsCount * 400; break;
            }
            break;
    }

    if (totalPrice > 4000) {
        totalPrice *= 0.75;
    } else if (totalPrice > 2500) {
        totalPrice *= 0.9;
    }

    if (totalPrice <= 4000 && photo === "Y") {
        totalPrice += photoPrice;
    }

    console.log(totalPrice.toFixed(2));
}
worldSnookerChampionship(["Semi final",
    "VIP",
    "9",
    "Y"])


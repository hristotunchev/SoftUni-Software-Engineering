function filmPremiere(input) {
    let name = input[0];
    let type = input[1];
    let tickets = Number(input[2]);

    let price = 0;

    switch (name) {
        case "John Wick":
            switch (type) {
                case "Drink": price = tickets * 12; break;
                case "Popcorn": price = tickets * 15; break;
                case "Menu": price = tickets * 19; break;
            }
            break;
        case "Star Wars":
            switch (type) {
                case "Drink": price = tickets * 18; break;
                case "Popcorn": price = tickets * 25; break;
                case "Menu": price = tickets * 30; break;
            }
            break;
        case "Jumanji":
            switch (type) {
                case "Drink": price = tickets * 9; break;
                case "Popcorn": price = tickets * 11; break;
                case "Menu": price = tickets * 14; break;
            }
            break;
    }

    if (name === "Star Wars" && tickets >= 4) {
        price *= 0.7;
    }

    if (name === "Jumanji" && tickets === 2) {
        price *= 0.85;
    }

    console.log(`Your bill is ${price.toFixed(2)} leva.`);
}
filmPremiere(["John Wick",
    "Drink",
    "6"])

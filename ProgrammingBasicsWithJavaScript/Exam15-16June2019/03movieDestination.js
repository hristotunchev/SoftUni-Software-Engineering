function movieDestination(input) {
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let days = Number(input[3]);

    let price = 0;

    switch (destination) {
        case "Dubai":
            switch (season) {
                case "Summer": price = days * 40000; break;
                case "Winter": price = days * 45000; break;
            }
            break;
        case "Sofia":
            switch (season) {
                case "Summer": price = days * 12500; break;
                case "Winter": price = days * 17000; break;
            }
            break;
        case "London":
            switch (season) {
                case "Summer": price = days * 20250; break;
                case "Winter": price = days * 24000; break;
            }
            break;
    }

    if (destination === "Dubai") {
        price *= 0.7;
    }

    if (destination === "Sofia") {
        price *= 1.25;
    }

    let diff = Math.abs(budget - price);

    if (budget >= price) {
        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${diff.toFixed(2)} leva more!`);
    }
}
movieDestination(["1000000",
    "Dubai",
    "Summer",
    "5"])

function journey(input) {
    const budget = Number(input[0]);
    const season = input[1];

    let price = 0;

    let destination = "";
    let type = "";

    if (budget <= 100) {
        switch (season) {
            case "summer": price = budget * 0.3;
                destination = "Bulgaria";
                type = "Camp"; break;
            case "winter": price = budget * 0.7;
                destination = "Bulgaria";
                type = "Hotel"; break;
        }
    } else if (budget > 100 && budget <= 1000) {
        switch (season) {
            case "summer": price = budget * 0.4;
                destination = "Balkans";
                type = "Camp"; break;
            case "winter": price = budget * 0.8;
                destination = "Balkans";
                type = "Hotel"; break;
        }
    } else if (budget > 1000) {
        switch (season) {
            case "summer": price = budget * 0.9;
                destination = "Europe";
                type = "Hotel"; break;
            case "winter": price = budget * 0.9;
                destination = "Europe";
                type = "Hotel"; break;
        }
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${price.toFixed(2)}`);

}
journey(["1500", "summer"])
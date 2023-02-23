function aluminiumJoinery(input) {
    const count = Number(input[0]);
    const type = input[1];
    const delivery = input[2];

    const j90x130price = 110;
    const j100x150price = 140;
    const j130x180price = 190;
    const j200x300price = 250;
    const deliveryPrice = 60;

    let price = 0;

    if (count < 10) {
        console.log(`Invalid order`);
    } else {
        switch (type) {
            case "90X130": price = count * j90x130price;
                if (count > 60) {
                    price = (count * j90x130price) * 0.92;
                } else if (count > 30) {
                    price = (count * j90x130price) * 0.95;
                }
                break;
            case "100X150": price = count * j100x150price;
                if (count > 80) {
                    price *= 0.90;
                } else if (count > 40) {
                    price *= 0.94;
                }
                break;
            case "130X180": price = count * j130x180price;
                if (count > 50) {
                    price *= 0.88;
                } else if (count > 20) {
                    price *= 0.93;
                }
                break;
            case "200X300": price = count * j200x300price;
                if (count > 50) {
                    price *= 0.86;
                } else if (count > 25) {
                    price *= 0.91;
                }
                break;
        }

        if (delivery === "With delivery") {
            price += deliveryPrice;
        }

        if (count > 99) {
            price *= 0.96;
        }
        
        console.log(`${price.toFixed(2)} BGN`);
    }
}
aluminiumJoinery(['105',
    '100X150',
    'With delivery'
])
function newHouse(input) {
    const flowerType = input[0];
    const flowerQuantity = Number(input[1]);
    const budget = Number(input[2]);

    const rosesPrice = 5;
    const dahliasPrice = 3.8;
    const tulipsPrice = 2.8;
    const narcissusPrice = 3;
    const gladiolusPrice = 2.5;

    let finalPrice = 0;

    switch (flowerType) {
        case "Roses":
            if (flowerQuantity > 80) {
                finalPrice = flowerQuantity * rosesPrice * 0.9;
            } else {
                finalPrice = flowerQuantity * rosesPrice;
            }
            break;
        case "Dahlias":
            if (flowerQuantity > 90) {
                finalPrice = flowerQuantity * dahliasPrice * 0.85;
            } else {
                finalPrice = flowerQuantity * dahliasPrice;
            }
            break;
        case "Tulips":
            if (flowerQuantity > 80) {
                finalPrice = flowerQuantity * tulipsPrice * 0.85;
            } else {
                finalPrice = flowerQuantity * tulipsPrice;
            }
            break;
        case "Narcissus":
            if (flowerQuantity < 120) {
                finalPrice = flowerQuantity * narcissusPrice * 1.15;
            } else {
                finalPrice = flowerQuantity * narcissusPrice;
            }
            break;
        case "Gladiolus":
            if (flowerQuantity < 80) {
                finalPrice = flowerQuantity * gladiolusPrice * 1.2;
            } else {
                finalPrice = flowerQuantity * gladiolusPrice;
            }
            break;
    }

    let difference = Math.abs(budget - finalPrice);

    if (budget >= finalPrice) {
        console.log(`Hey, you have a great garden with ${flowerQuantity} ${flowerType} and ${difference.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${difference.toFixed(2)} leva more.`);
    }

}
newHouse(["Tulips", "88", "260"])


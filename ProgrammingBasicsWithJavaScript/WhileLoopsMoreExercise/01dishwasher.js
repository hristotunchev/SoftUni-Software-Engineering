function dishwasher(input) {
    let index = 0;

    let bottles = Number(input[index++]);
    let command = input[index++];

    let detergent = bottles * 750;
    let detForOneDish = 5;
    let detForOnePot = 15;

    let cleanDishesCounter = 0;
    let cleanPotsCounter = 0;
    let loopsCounter = 0;

    let totalUsedDetergent = 0;
    let usedDetergent = 0;

    while (command !== "End") {
        loopsCounter++;
        let dishes = Number(command);

        if (loopsCounter % 3 === 0) {
            usedDetergent = dishes * detForOnePot;
            totalUsedDetergent += usedDetergent;
            cleanPotsCounter += dishes;
        } else {
            usedDetergent = dishes * detForOneDish;
            totalUsedDetergent += usedDetergent;
            cleanDishesCounter += dishes;
        }

        if (totalUsedDetergent > detergent) {
            break;
        }

        command = input[index++];
    }

    let diff = Math.abs(totalUsedDetergent - detergent);

    if (totalUsedDetergent > detergent) {
        console.log(`Not enough detergent, ${diff} ml. more necessary!`);
    } else {
        console.log(`Detergent was enough!`);
        console.log(`${cleanDishesCounter} dishes and ${cleanPotsCounter} pots were washed.`);
        console.log(`Leftover detergent ${diff} ml.`);
    }
}
dishwasher(['2', '53', '65', '55', 'End'])
//dishwasher(["1",
//    "10",
//    "15",
//    "10",
//    "12",
//    "13",
//    "30"
//    ])
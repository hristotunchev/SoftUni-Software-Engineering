function cinema(input) {
    let index = 0;

    let capacity = Number(input[index++]);
    let command = input[index++];

    let ticketPrice = 5;
    let income = 0;
    let freeSeats = capacity;

    let clientsCounter = 0;

    while (command !== "Movie time!") {
        let currentGroup = Number(command);
        clientsCounter += currentGroup;

        if (freeSeats >= currentGroup) {
            income += currentGroup * ticketPrice;
            freeSeats -= currentGroup;
        } else {
            console.log(`The cinema is full.`);
            break;
        }

        if (currentGroup % 3 === 0) {
            income -= 5;
        }

        command = input[index++];
    }

    if (command === "Movie time!") {
        console.log(`There are ${freeSeats} seats left in the cinema.`);
    }

    console.log(`Cinema income - ${income} lv.`);
}
cinema(["100",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "Movie time!"])


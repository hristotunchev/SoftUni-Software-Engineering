function counterStrike(input) {
    let health = Number(input.shift());

    let index = 0;

    let command = input[index++];

    let wonBattles = 0;

    while (command !== 'End of battle') {
        let distance = Number(command);

        if (health < distance) {
            return `Not enough energy! Game ends with ${wonBattles} won battles and ${health} energy`;
        } else {
            health -= distance;
            wonBattles++;
        }

        if (wonBattles % 3 === 0) {
            health += wonBattles;
        }

        command = input[index++];
    }

    if (command === 'End of battle') {
        return `Won battles: ${wonBattles}. Energy left: ${health}`;
    }
}
console.log(counterStrike((["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"])
)); 
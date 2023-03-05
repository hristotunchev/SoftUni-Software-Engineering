function memoryGame(input) {
    let sequence = input.shift().split(' ');

    let index = 0;

    let command = input[index++];

    let moves = 0;

    while (command !== 'end') {
        if (sequence.length == 0) {
            console.log(`You have won in ${moves} turns!`);
            break;
        }

        moves++;

        let values = command.split(' ');
        let firstIndex = Number(values[0]);
        let secondIndex = Number(values[1]);

        if (firstIndex < 0 || firstIndex >= sequence.length ||
            secondIndex < 0 || secondIndex >= sequence.length ||
            firstIndex === secondIndex) {
            let elementToAdd = `-${moves}a`;
            sequence.splice(sequence.length / 2, 0, elementToAdd, elementToAdd);
            console.log(`Invalid input! Adding additional elements to the board`);
            command = input[index++];
            continue;
        }

        if (sequence[firstIndex] === sequence[secondIndex]) {
            let matchingElement = sequence[firstIndex];
            if (firstIndex < secondIndex) {
                secondIndex -= 1;
            }
            sequence.splice(firstIndex, 1);
            sequence.splice(secondIndex, 1);
            console.log(`Congrats! You have found matching elements - ${matchingElement}!`);
        } else {
            console.log(`Try again!`);
        }

        command = input[index++];
    }

    if (command === 'end' && sequence.length == 0) {
        console.log(`You have won in ${moves} turns!`);
    } else if (command === 'end' && sequence.length > 1) {
        console.log(`Sorry you lose :(\n` +
            `${sequence.join(' ')}`);
    }
}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"]);
//memoryGame([
//    "a 2 4 a 2 4",
//    "0 3",
//    "0 2",
//    "0 1",
//    "0 1",
//    "end"])
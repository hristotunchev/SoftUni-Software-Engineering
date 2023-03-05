function movingTarget(input) {
    let sequence = input.shift().split(' ').map(Number);
    let index = 0;

    let command = input[index++];

    while (command !== 'End') {
        let operation = command.split(' ');
        let action = operation.shift();

        switch (action) {
            case 'Shoot':
                let shootIndex = Number(operation[0]);
                let shootPower = Number(operation[1]);

                if (shootIndex < 0 || shootIndex >= sequence.length) {
                    command = input[index++];
                    continue;
                }

                sequence.splice(shootIndex, 1, sequence[shootIndex] - shootPower);

                if (sequence[shootIndex] <= 0) {
                    sequence.splice(shootIndex, 1)
                }
                break;
            case 'Strike':
                let strikeIndex = Number(operation[0]);
                let strikeRadius = Number(operation[1]);

                if (strikeIndex - strikeRadius < 0 || strikeIndex + strikeRadius >= sequence.length) {
                    console.log(`Strike missed!`);
                    command = input[index++];
                    continue;
                }

                sequence.splice(strikeIndex - strikeRadius, strikeRadius * 2 + 1);
                break;
            case 'Add':
                let addIndex = Number(operation[0]);
                let addValue = Number(operation[1]);

                if (addIndex < 0 || addIndex >= sequence.length) {
                    console.log(`Invalid placement!`);
                    command = input[index++];
                    continue;
                }

                sequence.splice(addIndex, 0, addValue);
        }

        command = input[index++];
    }

    console.log(sequence.join('|'));
}
movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);
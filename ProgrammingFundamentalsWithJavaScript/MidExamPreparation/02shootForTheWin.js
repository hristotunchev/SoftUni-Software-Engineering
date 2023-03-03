function shootForTheWin(input) {
    let sequence = input.shift().split(' ').map(Number);

    let index = 0;

    let command = input[index++];

    let shotTargets = 0;

    while (command !== 'End') {
        let shootIndex = Number(command);

        if (shootIndex < 0 || shootIndex >= sequence.length) {
            command = input[index++];
            continue;
        }

        let current = sequence[shootIndex];

        if (current !== -1) {
            sequence[shootIndex] = -1;
            shotTargets++;
        }

        for (let i = 0; i < sequence.length; i++) {
            if (sequence[i] > current && sequence[i] !== -1) {
                sequence[i] -= current;
            } else if (sequence[i] <= current && sequence[i] !== -1) {
                sequence[i] += current;
            }
        }

        command = input[index++];
    }

    console.log(`Shot targets: ${shotTargets} -> ${sequence.join(' ')}`);
}
shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])
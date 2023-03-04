function heartDelivery(input) {
    let neighborhood = input.shift().split('@').map(Number);

    let index = 0;

    let command = input[index++];

    let lastPosition = 0;

    while (command !== 'Love!') {
        let operation = command.split(' ');
        let jumpIndex = Number(operation[1]) + lastPosition;

        if (jumpIndex < 0 || jumpIndex >= neighborhood.length) {
            jumpIndex = 0;
        }

        if (neighborhood[jumpIndex] === 0) {
            console.log(`Place ${jumpIndex} already had Valentine's day.`);
        } else {
            neighborhood[jumpIndex] -= 2;
            if (neighborhood[jumpIndex] === 0) {
                console.log(`Place ${jumpIndex} has Valentine's day.`);
            }
        }

        lastPosition = jumpIndex;

        command = input[index++];
    }

    let failedHouses = 0;

    for (let i = 0; i < neighborhood.length; i++) {
        if (neighborhood[i] > 0) {
            failedHouses++;
        }
    }

    if (failedHouses === 0) {
        console.log(`Cupid's last position was ${lastPosition}.\n` +
            `Mission was successful.`);
    } else {
        console.log(`Cupid's last position was ${lastPosition}.\n` +
            `Cupid has failed ${failedHouses} places.`);
    }
}
heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"]);
function cake(input) {
    let index = 0;

    let cakeWidth = Number(input[index++]);
    let cakeLength = Number(input[index++]);

    let command = input[index++];

    let pieces = cakeWidth * cakeLength;
    let piecesLeft = pieces;

    while (command !== "STOP") {
        let consumption = Number(command);

        if (piecesLeft >= 0) {
            piecesLeft -= consumption;
        }

        if (piecesLeft <= 0) {
            let diff = Math.abs(piecesLeft);
            console.log(`No more cake left! You need ${diff} pieces more.`);
            break;
        }

        command = input[index++];
    }

    if (command === "STOP" && piecesLeft >= 0) {
        console.log(`${piecesLeft} pieces are left.`);
    }
}
cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"])



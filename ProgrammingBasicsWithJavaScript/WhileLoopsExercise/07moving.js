function moving(input) {
    let index = 0;

    let freeSpaceWidth = Number(input[index++]);
    let freeSpaceLength = Number(input[index++]);
    let freeSpaceHeight = Number(input[index++]);

    let totalFreeSpace = freeSpaceWidth * freeSpaceLength * freeSpaceHeight;
    let freeSpace = totalFreeSpace;

    let command = input[index++];

    while (command !== "Done") {
        let boxes = Number(command);

        if (freeSpace >= 0) {
            freeSpace -= boxes;
        }

        if (freeSpace <= 0) {
            let diff = Math.abs(freeSpace);
            console.log(`No more free space! You need ${diff} Cubic meters more.`);
            break;
        }

        command = input[index++];
    }

    if (command === "Done") {
        console.log(`${freeSpace} Cubic meters left.`);
    }
}
moving(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"])

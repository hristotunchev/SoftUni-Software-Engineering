function suitcasesLoad(input) {
    let index = 0;

    let capacity = Number(input[index++]);

    let command = input[index++];

    let suitcaseCounter = 0;
    let loadedCounter = 0;

    let freeSpace = capacity;

    while (command !== "End") {
        let suitcase = Number(command);
        suitcaseCounter++;

        if (suitcaseCounter % 3 === 0) {
            suitcase *= 1.1;
        }

        if (freeSpace >= suitcase) {
            loadedCounter++;
            freeSpace -= suitcase;
        } else {
            console.log(`No more space!`);
            break;
        }

        command = input[index++];
    }

    if (command === "End") {
        console.log(`Congratulations! All suitcases are loaded!`);
    }

    console.log(`Statistic: ${loadedCounter} suitcases loaded.`);
}
suitcasesLoad(["700.5",
    "180",
    "340.6",
    "126",
    "220"])


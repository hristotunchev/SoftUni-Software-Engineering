function trekkingMania(input) {
    let index = 0;

    let groupsCount = Number(input[index++]);

    let musalaCounter = 0;
    let montblancCounter = 0;
    let kilimanjaroCounter = 0;
    let k2Counter = 0;
    let everestCounter = 0;

    for (let i = 1; i <= groupsCount; i++) {
        let hikersInGroup = Number(input[index++]);

        if (hikersInGroup <= 5) {
            musalaCounter += hikersInGroup;
        } else if (hikersInGroup > 5 && hikersInGroup <= 12) {
            montblancCounter += hikersInGroup;
        } else if (hikersInGroup > 12 && hikersInGroup <= 25) {
            kilimanjaroCounter += hikersInGroup;
        } else if (hikersInGroup > 25 && hikersInGroup <= 40) {
            k2Counter += hikersInGroup;
        } else {
            everestCounter += hikersInGroup;
        }
    }

    let totalHikers = musalaCounter + montblancCounter + kilimanjaroCounter + k2Counter + everestCounter;

    let musalaPercentage = musalaCounter / totalHikers * 100;
    let montblancPercentage = montblancCounter / totalHikers * 100;
    let kilimanjaroPercentage = kilimanjaroCounter / totalHikers * 100;
    let k2Percentage = k2Counter / totalHikers * 100;
    let everestPercentage = everestCounter / totalHikers * 100;

    console.log(`${musalaPercentage.toFixed(2)}%`);
    console.log(`${montblancPercentage.toFixed(2)}%`);
    console.log(`${kilimanjaroPercentage.toFixed(2)}%`);
    console.log(`${k2Percentage.toFixed(2)}%`);
    console.log(`${everestPercentage.toFixed(2)}%`);
}
trekkingMania(["5",
    "25",
    "41",
    "31",
    "250",
    "6"])

function trekkingMania(input) {
    let index = 0;
    let groupsCount = Number(input[index++]);

    let musalaCounter = 0;
    let montblancCounter = 0;
    let kilimanjaroCounter = 0;
    let k2Counter = 0;
    let everestCounter = 0;

    for (let i = 0; i < groupsCount; i++) {
        let hikersInGroup = Number(input[index++]);

        if (hikersInGroup <= 5) {
            musalaCounter += hikersInGroup;
        } else if (hikersInGroup >= 6 && hikersInGroup <= 12) {
            montblancCounter += hikersInGroup;
        } else if (hikersInGroup >= 13 && hikersInGroup <= 25) {
            kilimanjaroCounter += hikersInGroup;
        } else if (hikersInGroup >= 26 && hikersInGroup <= 40) {
            k2Counter += hikersInGroup;
        } else {
            everestCounter += hikersInGroup;
        }
    }

    let totalHikersCounter = musalaCounter + montblancCounter + kilimanjaroCounter + k2Counter + everestCounter;
    let musalaPercentage = musalaCounter / totalHikersCounter * 100;
    let montblancPercentage = montblancCounter / totalHikersCounter * 100;
    let kilimanjaroPercentage = kilimanjaroCounter / totalHikersCounter * 100;
    let k2Percentage = k2Counter / totalHikersCounter * 100;
    let everestPercentage = everestCounter / totalHikersCounter * 100;
    
    console.log(`${musalaPercentage.toFixed(2)}%`);
    console.log(`${montblancPercentage.toFixed(2)}%`);
    console.log(`${kilimanjaroPercentage.toFixed(2)}%`);
    console.log(`${k2Percentage.toFixed(2)}%`);
    console.log(`${everestPercentage.toFixed(2)}%`);
}
trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])

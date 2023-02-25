function spiceMustFlow(startingYield) {
    let currentDayYield = startingYield;

    let daysCounter = 0;
    let spiceStorage = 0;

    while (currentDayYield >= 100) {
        daysCounter++;
        spiceStorage += currentDayYield - 26;
        currentDayYield -= 10;
    }

    spiceStorage -= 26;

    if (spiceStorage < 0) {
        spiceStorage = 0;
    }

    console.log(daysCounter);
    console.log(spiceStorage);
}
spiceMustFlow(111);
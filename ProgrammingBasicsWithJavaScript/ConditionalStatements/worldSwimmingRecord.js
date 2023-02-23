function worldSwimmingRecord(input) {
    const secondsWorldRecord = Number(input[0]);
    const meters = Number(input[1]);
    const secondsPerMeter = Number(input[2]);

    const secondsAdded = Math.floor(meters / 15) * 12.5;
    const swimmingTime = meters * secondsPerMeter + secondsAdded;

    if (swimmingTime >= secondsWorldRecord) {
        const secondsSlower = swimmingTime - secondsWorldRecord;
        console.log(`No, he failed! He was ${secondsSlower.toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${swimmingTime.toFixed(2)} seconds.`);
    }

}
worldSwimmingRecord(["55555.67",
    "3017",
    "5.03"])


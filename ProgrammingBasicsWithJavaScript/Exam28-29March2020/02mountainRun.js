function mountainRun(input) {
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeFor1MeterInSeconds = Number(input[2]);

    let addedTimePerMeter = (Math.floor(distanceInMeters / 50)) * 30;
    let totalTime = (distanceInMeters * timeFor1MeterInSeconds) + addedTimePerMeter;
    let diff = Math.abs(recordInSeconds - totalTime);

    if (totalTime < recordInSeconds) {
        console.log(` Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
    }
}
mountainRun(["1377",
    "389",
    "3"])



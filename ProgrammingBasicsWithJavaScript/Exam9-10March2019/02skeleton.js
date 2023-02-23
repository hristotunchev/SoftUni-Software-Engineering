function skeleton(input) {
    let targetMinutes = Number(input[0]);
    let targetSeconds = Number(input[1]);
    let trackLength = Number(input[2]);
    let secondFor100Meters = Number(input[3]);

    let target = (targetMinutes * 60) + targetSeconds;

    let cutSeconds = (trackLength / 120) * 2.5;

    let totalTime = ((trackLength / 100) * secondFor100Meters) - cutSeconds;
    let diff = Math.abs(totalTime - target);

    if (totalTime <= target) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${totalTime.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`);
    }
}
skeleton(["1",
    "20",
    "1546",
    "12"])

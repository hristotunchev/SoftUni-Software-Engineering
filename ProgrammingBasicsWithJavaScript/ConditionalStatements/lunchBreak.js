function lunchBreak(input) {
    const tvSeries = input[0];
    const epDuration = Number(input[1]);
    const breakTime = Number(input[2]);

    const lunchTime = breakTime / 8;
    const restTime = breakTime / 4;

    const totalTime = lunchTime + restTime + epDuration;

    if (totalTime > breakTime) {
        let timeNeeded = totalTime - breakTime;
        console.log(`You don't have enough time to watch ${tvSeries}, you need ${Math.ceil(timeNeeded)} more minutes.`);
    } else {
        let timeLeft = breakTime - totalTime;
        console.log(`You have enough time to watch ${tvSeries} and left with ${Math.ceil(timeLeft)} minutes free time.`);
    }
}
lunchBreak(["Game of Thrones",
    "60",
    "96"])
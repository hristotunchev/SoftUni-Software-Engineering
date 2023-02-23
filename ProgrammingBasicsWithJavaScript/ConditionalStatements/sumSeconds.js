function sumSeconds(input) {
    const timeFirst = Number(input[0]);
    const timeSecond = Number(input[1]);
    const timeThird = Number(input[2]);

    const totalTime = timeFirst + timeSecond + timeThird;

    const minutes = totalTime / 60;
    const seconds = totalTime % 60;
    
    if (seconds < 10) {
        console.log(`${Math.floor(minutes)}:0${seconds}`);
    } else {
        console.log(`${Math.floor(minutes)}:${seconds}`);
    }
}
    sumSeconds(["35", "45", "44"])
function movieDay(input) {
    let timeForShooting = Number(input[0]);
    let scenesCount = Number(input[1]);
    let timeForOneScene = Number(input[2]);

    let time = scenesCount * timeForOneScene;
    let timeWithPrep = timeForShooting * 0.85;
    let diff = Math.abs(timeWithPrep - time);

    if (timeWithPrep >= time) {
        console.log(`You managed to finish the movie on time! You have ${Math.round(diff)} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${diff} minutes.`);
    }
}
movieDay(["120",
    "10",
    "11"])

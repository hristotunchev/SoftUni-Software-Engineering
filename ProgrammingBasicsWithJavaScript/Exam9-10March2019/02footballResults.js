function footballResults(input) {
    let firstGame = input[0];
    let secondGame = input[1];
    let thirdGame = input[2];

    let won = 0;
    let lost = 0;
    let drawn = 0;

    if (parseInt(firstGame[0]) > parseInt(firstGame[2])) {
        won++;
    } else if (parseInt(firstGame[0]) < parseInt(firstGame[2])) {
        lost++;
    } else {
        drawn++;
    }

    if (parseInt(secondGame[0]) > parseInt(secondGame[2])) {
        won++;
    } else if (parseInt(secondGame[0]) < parseInt(secondGame[2])) {
        lost++;
    } else {
        drawn++;
    }

    if (parseInt(thirdGame[0]) > parseInt(thirdGame[2])) {
        won++;
    } else if (parseInt(thirdGame[0]) < parseInt(thirdGame[2])) {
        lost++;
    } else {
        drawn++;
    }

    console.log(`Team won ${won} games.`);
    console.log(`Team lost ${lost} games.`);
    console.log(`Drawn games: ${drawn}`);
}
footballResults(["4:2",
    "0:3",
    "1:0"])

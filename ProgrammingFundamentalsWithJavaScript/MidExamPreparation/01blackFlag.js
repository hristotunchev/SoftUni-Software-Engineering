function blackFlag(input) {
    let inputNumsArr = input.map(Number);

    let daysPlunder = inputNumsArr.shift();

    let dailyPlunder = inputNumsArr.shift();

    let goalPlunder = inputNumsArr.shift();

    let plunderCounter = 0;

    for (let i = 1; i <= daysPlunder; i++) {
        let currentPlunder = dailyPlunder;

        if (i % 3 === 0 && i % 5 === 0) {
            currentPlunder *= 1.5;
            plunderCounter += currentPlunder;
            plunderCounter *= 0.7;
            continue;
        }

        if (i % 3 === 0) {
            currentPlunder *= 1.5;
            plunderCounter += currentPlunder;
        } else if (i % 5 === 0) {
            plunderCounter += currentPlunder;
            plunderCounter *= 0.7;
        } else {
            plunderCounter += currentPlunder;
        }
    }
    
    if (plunderCounter >= goalPlunder) {
        console.log(`Ahoy! ${plunderCounter.toFixed(2)} plunder gained.`);
    } else {
        let percentage = plunderCounter / goalPlunder * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}
blackFlag((["5", "40", "100"]));

blackFlag((["10",
    "20",
    "380"]));
function vetParking(input) {
    let days = Number(input[0]);
    let hoursPerDay = Number(input[1]);

    let evenDayOddHourPrice = 2.5;
    let oddDayEvenHourPrice = 1.25;
    let restPrice = 1;

    let evenDayOddHourCounter = 0;
    let oddDayEvenHourCounter = 0;
    let restCounter = 0;

    let totalPrice = 0;

    for (let d = 1; d <= days; d++) {
        for (let h = 1; h <= hoursPerDay; h++) {
            if (d % 2 === 0 && h % 2 !== 0) {
                evenDayOddHourCounter++;
            } else if (d % 2 !== 0 && h % 2 === 0) {
                oddDayEvenHourCounter++;
            } else {
                restCounter++;
            }
        }

        let dayPrice = evenDayOddHourCounter * evenDayOddHourPrice + oddDayEvenHourCounter * oddDayEvenHourPrice + restCounter * restPrice;
        totalPrice += dayPrice;

        evenDayOddHourCounter = 0;
        oddDayEvenHourCounter = 0;
        restCounter = 0;

        console.log(`Day: ${d} - ${dayPrice.toFixed(2)} leva`);
    }
    
    console.log(`Total: ${totalPrice.toFixed(2)} leva`);
}
vetParking(["2",
    "5"])

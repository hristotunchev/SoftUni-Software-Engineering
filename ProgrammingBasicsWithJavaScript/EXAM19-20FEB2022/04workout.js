function workout(input) {
    let index = 0;

    let days = Number(input[index++]);
    let firstDaysKms = Number(input[index++]);
    let kmsCounter = firstDaysKms;
    let currentDayKms = firstDaysKms;

    for (let i = 0; i < days; i++) {
        let currentDayPercentMoreKms = Number(input[index++]);
        let kmsMore = (currentDayPercentMoreKms / 100) * currentDayKms;
        currentDayKms += kmsMore;
        kmsCounter += currentDayKms;
    }

    let diff = Math.abs(kmsCounter - 1000);
    
    if (kmsCounter >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(diff)} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(diff)} more kilometers`);
    }
}
workout(["5",
    "30",
    "10",
    "15",
    "20",
    "5",
    "12"])

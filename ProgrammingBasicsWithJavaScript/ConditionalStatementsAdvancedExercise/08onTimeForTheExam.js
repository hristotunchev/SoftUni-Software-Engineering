function onTimeForTheExam(input) {
    const examHour = Number(input[0]);
    const examMinute = Number(input[1]);
    const arrivalHour = Number(input[2]);
    const arrivalMinute = Number(input[3]);

    const totalExamMinutes = examHour * 60 + examMinute;
    const totalArrivalMinutes = arrivalHour * 60 + arrivalMinute;
    const differenceInTime = Math.abs(totalExamMinutes - totalArrivalMinutes);
    const hourDifference = Math.floor(differenceInTime / 60);

    let minDifference = differenceInTime % 60;

    if (minDifference === 0 || (minDifference < 10 && hourDifference > 0)) {
        minDifference = `0${minDifference}`;
    }
    
    if (totalArrivalMinutes === totalExamMinutes) {
        console.log("On time");
    } else if (totalArrivalMinutes > totalExamMinutes && differenceInTime < 60) {
        console.log("Late");
        console.log(`${minDifference} minutes after the start`);
    } else if (totalArrivalMinutes > totalExamMinutes && differenceInTime >= 60) {
        console.log("Late");
        console.log(`${hourDifference}:${minDifference} hours after the start`);
    } else if (differenceInTime <= 30) {
        console.log("On time");
        console.log(`${minDifference} minutes before the start`);
    } else if (differenceInTime > 30 && differenceInTime < 60) {
        console.log("Early");
        console.log(`${minDifference} minutes before the start`);
    } else {
        console.log("Early");
        console.log(`${hourDifference}:${minDifference} hours before the start`);
    }
}
onTimeForTheExam(["9",
    "00",
    "8",
    "30"])


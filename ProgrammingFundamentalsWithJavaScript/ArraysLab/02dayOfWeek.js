function dayOfWeek(num) {
    if (num < 0 || num > 7) {
        console.log("Invalid day!");
    } else {
        let daysArr = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ]

        console.log(daysArr[num - 1]);
    }
}
dayOfWeek(1)
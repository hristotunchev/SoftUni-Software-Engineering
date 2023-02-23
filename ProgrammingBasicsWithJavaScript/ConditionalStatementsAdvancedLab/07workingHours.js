function workingHours(input) {
    const hour = Number(input[0]);
    const day = input[1];

    if (hour >= 10 && hour < 18) {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday": console.log("open");
                break;
        }
    } else {
        console.log("closed");
    }
}
workingHours(["10", "Saturday"])
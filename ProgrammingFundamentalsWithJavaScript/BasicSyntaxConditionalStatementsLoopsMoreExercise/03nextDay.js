function nextDay(year, month, day) {
    let today = new Date(year, month - 1, day);

    let nextDay = new Date(today);

    nextDay.setDate(today.getDate() + 1);

    console.log(nextDay);
}
nextDay(2016, 9, 30)
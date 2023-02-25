function requiredReading(pagesCount, pagesPerHour, daysForReading) {
    let totalTimeForBook = pagesCount / pagesPerHour;

    let hoursPerDay = totalTimeForBook / daysForReading;

    console.log(hoursPerDay);
}
requiredReading(212, 20, 2)
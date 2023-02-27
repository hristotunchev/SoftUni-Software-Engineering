function formatGrade(grade) {
    let comment = "";

    let formatGrade = grade.toFixed(2);

    if (grade < 3.00) {
        formatGrade = 2;
        comment = "Fail";
    } else if (grade < 3.50) {
        comment = "Poor";
    } else if (grade < 4.50) {
        comment = "Good";
    } else if (grade < 5.50) {
        comment = "Very good";
    } else {
        comment = "Excellent";
    }

    console.log(`${comment} (${formatGrade})`);
}
formatGrade(3.33)
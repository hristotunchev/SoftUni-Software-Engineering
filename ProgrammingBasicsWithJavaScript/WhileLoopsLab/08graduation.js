function graduation(input) {
    let index = 0;

    let name = input[index++];

    let gradeCounter = 0;
    let failedCounter = 0;
    let i = 1;

    let isExcluded = false

    while (i <= 12) {
        let grade = Number(input[index++]);
        gradeCounter += grade;
        if (grade < 4) {
            failedCounter++;
            if (failedCounter > 1) {
                isExcluded = true;
                console.log(`${name} has been excluded at ${i} grade`);
                break;
            }
            continue;
        }
        i++;
    }

    if (!isExcluded) {
        let avgGrade = gradeCounter / 12;
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }
}
graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])

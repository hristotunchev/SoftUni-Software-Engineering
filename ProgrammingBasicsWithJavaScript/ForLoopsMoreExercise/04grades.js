function grades(input) {
    let index = 0;

    let studentsCount = Number(input[index++]);

    let topStudentsCounter = 0;
    let goodStudentsCounter = 0;
    let avStudentsCounter = 0;
    let failedStudentsCounter = 0;
    let gradesCounter = 0;

    for (let i = 0; i < studentsCount; i++) {
        let grade = Number(input[index++])
        gradesCounter += grade;
        if (grade < 3) {
            failedStudentsCounter++;
        } else if (grade >= 3 && grade < 4) {
            avStudentsCounter++;
        } else if (grade >= 4 && grade < 5) {
            goodStudentsCounter++;
        } else {
            topStudentsCounter++;
        }
    }

    let topStudentsPercentage = topStudentsCounter / studentsCount * 100;
    let goodStudentsPercentage = goodStudentsCounter / studentsCount * 100;
    let averageStudentsPercentage = avStudentsCounter / studentsCount * 100;
    let failedStudentsPercentage = failedStudentsCounter / studentsCount * 100;
    let averageGrade = gradesCounter / studentsCount;

    console.log(`Top students: ${topStudentsPercentage.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${goodStudentsPercentage.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${averageStudentsPercentage.toFixed(2)}%`);
    console.log(`Fail: ${failedStudentsPercentage.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);
}
grades(['10',
    '3.00',
    '2.99',
    '5.68',
    '3.01',
    '4',
    '4',
    '6.00',
    '4.50',
    '2.44',
    '5'
])
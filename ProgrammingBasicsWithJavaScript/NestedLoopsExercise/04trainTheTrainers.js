function trainTheTrainers(input) {
    let index = 0;
    let juryCount = Number(input[index++]);
    let command = input[index++];
    let gradesCounter = 0;
    let averageGrade = 0;
    while (command !== "Finish") {
        let presentationName = command;
        let tempAvgGrade = 0;
        for (let i = 1; i <= juryCount; i++) {
            let grade = Number(input[index++]);
            gradesCounter++;
            tempAvgGrade += grade;
        }
        averageGrade += tempAvgGrade;
        console.log(`${presentationName} - ${(tempAvgGrade / juryCount).toFixed(2)}.`);
        command = input[index++];
    }
    console.log(`Student's final assessment is ${(averageGrade / gradesCounter).toFixed(2)}.`);
}
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


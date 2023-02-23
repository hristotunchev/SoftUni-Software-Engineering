function examPreparation(input) {
    let index = 0;

    let countOfBadGrades = Number(input[index++]);

    let command = input[index++];

    let numberOfProblems = 0;
    let sumGrades = 0;
    let badGrades = 0;

    let lastProblemName = "";

    while (command !== "Enough") {
        lastProblemName = command;

        numberOfProblems++;

        let grade = Number(input[index++]);

        sumGrades += grade;

        if (grade <= 4) {
            badGrades++;
        }

        if (badGrades >= countOfBadGrades) {
            console.log(`You need a break, ${badGrades} poor grades.`);
            break;
        }

        command = input[index++];
    }

    if (command === "Enough") {
        let avgGrade = sumGrades / numberOfProblems;
        console.log(`Average score: ${avgGrade.toFixed(2)}`);
        console.log(`Number of problems: ${numberOfProblems}`);
        console.log(`Last problem: ${lastProblemName}`);
    }
}
examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])


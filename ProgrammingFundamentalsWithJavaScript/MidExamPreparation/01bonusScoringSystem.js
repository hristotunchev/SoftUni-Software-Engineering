function bonusScoringSystem(input) {
    let inputNums = input.map(Number);

    let studentsCount = inputNums.shift();

    let lecturesCount = inputNums.shift();

    let additionalBonus = inputNums.shift();

    let maxAttendance = 0;

    let maxBonus = 0;

    //let bonusArr = [];

    for (let i = 0; i < studentsCount; i++) {
        let attendance = inputNums[i];

        if (attendance > maxAttendance) {
            maxAttendance = attendance;
        }

        let bonus = Math.ceil(attendance / lecturesCount * (5 + additionalBonus));

        if (bonus > maxBonus) {
            maxBonus = bonus;
        }

        //bonusArr.push(bonus);
    }

    //bonusArr = bonusArr.sort((a, b) => b - a);
    //let maxBonus = bonusArr.shift();

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.\n` +
        `The student has attended ${Math.ceil(maxAttendance)} lectures.`);
}
bonusScoringSystem(['5', '25', '30', '12', '19', '24', '16', '20']);
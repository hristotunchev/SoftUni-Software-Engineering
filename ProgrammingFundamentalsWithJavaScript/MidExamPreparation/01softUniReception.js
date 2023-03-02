function softUniReception(input) {
    let inputNumsArr = input.map(Number);

    let students = inputNumsArr.pop();

    let hoursCounter = 0;
    let studentsPerHour = 0;

    inputNumsArr.forEach(x => studentsPerHour += x);

    for (let i = 1; students > 0; i++) {
        hoursCounter++;

        if (i % 4 === 0) {
            continue;
        }

        students -= studentsPerHour;
    }
    
    console.log(`Time needed: ${hoursCounter}h.`);
}
softUniReception(['5','6','4','20']);
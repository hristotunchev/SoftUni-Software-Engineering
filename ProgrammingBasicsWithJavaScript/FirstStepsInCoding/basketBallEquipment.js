function basketballEquipment(input) {
    const tax = Number(input[0]);
    const trainers = tax - tax * 0.4;
    const equipment = trainers - trainers * 0.2;
    const ball = equipment * 0.25;
    const accessoaries = ball * 0.2;

    const finalSum = tax + trainers + equipment + ball + accessoaries;
    
    console.log(finalSum);
}
basketballEquipment([365])
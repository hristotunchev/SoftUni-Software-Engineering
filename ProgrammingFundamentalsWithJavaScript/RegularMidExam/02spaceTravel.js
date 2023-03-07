function spaceTravel(input) {
    let ammunition = Number(input.pop());
    let fuel = Number(input.pop());

    let routeToTitan = input.shift().split('||');

    let index = 0;

    let command = routeToTitan[index++];

    while (command !== 'Titan') {
        let operation = command.split(' ');
        let action = operation[0];

        switch (action) {
            case 'Travel':
                let travelDistance = Number(operation[1]);

                if (travelDistance > fuel) {
                    console.log(`Mission failed.`);
                    return;
                } else {
                    fuel -= travelDistance;
                    console.log(`The spaceship travelled ${travelDistance} light-years.`);
                }
                break;
            case 'Enemy':
                let enemyArmour = Number(operation[1]);

                if (ammunition >= enemyArmour) {
                    ammunition -= enemyArmour;
                    console.log(`An enemy with ${enemyArmour} armour is defeated.`);
                } else if (ammunition < enemyArmour && enemyArmour * 2 <= fuel) {
                    fuel -= enemyArmour * 2;
                    console.log(`An enemy with ${enemyArmour} armour is outmaneuvered.`);
                } else {
                    console.log(`Mission failed.`);
                    return;
                }
                break;
            case 'Repair':
                let fuelAdded = Number(operation[1]);
                let ammunitionAdded = fuelAdded * 2;

                fuel += fuelAdded;
                ammunition += ammunitionAdded;

                console.log(`Ammunitions added: ${ammunitionAdded}.\n` +
                    `Fuel added: ${fuelAdded}.`);
                break;
        }

        command = routeToTitan[index++];
    }

    if (command === 'Titan') {
        console.log(`You have reached Titan, all passengers are safe.`);
        return;
    }
}
spaceTravel(['Travel 10||Enemy 30||Repair 15||Titan',
    '50',
    '80']);

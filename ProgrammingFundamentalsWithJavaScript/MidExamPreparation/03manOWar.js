function manOWar(input) {
    let pirateShipStatus = input.shift().split('>').map(Number);
    let warShipStatus = input.shift().split('>').map(Number);

    let maximumHealth = +input.shift();

    let index = 0;

    let command = input[index++];

    while (command !== 'Retire') {
        let operation = command.split(' ');
        let action = operation.shift();

        switch (action) {
            case 'Fire':
                let fireIndex = Number(operation[0]);
                let damageWarShip = Number(operation[1]);

                if (fireIndex < 0 || fireIndex >= warShipStatus.length) {
                    command = input[index++];
                    continue;
                }

                warShipStatus[fireIndex] -= damageWarShip;

                if (warShipStatus[fireIndex] <= 0) {
                    console.log(`You won! The enemy ship has sunken.`);
                    return;
                }
                break;
            case 'Defend':
                let startIndex = Number(operation[0]);
                let endIndex = Number(operation[1]);
                let damagePirateShip = Number(operation[2]);

                if (startIndex < 0 || startIndex >= pirateShipStatus.length ||
                    endIndex < 0 || endIndex >= pirateShipStatus.length) {
                    command = input[index++];
                    continue;
                }

                let damageRange = pirateShipStatus.slice(startIndex, endIndex + 1);
                damageRange = damageRange.map(x => x - damagePirateShip);

                for (let section of damageRange) {
                    if (section <= 0) {
                        console.log(`You lost! The pirate ship has sunken.`);
                        return;
                    }
                }

                pirateShipStatus.splice(startIndex, damageRange.length, ...damageRange);
                break;
            case 'Repair':
                let repairIndex = Number(operation[0]);
                let health = Number(operation[1]);

                if (repairIndex < 0 || repairIndex >= pirateShipStatus.length) {
                    command = input[index++];
                    continue;
                }

                if (pirateShipStatus[repairIndex] + health > maximumHealth) {
                    pirateShipStatus[repairIndex] = maximumHealth;
                } else {
                    pirateShipStatus[repairIndex] += health;
                }
                break;
            case 'Status':
                let repairLimit = maximumHealth * 0.2;
                let sectionsToRepair = 0;

                for (let section of pirateShipStatus) {
                    if (section < repairLimit) {
                        sectionsToRepair++;
                    }
                }

                console.log(`${sectionsToRepair} sections need repair.`);
                break;
        }

        command = input[index++];
    }

    let pirateShipSum = 0;

    pirateShipStatus.forEach(x => pirateShipSum += x);

    let warShipSum = 0;

    warShipStatus.forEach(x => warShipSum += x);

    console.log(`Pirate ship status: ${pirateShipSum}\n` +
        `Warship status: ${warShipSum}`);
}
manOWar((["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])
);
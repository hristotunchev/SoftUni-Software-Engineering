function treasureHunt(input) {
    let treasureChest = input.shift().split('|');

    let index = 0;

    let command = input[index++];

    while (command !== 'Yohoho!') {
        let operation = command.split(' ');
        let action = operation.shift();

        switch (action) {
            case 'Loot':
                for (let i = 0; i < operation.length; i++) {
                    let itemToLoot = operation[i];
                    if (!treasureChest.includes(itemToLoot)) {
                        treasureChest.unshift(itemToLoot);
                    }
                }
                break;
            case 'Drop':
                let indexToDrop = Number(operation[0]);
                if (indexToDrop >= 0 && indexToDrop < treasureChest.length) {
                    let itemToDrop = treasureChest.splice(indexToDrop, 1);
                    treasureChest.push(itemToDrop);
                }
                break;
            case 'Steal':
                let stolenItemsCount = Number(operation[0]);
                let stolenItems = treasureChest.splice(-stolenItemsCount);
                console.log(stolenItems.join(', '));
                break;
        }

        command = input[index++];
    }

    let sumLengths = 0;

    for (let el of treasureChest) {
        sumLengths += el.length;
    }

    if (sumLengths === 0) {
        console.log(`Failed treasure hunt.`);
    } else {
        let avgTreasureGain = sumLengths / treasureChest.length;
        console.log(`Average treasure gain: ${avgTreasureGain.toFixed(2)} pirate credits.`);
    }
}
treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
                "Loot Wood Gold Coins",
                "Loot Silver Pistol",
                "Drop 3",
                "Steal 3",
                "Yohoho!"]));
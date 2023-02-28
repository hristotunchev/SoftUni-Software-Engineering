function gladiatorInventory(inputArr) {
    let inventory = inputArr.shift().split(' ');

    for (let i = 0; i < inputArr.length; i++) {
        let currentOperation = inputArr[i].split(' ');

        let command = currentOperation.shift();

        let item = currentOperation[0];

        switch (command) {
            case 'Buy':
                if (!inventory.includes(item)) {
                    inventory.push(item);
                }
                break;
            case 'Trash':
                let indexToTrash = inventory.indexOf(item);
                if (indexToTrash >= 0) {
                    inventory.splice(indexToTrash, 1);
                }
                break;
            case 'Repair':
                let indexToRepair = inventory.indexOf(item);
                if (indexToRepair >= 0) {
                    inventory.push(inventory.splice(indexToRepair, 1));
                }
                break;
            case 'Upgrade':
                let upgradeItem = item.split('-');
                let indexToUpgrade = inventory.indexOf(upgradeItem[0]);
                if (indexToUpgrade >= 0) {
                    inventory.splice(indexToUpgrade + 1, 0, `${upgradeItem[0]}:${upgradeItem[1]}`);
                }
                break;
        }
    }

    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'])
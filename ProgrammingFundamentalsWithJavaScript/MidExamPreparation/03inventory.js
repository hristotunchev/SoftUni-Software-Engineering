function inventory(input) {
    let collection = input.shift().split(', ');

    let index = 0;

    let command = input[index++];

    while (command !== 'Craft!') {
        let tokens = command.split(' - ');
        let action = tokens[0];

        switch (action) {
            case 'Collect':
                let itemToCollect = tokens[1];

                if (collection.includes(itemToCollect)) {
                    command = input[index++];
                    continue;
                }

                collection.push(itemToCollect);
                break;
            case 'Drop':
                let itemToDrop = tokens[1];

                if (collection.includes(itemToDrop)) {
                    let dropIndex = collection.indexOf(itemToDrop);
                    collection.splice(dropIndex, 1);
                }
                break;
            case 'Combine Items':
                let items = tokens[1].split(':');
                let oldItem = items[0];
                let newItem = items[1];

                if (!collection.includes(oldItem)) {
                    command = input[index++];
                    continue;
                } else {
                    let oldItemIndex = collection.indexOf(oldItem);
                    collection.splice(oldItemIndex + 1, 0, newItem);
                }
                break;
            case 'Renew':
                let renewItem = tokens[1];

                if (collection.includes(renewItem)) {
                    let itemToRenew = collection.splice(collection.indexOf(renewItem), 1);
                    collection.push(itemToRenew);
                }
                break;
        }

        command = input[index++];
    }

    console.log(collection.join(', '));
}
inventory(['Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!']);
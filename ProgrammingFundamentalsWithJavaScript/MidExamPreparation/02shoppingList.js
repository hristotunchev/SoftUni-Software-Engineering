function shoppingList(input) {
    let list = input.shift().split('!');

    let index = 0;

    let command = input[index++];

    while (command !== "Go Shopping!") {
        let operation = command.split(' ');
        let status = operation[0];

        switch (status) {
            case 'Urgent':
                let urgentItem = operation[1];
                if (list.includes(urgentItem)) {
                    command = input[index++];
                    continue;
                } else
                    list.unshift(urgentItem);
                break;
            case 'Unnecessary':
                let unnecessaryItem = operation[1];
                if (list.indexOf(unnecessaryItem) !== -1) {
                    list.splice(list.indexOf(unnecessaryItem), 1);
                }
                break;
            case 'Correct':
                let oldItem = operation[1];
                let newItem = operation[2];
                if (list.indexOf(oldItem) !== -1) {
                    list.splice(list.indexOf(oldItem), 1, newItem);
                }
                break;
            case 'Rearrange':
                let rearrangeItem = operation[1];
                if (list.indexOf(rearrangeItem) !== -1) {
                    let pushItem = list.splice(list.indexOf(rearrangeItem), 1);
                    list.push(pushItem);
                }
                break;
        }

        command = input[index++];
    }

    console.log(list.join(', '));
}
//shoppingList(["Tomatoes!Potatoes!Bread",
//    "Unnecessary Milk",
//    "Urgent Tomatoes",
//    "Go Shopping!"]);
shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);

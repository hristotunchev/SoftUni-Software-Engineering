function arrayManipulations(inputArr) {
    let numbers = inputArr.shift().split(' ').map(Number);

    for (let i = 0; i < inputArr.length; i++) {
        let operations = inputArr[i].split(' ');
        let command = operations.shift();

        let value = [];
        let filtered = [];

        for (let j = 0; j < operations.length; j++) {
            value.push(Number(operations[j]));
        }

        switch (command) {
            case "Add":
                numbers.push(value[0]); break;
            case "Remove":
                numbers.filter(x => {
                    if (x !== value[0]) {
                        filtered.push(x);
                        numbers = filtered;
                    }
                }); break;
            case "RemoveAt":
                numbers.splice(value[0], 1); break;
            case "Insert":
                numbers.splice(value[1], 0, value[0]); break;
        }
    }

    console.log(numbers.join(' '));
}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])
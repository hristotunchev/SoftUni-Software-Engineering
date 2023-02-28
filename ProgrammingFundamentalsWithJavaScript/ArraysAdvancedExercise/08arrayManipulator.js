function arrayManipulator(numbersArr, commandsArr) {
    for (let i = 0; i < commandsArr.length; i++) {
        let operation = commandsArr[i].split(' ');

        let command = operation.shift();

        let values = operation.map(Number);

        switch (command) {
            case "add":
                let indexToAdd = values[0];
                let elementToAdd = values[1];
                numbersArr.splice(indexToAdd, 0, elementToAdd);
                break;
            case "addMany":
                let indexToAddMany = values.shift();
                numbersArr.splice(indexToAddMany, 0, ...values);
                break;
            case "contains":
                let searchedIndex = numbersArr.indexOf(values[0]);
                if (searchedIndex < 0) {
                    console.log(-1);
                } else {
                    console.log(searchedIndex);
                }
                break;
            case "remove":
                let indexToRemove = values[0];
                numbersArr.splice(indexToRemove, 1);
                break;
            case "shift":
                let rotations = values[0];
                for (let k = 0; k < rotations; k++) {
                    numbersArr.push(numbersArr.shift());
                }
                break;
            case "sumPairs":
                if (numbersArr.length % 2 == 1) {
                    numbersArr.push(0);
                }
                let sumArray = [];
                for (let l = 0; l < numbersArr.length; l += 2) {
                    let sumOfElements = numbersArr[l] + numbersArr[l + 1];
                    sumArray.push(sumOfElements);
                }
                numbersArr = [...sumArray];
                break;
            case "print":
                console.log(`[ ${numbersArr.join(', ')} ]`);
                break;
        }
    }
}
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])
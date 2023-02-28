function searchForANumber(array, commands) {
    let takeCount = commands.shift();
    let deleteCount = commands.shift();

    let searchedNumber = commands.shift();

    let resultArr = array.splice(0, takeCount);

    let deletedArr = resultArr.splice(0, deleteCount);

    let matchCounter = 0;

    for (let number of resultArr) {
        if (number === searchedNumber) {
            matchCounter++;
        }
    }

    console.log(`Number ${searchedNumber} occurs ${matchCounter} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3])
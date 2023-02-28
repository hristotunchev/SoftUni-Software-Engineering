function sortAnArrayByTwoCriteria(inputArr) {
    let sortedArr = inputArr.sort((a,b) => a.length - b.length || a.localeCompare(b));

    sortedArr.forEach(element => console.log(element));     // Instead of for-of loop!
}
sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
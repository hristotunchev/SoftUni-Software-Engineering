function oldBooks(input) {
    let index = 0;

    let favBook = input[index++];

    let isFound = false;
    let nextBookName = input[index++];

    let booksCounter = 0;

    while (nextBookName !== "No More Books") {
        booksCounter++
        if (nextBookName === favBook) {
            isFound = true;
            break;
        }
        nextBookName = input[index++];
    }
    if (isFound) {
        console.log(`You checked ${booksCounter - 1} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${booksCounter} books.`);
    }
}
oldBooks(["Troy",
    "Stronger",
    "Life Style",
    "Troy"])


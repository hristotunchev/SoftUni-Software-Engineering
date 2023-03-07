function schoolLibrary(input) {
    let bookShelf = input.shift().split('&');

    let index = 0;

    let command = input[index++];

    while (command !== 'Done') {
        let operation = command.split(' | ');
        let action = operation[0];

        switch (action) {
            case 'Add Book':
                let addBookName = operation[1];

                if (bookShelf.includes(addBookName)) {
                    command = input[index++];
                    continue;
                }

                bookShelf.unshift(addBookName);
                break;
            case 'Take Book':
                let takeBookName = operation[1];
                let takeBookIndex = bookShelf.indexOf(takeBookName);

                if (takeBookIndex !== -1) {
                    bookShelf.splice(takeBookIndex, 1);
                }
                break;
            case 'Swap Books':
                let swapBookOne = operation[1];
                let swapBookTwo = operation[2];

                let swapBookOneIndex = bookShelf.indexOf(swapBookOne);
                let swapBookTwoIndex = bookShelf.indexOf(swapBookTwo);

                if (swapBookOneIndex !== -1 && swapBookTwoIndex !== -1) {
                    let firstSwapBook = bookShelf[swapBookOneIndex];
                    let secondSwapBook = bookShelf[swapBookTwoIndex];

                    bookShelf.splice(swapBookOneIndex, 1, secondSwapBook);
                    bookShelf.splice(swapBookTwoIndex, 1, firstSwapBook);
                }
                break;
            case 'Insert Book':
                let insertBookName = operation[1];

                if (bookShelf.includes(insertBookName)) {
                    command = input[index++];
                    continue;
                }

                bookShelf.push(insertBookName);
                break;
            case 'Check Book':
                let checkBookIndex = Number(operation[1]);

                if (checkBookIndex < 0 || checkBookIndex >= bookShelf.length) {
                    command = input[index++];
                    continue;
                }

                console.log(`${bookShelf[checkBookIndex]}`);
                break;
        }

        command = input[index++];
    }

    console.log(bookShelf.join(', '));
}
//schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",
    //"Check Book | 2",
    //"Swap Books | Don Quixote | Ulysses",
    //"Done"]);
schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
    "Add Book | Ulysses",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Done"]);



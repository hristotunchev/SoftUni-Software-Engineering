function streamOfLetters(input) {
    let index = 0;

    let isO = false;
    let isN = false;
    let isC = false;

    let command = "";
    let word = "";
    let finalWord = "";

    while (command !== "End") {
        let command = input[index++];

        if (command === "End") {
            break;
        }

        if ((command >= "A" && command <= "Z") || (command >= "a" && command <= "z")) {
            switch (command) {
                case "c":
                    if (isC === true) {
                        word += command;
                    }
                    isC = true;
                    break;
                case "o":
                    if (isO === true) {
                        word += command;
                    }
                    isO = true;
                    break;
                case "n":
                    if (isN === true) {
                        word += command;
                    }
                    isN = true;
                    break;
                default:
                    word += command;
            }

            if (isC && isO && isN) {
                finalWord += word;
                isC = false;
                isN = false;
                isO = false;
                word = ` `;
            }
        }
    }

    console.log(finalWord);
}
streamOfLetters(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"])
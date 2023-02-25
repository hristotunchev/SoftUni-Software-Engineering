function rightPlace(firstWord, char, secondWord) {
    let result = "";

    for (let i = 0; i < firstWord.length; i++) {
        let currentChar = firstWord[i];
        if (currentChar !== "_") {
            result += currentChar;
        } else {
            result += char;
        }
    }

    if (result === secondWord) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
rightPlace('Str_ng', 'I', 'Strong')
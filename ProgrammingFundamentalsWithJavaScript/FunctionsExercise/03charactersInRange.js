function charactersInRange(firstChar, secondChar) {
    let startChar = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    let endChar = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    let result = [];

    for (let index = startChar + 1; index < endChar; index++) {
        let currentChar = String.fromCharCode(index);

        result.push(currentChar);
    }

    console.log(result.join(' '));
}
charactersInRange('a', 'd')
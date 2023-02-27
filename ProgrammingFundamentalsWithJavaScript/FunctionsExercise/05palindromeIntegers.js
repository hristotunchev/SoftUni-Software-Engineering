function palindromeIntegers(inputArray) {
    for (let el of inputArray) {
        let current = String(el);

        let reversed = String(el).split('').reverse().join('');

        if (current == reversed) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
palindromeIntegers([123, 323, 421, 121])
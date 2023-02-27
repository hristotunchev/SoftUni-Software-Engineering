function passwordValidator(password) {
    let isLettersAndNumbers = true;
    let isBetweenSixAndTen = true;
    let isTwoDigits = true;
    let digitCounter = 0;

    if (password.length < 6 || password.length > 10) {
        isBetweenSixAndTen = false;
    }

    for (let i = 0; i < password.length; i++) {
        let currentChar = password[i];
        let checkIfDigit = Number(currentChar);

        if (checkIfDigit * 1 === checkIfDigit) {
            digitCounter++;
        }
    }

    if (digitCounter < 2) {
        isTwoDigits = false;
    }

    for (let j = 0; j < password.length; j++) {
        if ((password.charCodeAt(j) >= 48 && password.charCodeAt(j) <= 57) ||
            (password.charCodeAt(j) >= 65 && password.charCodeAt(j) <= 90) ||
            (password.charCodeAt(j) >= 97 && password.charCodeAt(j) <= 122)) {
            isLettersAndNumbers = true;
        } else {
            isLettersAndNumbers = false;
            break;
        }
    }

    if (!isBetweenSixAndTen) {
        console.log(`Password must be between 6 and 10 characters`);
    }

    if (!isLettersAndNumbers) {
        console.log(`Password must consist only of letters and digits`);
    }

    if (!isTwoDigits) {
        console.log(`Password must have at least 2 digits`);
    }

    if (isBetweenSixAndTen && isTwoDigits && isLettersAndNumbers) {
        console.log(`Password is valid`);
    }
}
passwordValidator('Pa$s$s')
function passwordGuess(input) {
    const validPass = "s3cr3t!P@ssw0rd";

    const pass = (input[0]);

    if (pass === validPass) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}
passwordGuess(["s3cr3t!P@ssw0rd"])
function password(input) {
    let index = 0;

    let username = input[index++];
    let pass = input[index++];
    let passAttempt = input[index++];

    while (passAttempt !== pass) {
        passAttempt = input[index++];
    }

    console.log(`Welcome ${username}!`);
}
password(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"])

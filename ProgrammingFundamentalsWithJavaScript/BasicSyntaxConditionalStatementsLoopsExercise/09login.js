function login(input) {
    let index = 0;

    let username = input[index++];

    let password = '';

    let attemptCounter = 0;

    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }

    let command = input[index++];

    while (command !== password) {
        attemptCounter++;
        if (attemptCounter >= 4) {
            console.log(`User ${username} blocked!`);
            return;
        }
        console.log(`Incorrect password. Try again.`);
        command = input[index++];
    }

    if (command === password) {
        console.log(`User ${username} logged in.`);
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA'])
login(['momo', 'omom'])
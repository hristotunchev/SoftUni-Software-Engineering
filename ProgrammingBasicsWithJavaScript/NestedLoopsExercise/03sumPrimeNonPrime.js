function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index++];
    let primeSumCounter = 0;
    let nonPrimeSumCounter = 0;
    while (command !== "stop") {
        let num = Number(command);
        if (num < 0) {
            console.log(`Number is negative.`);
        } else {
            let isPrime = true;
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        if (isPrime) {
            primeSumCounter += num;
        } else {
            nonPrimeSumCounter += num;
        }
        }
        command = input[index++]
    }
    console.log(`Sum of all prime numbers is: ${primeSumCounter}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSumCounter}`);
}
sumPrimeNonPrime(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])

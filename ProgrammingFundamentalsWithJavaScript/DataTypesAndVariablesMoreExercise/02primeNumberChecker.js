function primeNumberChecker(n) {
    let prime = true;

    if (n <= 1) {
        prime = false;
    }

    let sqrtN = parseInt(Math.sqrt(n));

    for (let i = sqrtN; i > 1; i--) {
        if (n % i == 0) {
            prime = false;
            break;
        }
    }

    console.log(prime);
}
primeNumberChecker(7)
primeNumberChecker(8)
primeNumberChecker(81)
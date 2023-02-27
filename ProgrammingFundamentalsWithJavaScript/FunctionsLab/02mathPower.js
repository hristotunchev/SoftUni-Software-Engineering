function mathPower(num1, num2) {
    //let result = Math.pow(num1, num2);
    //let result = num1 ** num2;

    let result = 1;

    for (let i = 0; i < num2; i++) {
        result *= num1;
    }

    console.log(result);
}
mathPower(2, 8)
function carNumber(input) {
    let firstDigit = Number(input[0]);
    let lastDigit = Number(input[1]);
    let printLine = "";
    for (let a = firstDigit; a <= lastDigit; a++){
        for (let b = firstDigit; b <= lastDigit; b++){
            for (let c = firstDigit; c <= lastDigit; c++){
                for (let d = firstDigit; d <= lastDigit; d++){
                    if (((a % 2 === 0 && d % 2 !== 0) || (a % 2 !== 0 && d % 2 === 0)) && a > d && (b + c) % 2 === 0){
                        printLine += `${a}${b}${c}${d} `;
                    }
                }
            }
        }
    }
    console.log(printLine);
}
carNumber(["3", "5"])
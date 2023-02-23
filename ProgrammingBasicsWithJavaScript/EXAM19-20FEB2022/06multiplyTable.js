function multiplyTable(input){
    let num = input[0];
    let firstDigit = parseInt(num[2]);
    let secondDigit = parseInt(num[1]);
    let thirdDigit = parseInt(num[0]);
    
    for (let x = 1; x <= firstDigit; x++) {
        for (let y = 1; y <= secondDigit; y++){
            for (let z = 1; z <= thirdDigit; z++){
                console.log(`${x} * ${y} * ${z} = ${x * y * z};`);
            }
        }
    }
} 
multiplyTable(["324"])
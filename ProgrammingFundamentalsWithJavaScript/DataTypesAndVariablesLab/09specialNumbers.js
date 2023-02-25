function specialNumbers(num) {
    for (let i = 1; i <= num; i++) {
        let isSpecial = false;
        let sum = i;

        if (i > 10) {
            let iToString = String(i);
            sum = Number(iToString[0]) + Number(iToString[1]);
        }

        if (sum === 5 || sum === 7 || sum === 11) {
            isSpecial = true;
        }

        console.log(isSpecial ? `${i} -> True` : `${i} -> False`);
    }
}
specialNumbers(15)
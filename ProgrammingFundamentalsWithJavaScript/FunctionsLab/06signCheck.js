function signCheck(numOne, numTwo, numThree) {
    if (numOne > 0 && numTwo > 0 && numThree > 0) {
        return "Positive";
    } else if (numOne > 0 && numTwo < 1 && numThree < 1) {
        return "Positive";
    } else if (numOne < 1 && numTwo < 1 && numThree > 0) {
        return "Positive";
    } else if (numOne < 1 && numTwo > 0 && numThree < 1) {
        return "Positive";
    } else {
        return "Negative";
    }
}
console.log(signCheck(-6, -12, 14))
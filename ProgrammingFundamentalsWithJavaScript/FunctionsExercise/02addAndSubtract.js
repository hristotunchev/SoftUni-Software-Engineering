function addAndSubtract(numOne, numTwo, numThree) {
    let sumFirstAndSecond = sum(numOne, numTwo);

    function sum(first, second) {
        return first + second;
    }

    function subtract(result, third) {
        return result - third;
    }

    console.log(subtract(sumFirstAndSecond, numThree));
}
addAndSubtract(23, 6, 10)
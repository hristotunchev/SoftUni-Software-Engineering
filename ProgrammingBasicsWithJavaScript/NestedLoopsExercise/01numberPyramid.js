function numberPyramid(input){
    let targetNum = Number(input[0]);
    let currentNum = 0;
    let isEqual = false;
    for (let rows = 1; rows <= targetNum; rows++) {
        let printLine = "";
        for (cols = 1; cols <= rows; cols++) {
            currentNum++;
            printLine += currentNum + " ";
            if (currentNum === targetNum) {
                isEqual = true;
                break;
            }
        }
        console.log(printLine);
        if (isEqual) {
        break;
        }
    }
}
numberPyramid(["7"])
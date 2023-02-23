function minNumber(input){
    let index = 0;
    let command = input[index++];
    let minNum = Number.MAX_SAFE_INTEGER;

    while (command !== "Stop") {
        let num = Number(command);
        if (minNum > num) {
            minNum = num;
        }

    command = input[index++];
    }

    console.log(minNum);
}    
minNumber(["45",
"-20",
"7",
"99",
"Stop"])

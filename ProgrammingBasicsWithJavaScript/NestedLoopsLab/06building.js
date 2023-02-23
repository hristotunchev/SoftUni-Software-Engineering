function building(input) {
    const x = Number(input[0]);
    const y = Number(input[1]);

    for (let floor = x; floor > 0; floor--) {
        let res = "";

        for (let room = 0; room < y; room++) {
            if (floor === x) {
                res += `L${floor}${room} `;
            } else if (floor % 2 === 0) {
                res += `O${floor}${room} `;
            } else {
                res += `A${floor}${room} `;
            }
        }

        console.log(res);
    }
}
//building(["9", "5"])
building(["6", "4"])
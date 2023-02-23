function division(input) {
    let index = 0;
    let num = Number(input[index++]);

    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;

    for (let i = 1; i <= num; i++) {
        let tempNum = Number(input[index++]);

        if (tempNum % 2 === 0) {
            p1Counter++;
        }

        if (tempNum % 3 === 0) {
            p2Counter++;
        }

        if (tempNum % 4 === 0) {
            p3Counter++;
        }
    }

    let p1Percentage = (p1Counter / num) * 100;
    let p2Percentage = (p2Counter / num) * 100;
    let p3Percentage = (p3Counter / num) * 100;

    console.log(`${p1Percentage.toFixed(2)}%`);
    console.log(`${p2Percentage.toFixed(2)}%`);
    console.log(`${p3Percentage.toFixed(2)}%`);
}
division(["10",
    "680",
    "2",
    "600",
    "200",
    "800",
    "799",
    "199",
    "46",
    "128",
    "65"])

function bills(input) {
    let index = 0;

    let months = Number(input[index++]);

    let waterBill = 20;
    let internetBill = 15;
    let electricity = 0;

    let water = waterBill * months;
    let internet = internetBill * months;
    let other = 0;

    for (let i = 0; i < months; i++) {
        let elBill = Number(input[index++]);
        electricity += elBill;
        other += (elBill + waterBill + internetBill) * 1.2;
    }

    let avg = (electricity + water + internet + other) / months;

    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${other.toFixed(2)} lv`);
    console.log(`Average: ${avg.toFixed(2)} lv`);
}
// bills(['5',
//    '68.63',
//    '89.25',
//    '132.53',
//    '93.53',
//    '63.22',
//    ])
bills(['8',
    '123.54',
    '231.54',
    '140.23',
    '100',
    '122.4',
    '430',
    '178.52',
    '64.2'
])
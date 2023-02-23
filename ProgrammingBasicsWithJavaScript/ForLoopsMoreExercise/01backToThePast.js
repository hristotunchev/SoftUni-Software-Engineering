function backToThePast(input) {
    let index = 0;

    let money = Number(input[index++]);
    let endYear = Number(input[index++]);

    let currentYear = 1800;
    let age = 18;

    let finalMoney = money;

    for (let i = currentYear; i <= endYear; i++) {
        let evenYearSpend = 12000;
        let oddYearSpend = 12000 + (50 * age);

        if (i % 2 === 0) {
            finalMoney -= evenYearSpend;
        } else {
            finalMoney -= oddYearSpend;
        }

        age++;
        currentYear++;
    }

    if (finalMoney >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${finalMoney.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${Math.abs(finalMoney).toFixed(2)} dollars to survive.`);
    }
}
backToThePast(['100000.15',
    '1808'
])
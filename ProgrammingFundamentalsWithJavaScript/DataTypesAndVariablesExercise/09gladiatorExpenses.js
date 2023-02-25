function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let lostFightsCounter = 0;
    let trashedHelmetCounter = 0;
    let trashedSwordCounter = 0;
    let trashedShieldCounter = 0;
    let trashedArmorCounter = 0;

    for (let i = 1; i <= lostFights; i++) {
        lostFightsCounter++;

        if (lostFightsCounter % 2 === 0) {
            trashedHelmetCounter++;
        }

        if (lostFightsCounter % 3 === 0) {
            trashedSwordCounter++;
        }

        if (lostFightsCounter % 6 === 0) {
            trashedShieldCounter++;
        }

        if (lostFightsCounter % 12 === 0) {
            trashedArmorCounter++;
        }
    }
    let expenses = trashedHelmetCounter * helmetPrice + trashedSwordCounter * swordPrice + trashedShieldCounter * shieldPrice + trashedArmorCounter * armorPrice;

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5)
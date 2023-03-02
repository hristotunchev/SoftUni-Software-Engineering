function muOnline(input) {
    let roomsArr = input.split('|');

    let health = 100;
    let bitcoins = 0;
    let rooms = 0;

    let isWin = true;

    for (let i = 0; i < roomsArr.length; i++) {
        rooms++;

        let tokens = roomsArr[i].split(' ');
        let action = tokens[0];
        let value = Number(tokens[1]);

        switch (action) {
            case 'potion':
                if (health + value > 100) {
                    value = 100 - health;
                    health += value;
                } else {
                    health += value;
                }
                console.log(`You healed for ${value} hp.\n` +
                    `Current health: ${health} hp.`);
                break;
            case 'chest':
                bitcoins += value;
                console.log(`You found ${value} bitcoins.`);
                break;
            default:
                health -= value;
                if (health > 0) {
                    console.log(`You slayed ${action}.`);
                } else {
                    isWin = false;
                    console.log(`You died! Killed by ${action}.\n` +
                        `Best room: ${rooms}`);
                    return;
                }
                break;
        }
    }

    if (isWin) {
        console.log(`You've made it!\n` +
            `Bitcoins: ${bitcoins}\n` +
            `Health: ${health}`);
    }
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
// muOnline(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
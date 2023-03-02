function guineaPig(input) {
    let food = Number(input.shift());

    let hay = Number(input.shift());

    let cover = Number(input.shift());

    let pigWeight = Number(input.shift());

    let dailyFood = 0.3;

    let daysGoal = 30;

    for (let i = 1; i <= daysGoal; i++) {
        food -= dailyFood;

        if (i % 2 === 0) {
            let dailyHay = food * 0.05;
            hay -= dailyHay;
        }

        if (i % 3 === 0) {
            let dailyCover = pigWeight / 3;
            cover -= dailyCover;
        }

        if (food <= 0 || hay <= 0 || cover <= 0) {
            console.log(`Merry must go to the pet store!`);
            return;
        }
    }

    console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);
}
guineaPig(["10", "5", "5.2", "1"]);
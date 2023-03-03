function lift(input) {
    let peopleWaiting = Number(input.shift());

    let currentLiftState = input.shift().split(' ').map(Number);

    let maxWagonCapacity = 4;

    for (let i = 0; i < currentLiftState.length; i++) {
        if (peopleWaiting < 0) {
            peopleWaiting = 0;
            break;
        }

        let currentWagonState = currentLiftState[i];
        let peopleToAdd = maxWagonCapacity - currentWagonState;

        if (peopleWaiting < maxWagonCapacity) {
            peopleToAdd = peopleWaiting;
        }

        currentLiftState[i] += peopleToAdd;
        peopleWaiting -= peopleToAdd;
    }

    let isLiftFull = false;

    let maxLiftCapacity = currentLiftState.length * maxWagonCapacity;

    let peopleOnLift = 0

    currentLiftState.forEach(x => peopleOnLift += x);

    if (maxLiftCapacity - peopleOnLift === 0) {
        isLiftFull = true;
    }

    if (!isLiftFull && peopleWaiting === 0) {
        console.log(`The lift has empty spots!\n` +
            `${currentLiftState.join(' ')}`);
    } else if (isLiftFull && peopleWaiting > 0) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!\n` +
            `${currentLiftState.join(' ')}`);
    } else if (isLiftFull && peopleWaiting === 0) {
        console.log(`${currentLiftState.join(' ')}`);
    }
}
lift(["20", "0 2 0"]);

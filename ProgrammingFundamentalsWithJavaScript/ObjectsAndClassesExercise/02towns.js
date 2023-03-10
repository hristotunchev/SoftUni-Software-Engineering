function towns(townsArr) {
    let townObj = {};

    for (let currentTown of townsArr) {
        let [town, latitude, longitude] = currentTown.split(' | ');

        townObj.town = town;
        townObj.latitude = latitude;
        townObj.longitude = longitude;

        console.log(`{ town: '${townObj.town}', latitude: '${Number(townObj.latitude).toFixed(2)}', longitude: '${Number(townObj.longitude).toFixed(2)}' }`);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);
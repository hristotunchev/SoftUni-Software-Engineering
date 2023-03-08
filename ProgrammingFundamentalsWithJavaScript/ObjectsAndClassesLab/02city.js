function city(cityInfo) {
    for (let key of Object.keys(cityInfo)) {
        console.log(`${key} -> ${cityInfo[key]}`);
    }
    
    //for (let [key, value] of Object.entries(cityInfo)) {      // DESTRUCTURE ARRAY - Advanced
    //    console.log(`${key} -> ${value}`);
    //}
}
city({ name: "Plovdiv", area: 389, population: 1162358, country: "Bulgaria", postCode: "4000" });
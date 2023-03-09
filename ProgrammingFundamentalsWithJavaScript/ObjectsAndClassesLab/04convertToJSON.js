function convertToJSON(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    };

    let res = JSON.stringify(person);
    
    console.log(res);
}
convertToJSON('George', 'Jones', 'Brown');
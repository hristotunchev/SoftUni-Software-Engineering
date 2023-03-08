function personInfo(firstName, lastName, age) {
    let resultObject = {};

    resultObject.firstName = firstName;
    resultObject.lastName = lastName;
    resultObject.age = age;

    return resultObject;
}
console.log(personInfo("Peter", "Pan", "20"));

function personInfoTwo(firstName, lastName, age) {
    let resultObject = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    return resultObject;
}
console.log(personInfoTwo("Peter", "Pan", "20"));

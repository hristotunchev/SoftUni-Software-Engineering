function employees(employeesArr) {
    let employeeObject = {};

    for (let person of employeesArr) {
        employeeObject.name = person;

        employeeObject.personalNum = person.length;

        console.log(`Name: ${employeeObject.name} -- Personal Number: ${employeeObject.personalNum}`);
    }
}
employees(['Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']);
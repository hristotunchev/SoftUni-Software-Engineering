function iterate() {
    let obj = { name: 'Test', town: 'Testville', age: 22 };

    for (let key of Object.keys(obj)) {
        console.log(`${key}: ${obj[key]}`);
    }
}
iterate();
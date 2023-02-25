function theatrePromotions(type, age) {
    let price;

    if (age >= 0 && age <= 18) {
        switch (type) {
            case "Weekday": price = 12; console.log(`${price}$`); break;
            case "Weekend": price = 15; console.log(`${price}$`); break;
            case "Holiday": price = 5; console.log(`${price}$`); break;
        }
    } else if (age > 18 && age <= 64) {
        switch (type) {
            case "Weekday": price = 18; console.log(`${price}$`); break;
            case "Weekend": price = 20; console.log(`${price}$`); break;
            case "Holiday": price = 12; console.log(`${price}$`); break;
        }
    } else if (age > 64 && age <= 122) {
        switch (type) {
            case "Weekday": price = 12; console.log(`${price}$`); break;
            case "Weekend": price = 15; console.log(`${price}$`); break;
            case "Holiday": price = 10; console.log(`${price}$`); break;
        }
    } else {
        console.log("Error!");
    }
}
theatrePromotions('Weekday', 42)
theatrePromotions('Holiday', -12)
theatrePromotions('Holiday', 15)
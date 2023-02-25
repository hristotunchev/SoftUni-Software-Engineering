function vacation(count, type, day) {
    let totalPrice = 0;

    switch (type) {
        case "Students":
            switch (day) {
                case "Friday": totalPrice = count * 8.45; break;
                case "Saturday": totalPrice = count * 9.8; break;
                case "Sunday": totalPrice = count * 10.46; break;
            }
            break;
        case "Business":
            if (count >= 100) {
                count -= 10;
            }
            switch (day) {
                case "Friday": totalPrice = count * 10.9; break;
                case "Saturday": totalPrice = count * 15.6; break;
                case "Sunday": totalPrice = count * 16; break;
            }
            break;
        case "Regular":
            switch (day) {
                case "Friday": totalPrice = count * 15; break;
                case "Saturday": totalPrice = count * 20; break;
                case "Sunday": totalPrice = count * 22.5; break
            }
            break;
    }

    if (type === "Students" && count >= 30) {
        totalPrice *= 0.85;
    }

    if (type === "Regular" && (count >= 10 && count <= 20)) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday")
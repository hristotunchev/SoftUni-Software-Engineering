function skiTrip(input) {
    const days = Number(input[0]);
    const type = input[1];
    const rating = input[2];

    const roomForOnePersonPrice = 18;
    const apartmentPrice = 25;
    const presidentApartmentPrice = 35;

    let nights = days - 1;

    let price = 0;

    switch (type) {
        case "room for one person": price = nights * roomForOnePersonPrice;
            break;
        case "apartment": price = nights * apartmentPrice;
            if (nights > 15) {
                price = nights * apartmentPrice * 0.5;
            } else if (nights <= 15 && nights >= 10) {
                price = nights * apartmentPrice * 0.65;
            } else if (nights < 10) {
                price = nights * apartmentPrice * 0.7;
            };
            break;
        case "president apartment": price = nights * presidentApartmentPrice;
            if (nights > 15) {
                price = nights * presidentApartmentPrice * 0.8;
            } else if (nights <= 15 && nights >= 10) {
                price = nights * presidentApartmentPrice * 0.85;
            } else if (nights < 10) {
                price = nights * presidentApartmentPrice * 0.9;
            };
            break;
    }

    switch (rating) {
        case "positive": price *= 1.25; break;
        case "negative": price *= 0.9; break;
    }

    console.log(price.toFixed(2));
}
skiTrip(["30", "president apartment", "negative"])
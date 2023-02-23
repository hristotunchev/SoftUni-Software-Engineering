function hotelRoom(input) {
    const month = input[0];
    const nights = Number(input[1]);

    const mayOctoberStudioPrice = 50;
    const mayOctoberApPrice = 65;
    const juneSeptemberStudioPrice = 75.2;
    const juneSeptemberApPrice = 68.7;
    const julyAugustStudioPrice = 76;
    const julyAugustApPrice = 77;

    let apartmentPrice = 0;
    let studioPrice = 0;

    switch (month) {
        case "May":
        case "October": apartmentPrice = nights * mayOctoberApPrice;
            studioPrice = nights * mayOctoberStudioPrice;
            if (nights > 14) {
                studioPrice = nights * mayOctoberStudioPrice * 0.7;
                apartmentPrice = nights * mayOctoberApPrice * 0.9;
            } else if (nights > 7) {
                studioPrice = nights * mayOctoberStudioPrice * 0.95;

            };
            break;
        case "June":
        case "September": apartmentPrice = nights * juneSeptemberApPrice;
            studioPrice = nights * juneSeptemberStudioPrice;
            if (nights > 14) {
                studioPrice = nights * juneSeptemberStudioPrice * 0.8;
                apartmentPrice = nights * juneSeptemberApPrice * 0.9;
            };
            break;
        case "July":
        case "August": apartmentPrice = nights * julyAugustApPrice;
            studioPrice = nights * julyAugustStudioPrice;
            if (nights > 14) {
                apartmentPrice = nights * julyAugustApPrice * 0.9;
            };
            break;
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
hotelRoom(["May", "15"])
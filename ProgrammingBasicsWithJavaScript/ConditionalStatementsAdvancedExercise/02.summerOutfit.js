function summerOutfit(input) {
    const degrees = Number(input[0]);
    const time = input[1];
    let outfit = "";
    let shoes = "";

    if (degrees >= 10 && degrees <= 18) {
        switch (time) {
            case "Morning": outfit = "Sweatshirt";
                shoes = "Sneakers"; console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`); break;
            case "Afternoon": outfit = "Shirt";
                shoes = "Moccasins"; console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`); break;
            case "Evening": outfit = "Shirt";
                shoes = "Moccasins"; console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`); break;
        }
    } else if (degrees > 18 && degrees <= 24) {
        switch (time) {
            case "Morning": outfit = "Shirt";
                shoes = "Moccasins"; console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`); break;
            case "Afternoon": outfit = "T-Shirt";
                shoes = "Sandals"; console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`); break;
            case "Evening": outfit = "Shirt";
                shoes = "Moccasins"; console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`); break;
        }
    } else if (degrees >= 25) {
        switch (time) {
            case "Morning": outfit = "T-Shirt";
                shoes = "Sandals"; console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`); break;
            case "Afternoon": outfit = "Swim Suit";
                shoes = "Barefoot"; console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`); break;
            case "Evening": outfit = "Shirt";
                shoes = "Moccasins"; console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`); break;
        }
    }
}
summerOutfit(["28", "Evening"])
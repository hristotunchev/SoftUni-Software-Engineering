function birthdayParty(arg1) {
    let rentPrice = Number(arg1);
    let cakePrice = rentPrice * 0.2;
    let drinksPrice = cakePrice * 0.55;
    let animatorPrice = rentPrice / 3;

    let finalPrice = rentPrice + cakePrice + drinksPrice + animatorPrice;

    console.log(finalPrice);
}
birthdayParty(2250)
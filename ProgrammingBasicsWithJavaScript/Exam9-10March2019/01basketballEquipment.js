function basketballEquipment(input){
    let taxYear = Number(input[0]);
    let sneakersPrice = taxYear * 0.6;
    let outfitPrice = sneakersPrice * 0.8;
    let ballPrice = outfitPrice * 0.25;
    let accessoariesPrice = ballPrice * 0.2;
    let totalPrice = taxYear + sneakersPrice + outfitPrice + ballPrice + accessoariesPrice;
    console.log(totalPrice.toFixed(2));
}
basketballEquipment(["550"])
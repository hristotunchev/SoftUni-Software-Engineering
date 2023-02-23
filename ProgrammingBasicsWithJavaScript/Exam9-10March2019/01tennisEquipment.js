function tennisEquipment(input){
    let raketaPrice = Number(input[0]);
    let raketaCount = Number(input[1]);
    let trainersCount = Number(input[2]);
    let trainersPrice = raketaPrice / 6;
    let priceOfTrainersAndRaketi = raketaCount * raketaPrice + trainersCount * trainersPrice;
    let othersPrice = priceOfTrainersAndRaketi * 0.2;
    let totalPrice = priceOfTrainersAndRaketi + othersPrice;
    let priceDjokata = totalPrice / 8;
    let priceSponsors = totalPrice - priceDjokata;
    console.log(`Price to be paid by Djokovic ${Math.floor(priceDjokata)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(priceSponsors)}`);
}
//tennisEquipment([ '850', '4', '2', '' ])
tennisEquipment([ '386', '7', '4', '' ])
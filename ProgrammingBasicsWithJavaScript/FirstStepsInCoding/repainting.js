function repainting(input){
    let nilonPricePerMeter = 1.5;
    let paintPricePerLiter = 14.5;
    let thinnerPricePerLiter = 5;

    let nilonQuant = Number(input[0]) + 2;
    let paintQuant = Number(input[1]);
    let thinnerQuant = Number(input[2]);
    let workingHours = Number(input[3]);

    let finalPaint = paintQuant + paintQuant * 0.1;
    let bagsPrice = 0.4;
    
    let materialsPrice = nilonQuant * nilonPricePerMeter + finalPaint * paintPricePerLiter + thinnerQuant * thinnerPricePerLiter + bagsPrice;
    let workPricePerHour = materialsPrice * 0.3;
    let workPrice = workPricePerHour * workingHours;

    let totalPrice = materialsPrice + workPrice;
    
    console.log(totalPrice);
}
repainting([10, 11, 4, 8])
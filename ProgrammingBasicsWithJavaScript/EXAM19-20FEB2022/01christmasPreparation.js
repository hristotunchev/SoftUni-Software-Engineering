function christmasPreparation(input) {
    let paperRolls = Number(input[0]);
    let platRolls = Number(input[1]);
    let glueLiters = Number(input[2]);
    let discountProcent = Number(input[3]);

    let paperPrice = 5.8;
    let platPrice = 7.2;
    let gluePrice = 1.2

    let paperBill = paperRolls * paperPrice;
    let platBill = platRolls * platPrice;
    let glueBill = glueLiters * gluePrice

    let priceBeforeDiscount = paperBill + platBill + glueBill;

    let discount = (discountProcent / 100) * priceBeforeDiscount;

    let totatPrice = priceBeforeDiscount - discount;

    console.log(totatPrice.toFixed(3));
}
christmasPreparation(["2",
    "3",
    "2.5",
    "25"])

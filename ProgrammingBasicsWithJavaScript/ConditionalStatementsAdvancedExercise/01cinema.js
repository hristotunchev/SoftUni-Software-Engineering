function cinema(input) {
    const projection = input[0];
    const rolls = Number(input[1]);
    const colls = Number(input[2]);

    const premierePrice = 12;
    const normalPrice = 7.5;
    const discountPrice = 5;

    const seats = rolls * colls;
    
    let profit = 0;

    if (projection === "Premiere") {
        profit = seats * premierePrice;
        console.log(`${profit.toFixed(2)} leva`);
    } else if (projection === "Normal") {
        profit = seats * normalPrice;
        console.log(`${profit.toFixed(2)} leva`);
    } else if (projection === "Discount") {
        profit = seats * discountPrice;
        console.log(`${profit.toFixed(2)} leva`);
    }

}
cinema(["Discount", "12", "30"])
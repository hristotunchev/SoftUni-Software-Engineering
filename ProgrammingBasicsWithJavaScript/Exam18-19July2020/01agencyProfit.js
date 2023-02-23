function agencyProfit(input){
    let name = input[0];
    let adultTickets = Number(input[1]);
    let kidTickets = Number(input[2]);
    let adultTicketPrice = Number(input[3]);
    let tax = Number(input[4]);

    let kidTicketPrice = adultTicketPrice * 0.3;
    let priceForOneAdult = adultTicketPrice + tax;
    let priceForOneKid = kidTicketPrice + tax;

    let finalPrice = priceForOneAdult * adultTickets + priceForOneKid * kidTickets;

    let profit = finalPrice * 0.2;

    console.log(`The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`);
}
agencyProfit(["WizzAir",
"15",
"5",
"120",
"40"])

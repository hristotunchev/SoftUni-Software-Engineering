function movieProfit(input) {
    let name = input[0];
    let days = Number(input[1]);
    let ticketsCount = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let taxPercent = Number(input[4]);

    let profit = days * ticketsCount * ticketPrice;
    let tax = profit * taxPercent / 100;
    let total = profit - tax;

    console.log(`The profit from the movie ${name} is ${total.toFixed(2)} lv.`);
}
movieProfit(["The Jungle",
    "22",
    "20500",
    "9.37",
    "30"])

function changeBureau(input) {
    let bitcoinCount = Number(input[0]);
    let iuanCount = Number(input[1]);
    let commissionPercentage = Number(input[2]);

    let bitcoinToLeva = 1168;
    let iuanToDollar = 0.15;
    let dollarToLeva = 1.76;
    let euroToLeva = 1.95;

    let moneyInLeva = (bitcoinCount * bitcoinToLeva) + (iuanCount * iuanToDollar) * dollarToLeva;
    let moneyInEuro = moneyInLeva / euroToLeva;

    let commission = (commissionPercentage / 100) * moneyInEuro;

    let finalMoney = moneyInEuro - commission;

    console.log(finalMoney.toFixed(2))
}
changeBureau(["1",
    "5",
    "5"])

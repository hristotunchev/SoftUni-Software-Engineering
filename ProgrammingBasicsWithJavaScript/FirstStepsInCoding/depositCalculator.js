function depositCalculator(input) {
    let depSum = Number(input[0]);
    let depPeriod = Number(input[1]);
    let interestPercent = Number(input[2]);
    let interestPerYear = depSum * interestPercent / 100;
    let interestPerMonth = interestPerYear / 12;

    let finalSum = depSum + depPeriod * interestPerMonth;
    
    console.log(finalSum);
}
depositCalculator([200, 3, 5.7])
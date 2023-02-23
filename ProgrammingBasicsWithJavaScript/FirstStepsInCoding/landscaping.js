function landscaping(input){
let pricePerSqM = 7.61;
let priceWithoutDiscount = Number(input[0]) * pricePerSqM;
let discount = priceWithoutDiscount * 0.18;
let finalPrice = priceWithoutDiscount - discount;
let str1 = "The final price is: " + finalPrice + " lv.";
let str2 = "The discount is: " + discount + " lv.";
console.log(str1);
console.log(str2);
}
landscaping([550])
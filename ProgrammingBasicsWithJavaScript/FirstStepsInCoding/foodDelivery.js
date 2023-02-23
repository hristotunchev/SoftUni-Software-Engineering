function foodDelivery(input){
const chickenMealQuant = Number(input[0]);
const fishMealQuant = Number(input[1]);
const vegMealQuant = Number(input[2]);

const chickenMealPrice = 10.35;
const fishMealPrice = 12.4;
const vegMealPrice = 8.15;
const delivery = 2.5;

const mealPrice = chickenMealPrice * chickenMealQuant + fishMealPrice * fishMealQuant + vegMealPrice * vegMealQuant;
const desert = mealPrice * 0.2;

const finalPrice = mealPrice + delivery + desert;

console.log(finalPrice);
}
foodDelivery([2, 4, 3])
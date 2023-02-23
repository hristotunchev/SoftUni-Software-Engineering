function petShop(input){
let dogFoodPrice = 2.5;
let catFoodPrice = 4;

let dogFoodPacks = (input[0]);
let catFoodPacks = (input[1]);

let result = dogFoodPrice * dogFoodPacks + catFoodPrice * catFoodPacks + " lv.";

console.log(result);
}
petShop([5, 4])
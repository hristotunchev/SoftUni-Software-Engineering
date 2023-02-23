function suppliesForSchool(input){
let penPackPrice = 5.8;
let markerPackPrice = 7.2;
let detergentLiterPrice = 1.2;

let penPacksQuant = Number(input[0]);
let markerPacksQuant = Number(input[1]);
let detergentLiters = Number(input[2]);
let discount = Number(input[3]);

let penPacks = penPackPrice * penPacksQuant;
let markerPacks = markerPackPrice * markerPacksQuant;
let detergent = detergentLiterPrice * detergentLiters;

let finalPrice = penPacks + markerPacks + detergent;

let sum = finalPrice - (finalPrice * discount / 100);

console.log(sum);
}
suppliesForSchool([2, 3, 4, 25])
function vacationBooksList(input){
let pages = Number(input[0]);
let pagesPerHour = Number(input[1]);
let daysLeft = Number(input[2]);

let totalHours = pages / pagesPerHour;

let hoursPerDay = totalHours / daysLeft;

console.log(hoursPerDay);
}
vacationBooksList([212, 20, 2])
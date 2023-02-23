function projectsCreation(input){
let name = input[0];
let projects = Number(input[1]);

let time = projects * 3;

let str = "The architect " + name + " will need " + time + " hours to complete " + projects + " project/s.";

console.log(str);
}
projectsCreation(['George', 4])
function favoriteMovie(input){
    let index = 0;

    let command = input[index++];
    let movieCounter = 0;

    let tempFav = "";

    let maxPoints = 0;

    while (command !== "STOP") {
        let name = "" + command;
        let sumPoints = 0;
        movieCounter++;

        for (let i = 0; i < name.length; i++) {
            let char = name.charAt(i);
            sumPoints += Number(name.charCodeAt(i));

            if (char == char.toLowerCase() && char !== " ") {
                sumPoints -= (Number(name.length) * 2);
            } else if (char == char.toUpperCase() && char !== " ") {
                sumPoints -= Number(name.length);
            }
        }
        
        if (maxPoints < sumPoints) {
            maxPoints = sumPoints;
            tempFav = command;
        }

        if (movieCounter > 7) {
            console.log(`The limit is reached.`);
            break;
        }

        command = input[index++];    
    }
    
    console.log(`The best movie for you is ${tempFav} with ${maxPoints} ASCII sum.`);
}
//favoriteMovie(["Matrix",
//"Breaking bad",
//"Legend",
//"STOP"])
//favoriteMovie(['Wrong turn',
//    'The maze',
//    'Area 51',
//    'Night Club',
//    'Ice age',
//    'Harry Potter',
//   'Wizards',
//    ])
favoriteMovie(['School story 2', 'STOP'])


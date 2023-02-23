function cinemaTickets(input) {
    let index = 0;
    let command = input[index++];
    let studentTicketsCounter = 0;
    let standardTicketsCounter = 0;
    let kidsTicketsCounter = 0;
    while (command !== "Finish") {
        let movieName = command;
        let capacity = Number(input[index++]);
        let soldTicketsCounter = 0;
        command = input[index++];
        while (command !== "End") {
            switch (command) {
                case "student": 
                studentTicketsCounter++;
                soldTicketsCounter++;
                break;
                case "standard": 
                standardTicketsCounter++;
                soldTicketsCounter++;
                break;
                case "kid": 
                kidsTicketsCounter++;
                soldTicketsCounter++;
                break;
            }
            let freeTickets = capacity - soldTicketsCounter;
            if (freeTickets === 0) {
                break;
            }
            command = input[index++]
        }
    let soldTicketsPercentage = (soldTicketsCounter / capacity) * 100;
    console.log(`${movieName} - ${soldTicketsPercentage.toFixed(2)}% full.`);
    command = input[index++];
    }
    let totalTickets = standardTicketsCounter + studentTicketsCounter + kidsTicketsCounter;
    let standardPercentage = (standardTicketsCounter / totalTickets) * 100;
    let studentPercentage = (studentTicketsCounter / totalTickets) * 100;
    let kidsPercentage = (kidsTicketsCounter / totalTickets) * 100;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentPercentage.toFixed(2)}% student tickets.`);
    console.log(`${standardPercentage.toFixed(2)}% standard tickets.`);
    console.log(`${kidsPercentage.toFixed(2)}% kids tickets.`);
}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])

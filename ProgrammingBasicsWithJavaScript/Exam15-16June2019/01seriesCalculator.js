function seriesCalculator(input) {
    let name = input[0];
    let seasons = Number(input[1]);
    let episodes = Number(input[2]);
    let duration = Number(input[3]);

    let epWithAdds = duration * 1.2;
    let allSeasonsTime = seasons * episodes * epWithAdds;
    let extraEps = seasons * 10;
    let total = allSeasonsTime + extraEps;

    console.log(`Total time needed to watch the ${name} series is ${total} minutes.`);
}
seriesCalculator(["Game of Thrones",
    "7",
    "10",
    "50"])

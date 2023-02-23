function aquarium(input) {
    const lenght = Number(input[0]);
    const width = Number(input[1]);
    const height = Number(input[2]);
    const shitPercent = Number(input[3]);

    const volumeCm = lenght * width * height;
    const volumeLtr = volumeCm / 1000;
    const finalVolumeLtr = volumeLtr - ((volumeLtr * shitPercent) / 100);
    
    console.log(finalVolumeLtr);
}
aquarium([85, 75, 47, 17])
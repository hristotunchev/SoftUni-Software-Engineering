function songs(input) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songsArr = [];
    let songsCount = input.shift();

    let songsType = input.pop();

    for (let i = 0; i < songsCount; i++) {
        let [type, name, time] = input[i].split('_');
        let currentSong = new Song(type, name, time);
        songsArr.push(currentSong);
    }

    if (songsType === 'all') {
        songsArr.forEach(i => console.log(i.name));
    } else {
        let filteredSongs = songsArr.filter(i => i.type === songsType);
        filteredSongs.forEach(i => console.log(i.name));
    }
}
songs([3, 'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);
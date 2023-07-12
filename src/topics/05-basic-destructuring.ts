interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details:{
        author: 'Ed Sheeran',
        year: 2015
    }
}

// const song = 'New Song';
const{song:anotherSong, songDuration:duration,details } = audioPlayer;
const {author} = details;
//console.log('Song ',audioPlayer.song);
//console.log('Author',audioPlayer.details.author);
//console.log('Song', anotherSong)
//console.log('Author', author);

const [ , , trunks]: string[] = ['Goku', 'Vegeta','Trunks'];


console.error(`Personaje 3:`,trunks)

export{}
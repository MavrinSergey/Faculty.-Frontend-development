const musicAlbumArray = [
    {
        title: "The Dark Side of the Moon",
        artist: "Pink Floyd",
        year: "1973"
    },
    {
        title: "Back in Black",
        artist: "AC/DC",
        year: "1980"
    },
    {
        title: "Bat Out of Hell",
        artist: "Meat Loaf",
        year: "1977"
    },
]
const musicCollection = {
    musicAlbumArray: [...musicAlbumArray],
    [Symbol.iterator]: function () {
        let countMusicAlbum = 0;
        return {
            next: (() => {
                if (countMusicAlbum >= this.musicAlbumArray.length) {
                    return {done: true}
                } else {
                    return {
                        value: this.musicAlbumArray[countMusicAlbum++],
                        done: false
                    }
                }
            })
        }
    },
}
for (const MusicAlbum of musicCollection) {
    console.log(`${MusicAlbum.title} - ${MusicAlbum.artist} (${MusicAlbum.year})`)
}
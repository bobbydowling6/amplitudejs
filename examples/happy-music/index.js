
import Amplitude from "../../dist/amplitude.js"

Amplitude.init({
    "songs": [{
            "name": "Send Me On My Way",
            "artist": "Rusted Root",
            "album": "When I Woke",
            "url": "03%20Send%20Me%20On%20My%20Way.mp3",
            "cover_art_url": "album-art/rustedroot.jpg"
        },
        {
            "name": "On Top of the World",
            "artist": "Imagine Dragons",
            "album": "Night visions",
            "url": "05%20On%20Top%20of%20the%20World.mp3",
            "cover_art_url": "album-art/night_visions.jpg"
        },
        {
            "name": "Don't Worry Be Happy",
            "artist": "Bobby Mcferrin",
            "album": "Don't Worry Be Happy",
            "url": "01%20Don't%20Worry,%20Be%20Happy.mp3",
            "cover_art_url": "album-art/bobbymcferrin.jpg"
        },
        {
            "name": "More Than a Feeling",
            "artist": "Boston",
            "album": "Boston",
            "url": "01%20More%20Than%20a%20Feeling.mp3",
            "cover_art_url": "album-art/Folder.jpg"
        },
        {
            "name": "Crazy",
            "artist": "Gnarls Barkley",
            "album": "Crazy",
            "url": "02%20Crazy.mp3",
            "cover_art_url": "album-art/crazy.jpg"
        }
    ]
});
document.getElementById('song-played-progress-1').addEventListener('click', function(e) {
    if (Amplitude.getActiveIndex() == 0) {
        var offset = this.getBoundingClientRect();
        var x = e.pageX - offset.left;
        Amplitude.setSongPlayedPercentage((parseFloat(x) / parseFloat(this.offsetWidth)) * 100);
    }
});
document.getElementById('song-played-progress-2').addEventListener('click', function(e) {
    if (Amplitude.getActiveIndex() == 1) {
        var offset = this.getBoundingClientRect();
        var x = e.pageX - offset.left;
        Amplitude.setSongPlayedPercentage((parseFloat(x) / parseFloat(this.offsetWidth)) * 100);
    }
});


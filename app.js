const tracks = [{name: "the cure", artist: "olivia rodrigo"},
                {name: "good 4 u", artist: "olivia rodrigo"},
                {name: "sour", artist: "olivia rodrigo"},
                {name: "drivers license", artist: "olivia rodrigo"},
                {name: "Le Tigre", artist: "Overmono"}
                ]

for (let track of tracks) {
    track.bin = null;
}

let skippedTracks = [];

let currentIndex = 0;

function showTrack() {
    const track = tracks[currentIndex];
    document.getElementById('track-name').textContent = track.name;
    document.getElementById('track-artist').textContent = track.artist;
}

function selectBin(bin_name) {
    const track = tracks[currentIndex];
    track.bin = bin_name;
    currentIndex = currentIndex + 1;
    if (currentIndex >= tracks.length) { // reached the end of thearray
        document.getElementById("element").innerText = "Finished! You have sorted all the tracks.";
        return
    }
    showTrack();
}

function skipTrack() {
    skippedTracks.push(tracks[currentIndex]);
    currentIndex = currentIndex + 1;
    if (currentIndex >= tracks.length) { // reached the end of thearray
        document.getElementById("element").innerText = "Finished! You have sorted all the tracks.";
        return
    }   
    showTrack();
}

function goBack() {
    currentIndex = currentIndex - 1;
    if (currentIndex < 0) { // reached the beginning of the array
        currentIndex = 0;
        return
    }
    const track = tracks[currentIndex];
    track.bin = null;
    showTrack();
}

showTrack();
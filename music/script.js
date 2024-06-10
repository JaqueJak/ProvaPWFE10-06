document.addEventListener('DOMContentLoaded', function() {
    var audioPlayer = document.getElementById('audioPlayer');
    var playPauseButton = document.getElementById('playPauseButton');
    var prevButton = document.getElementById('prevButton');
    var nextButton = document.getElementById('nextButton');
    var playlist = document.getElementById('playlist').getElementsByTagName('li');

    var currentSongIndex = 0;

    function playPause() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.textContent = 'Pause';
        } else {
            audioPlayer.pause();
            playPauseButton.textContent = 'Play';
        }
    }

    function playSong(index) {
        var song = playlist[index];
        var songSource = song.getAttribute('data-src');
        var coverImage = song.querySelector('.coverImage');
        var coverSource = coverImage.getAttribute('src');
        
        audioPlayer.src = './songs/' + songSource;
        coverImage.src = './songs/' + coverSource;

        currentSongIndex = index;
        playPause();
    }

    playPauseButton.addEventListener('click', playPause);

    prevButton.addEventListener('click', function() {
        var newIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        playSong(newIndex);
    });

    nextButton.addEventListener('click', function() {
        var newIndex = (currentSongIndex + 1) % playlist.length;
        playSong(newIndex);
    });

    for (var i = 0; i < playlist.length; i++) {
        (function(index) {
            playlist[index].addEventListener('click', function() {
                playSong(index);
            });
        })(i);
    }
});
$(document).ready(function () {
    window.addEventListener('load', function () {
        var audio = document.getElementById('MeuAudio');
        audio.muted = false;
        audio.play();
    });
});

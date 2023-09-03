const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const audio = document.getElementById('reproductor-audio');

// Al cargar la página, oculta el botón de pausa
pauseButton.style.display = 'none';

playButton.addEventListener('click', () => {
    audio.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';
});

pauseButton.addEventListener('click', () => {
    audio.pause();
    playButton.style.display = 'block';
    pauseButton.style.display = 'none';
});

var audio = new Audio('A Place in this World (64 kbps).mp3');
audio.volume = 0.1;
audio.autoplay = true;

$('.trigger').click(function() {
  if (audio.paused == false) {
      audio.pause();
      $('.fa-play').show();
      $('.fa-pause').hide();
      $('.music-card').removeClass('playing');
  } else {
      audio.play();
      $('.fa-pause').show();
      $('.fa-play').hide();
      $('.music-card').addClass('playing');
  }
});
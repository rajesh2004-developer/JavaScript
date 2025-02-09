const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const restart = document.querySelector('.restart');

const tweet = gsap.to('.box', {
  y: -200,
  duration: 3,
  repeat: -1,
  ease: 'linear',
});
tweet.pause();

play.addEventListener('click', () => tweet.play());
pause.addEventListener('click', () => tweet.pause());
restart.addEventListener('click', () => tweet.restart());

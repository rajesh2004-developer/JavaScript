gsap.from('.box1', {
  y: -200,
  duration: 2,
  yoyo: true,
  ease: 'linear',
  repeat: -1,
});

gsap.fromTo(
  '.box2',
  {
    y: -200,
    opacity: 0.3,
  },
  {
    y: 200,
    opacity: 1,
    duration: 3,
    repeat: -1,
    ease: 'linear',
    yoyo: true,
    scale: 2,
  }
);

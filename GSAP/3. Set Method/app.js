gsap.set('.box', {
  opacity: 0,
  background: 'yellow',
});

gsap.to('.box', {
  opacity: 1,
  background: 'red',
  duration: 3,
  y: 200,
  repeat: -1,
  yoyo: true,
});

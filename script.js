const sections = document.querySelectorAll('.slide-in');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;

    if (top < trigger) {
      section.style.animationPlayState = 'running';
    }
  });
});

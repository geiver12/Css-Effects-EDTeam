document.getElementById('heart').addEventListener('click', e => {
    const t = e.target;
    t.classList.add('animate');
    t.addEventListener('animationend', () => t.classList.remove('animate'));
});

const floatButton = document.getElementById('float-button'),
    circularMenu = document.getElementById('circular-menu');

floatButton.addEventListener('click', () => {
    floatButton.classList.toggle('pulsed');
    circularMenu.classList.toggle('expand');
});
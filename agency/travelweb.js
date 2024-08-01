const header = document.getElementById('header');
const table = document.querySelectorAll('#table');
const div = document.getElementById('div');
const button = document.getElementById('button');
const tab = document.getElementsByClassName('table');

header.addEventListener('mousemove', (event) => {
    console.log(`Mouse moved to X: ${event.clientX}, Y: ${event.clientY}!`);
});

table.addEventListener('mouseover', (event) => {
    event.target.style.border = '2px solid purple';
    console.log('days double-clicked!');
});

div.addEventListener('dblclicked', (event) => {
    console.log('div double clicked!');
});

button.addEventListener('mousedown', (event) => {
    event.target.style.backgroundcolor = 'purple';
    console.log('Mouse entered element!');
});

button.addEventListener('submit', (event) => {
    event.preventDefault();
});

tab.addEventListener('keypress', (event) => {
    console.log(`table pressed: ${event.key}`);
});

document.addEventListener('mousemove', (event) => {
    const trail = document.createElement('div');
    trail.className = 'div';
    trail.style.top = `${event.clientY}px`;
    trail.style.left = `${event.clientX}px`;
    trail.style.backgroundColor = 'purple';
    trail.style.color = 'white';
    document.body.appendChild(trail);
    setTimeout(() => {
        trail.remove();
    }, 1000);
});


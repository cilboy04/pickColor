/*? no js js needed from me */
const background = document.querySelector('.container')
const h1 =  document.querySelector('.container h1')
const black = document.getElementById('black')

function btnRed() {
    background.style.backgroundColor = 'red';
    h1.innerHTML = 'RED';
    h1.style.color = '  rgb(94, 5, 5)';
    h1.style.fontStyle = 'italic';
    black.classList.add('black')
}
function btnYellow() {
    background.style.backgroundColor = 'yellow';
    h1.innerHTML = 'YELLOW';
    h1.style.color = 'darkyellow';
    h1.style.fontStyle = 'italic';
    black.classList.add('black')
}
function btnGreen() {
    background.style.backgroundColor = 'green';
    h1.innerHTML = 'GREEN';
    h1.style.color = 'rgb(2, 43, 2)';
    h1.style.fontStyle = 'italic';
    black.classList.add('black')
}
function btnBlue() {
    background.style.backgroundColor = 'blue';
    h1.innerHTML = 'BLUE';
    h1.style.color = 'aqua';
    h1.style.fontStyle = 'italic';
    black.classList.add('black')
}
function btnBlack() {
    background.style.backgroundColor = 'black';
    h1.innerHTML = 'PICK COLOR';
    h1.style.color = 'white';
    h1.style.fontStyle = 'normal';
    black.classList.remove('black')
}
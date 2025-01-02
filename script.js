const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomNumber()];
    }
    result.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    result.style.color = hexColor;
});

function randomNumber() {
    return Math.floor(Math.random() * hex.length);
}
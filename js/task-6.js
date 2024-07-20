function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
document.querySelector('[data-create]').addEventListener('click', () => {
    const count = Number(document.querySelector('#controls input').value);
    if (count >= 1 && count <= 100) {
        destroyBoxes();
        createBoxes(count);
        document.querySelector('#controls input').value = '';
    }
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    const boxesContainer = document.querySelector('#boxes');
    let size = 30;

    for (let i = 0; i < amount; i++) {
        const newElement = document.createElement('div');
        newElement.classList.add('element');
        newElement.style.width = `${size}px`;
        newElement.style.height = `${size}px`;
        newElement.style.backgroundColor = getRandomHexColor();
        boxesContainer.appendChild(newElement);
        size += 10; 
    }
}

function destroyBoxes() {
    document.querySelector('#boxes').innerHTML = ''; 
}


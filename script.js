let colors = ['red', 'green', 'blue'];

const colorBlocks = document.getElementsByClassName('color');
for (let i = 1; i < colorBlocks.length; i += 1) {
  colorBlocks[i].style.backgroundColor = colors[i - 1];
}

console.log(colors);
const pixelBoard = document.getElementById('pixel-board');
for (let i = 0; i < 25; i += 1) {
  const pixel = document.createElement('span');
  pixel.classList.add('pixel')
  pixelBoard.appendChild(pixel);
}
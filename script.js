let colors = ['black', 'red', 'green', 'blue'];
const colorPalette = document.getElementById('color-palette')
const pixelBoard = document.getElementById('pixel-board');

// FUNÇÃO PARA LIMPAR TODOS OS PIXELS
function doClearBoard() {
  for (const pixel of pixelBoard.children) {
    pixel.style.backgroundColor = 'white';
  }
}

// FUNÇÃO PARA SELECIONAR E PINTAR
function onPixelClick(event) {
  const target = event.target;
  const selected = document.querySelector('span.color.selected');
  switch (target.classList[0]) {
    case 'color':
      if (target !== selected) {
        selected.classList.remove('selected');
        target.classList.add('selected');
      }
      break;
      case 'pixel':
        target.style.backgroundColor = selected.style.backgroundColor
        break;
  }
}

// CRIAÇÃO DAS CORES DA PALETA DE CORES
for (let i = 0; i < colors.length; i += 1) {
  const colorPixel = document.createElement('span');
  colorPixel.classList.add('color')
  if (i === 0) { colorPixel.classList.add('selected'); }
  colorPixel.style.backgroundColor = colors[i];
  colorPalette.addEventListener('click', onPixelClick)
  colorPalette.appendChild(colorPixel);
}

// CRIAÇÃO DOS PIXELS DO PIXEL BOARD
for (let i = 0; i < 25; i += 1) {
  const pixel = document.createElement('span');
  pixel.classList.add('pixel')
  pixel.addEventListener('click', onPixelClick)
  pixelBoard.appendChild(pixel);
}
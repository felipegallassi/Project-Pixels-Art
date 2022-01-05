let colors = ['black', 'red', 'green', 'blue'];

// FUNÇÃO PARA SELECIONAR E PINTAR
function onPixelClick(event) {
  const target = event.target;
  switch (target.classList[0]) {
    case 'color':
      const selected = target.parentElement.querySelector('span.color.selected');
      if (target !== selected) {
        selected.classList.remove('selected');
        target.classList.add('selected');
      }
      break;
  }
}

// CRIAÇÃO DAS CORES DA PALETA DE CORES
const colorPalette = document.getElementById('color-palette')
for (let i = 0; i < colors.length; i += 1) {
  const colorPixel = document.createElement('span');
  colorPixel.classList.add('color')
  if (i === 0) { colorPixel.classList.add('selected'); }
  colorPixel.style.backgroundColor = colors[i];
  colorPalette.addEventListener('click', onPixelClick)
  colorPalette.appendChild(colorPixel);
}

// CRIAÇÃO DOS PIXELS DO PIXEL BOARD
const pixelBoard = document.getElementById('pixel-board');
for (let i = 0; i < 25; i += 1) {
  const pixel = document.createElement('span');
  pixel.classList.add('pixel')
  pixelBoard.appendChild(pixel);
}
let colors = ['red', 'green', 'blue'];

const colorBlocks = document.getElementsByClassName('color');
for (let i = 1; i < colorBlocks.length; i += 1) {
  colorBlocks[i].style.backgroundColor = colors[i - 1];
}

console.log(colors);
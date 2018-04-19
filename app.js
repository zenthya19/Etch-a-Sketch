container_div = document.getElementById('container');
drawblack_button = document.getElementById('draw-black');
drawrainbow_button = document.getElementById('draw-rainbow');
gridsize_button = document.getElementById('grid-size');
cleargrid_button = document.getElementById('clear-grid');


function createGrid(number) {
	for(let i = 0; i < number; i++) {
		let row = document.createElement('div');
		row.classList.add('row')
	for(let j = 0; j < number; j++) {
		let col = document.createElement('div');
		col.classList.add('square');
		col.style.width = 640/number + 'px';
		col.style.height = 640/number + 'px';
		row.appendChild(col);
	}
		container_div.appendChild(row);
}
}

createGrid(16);


function drawBlackSquares() {
	let blackSquares = document.querySelectorAll(".square");
	blackSquares.forEach(square => square.addEventListener('mouseover', (e) => {
	square.style.backgroundColor = 'black';
	}));
}


function drawRainbowSquares() {
	let rainbowSquares = document.querySelectorAll(".square");
	rainbowSquares.forEach(square => square.addEventListener('mouseover', (e) => {
	square.style.backgroundColor = drawRainbowColor();
	}))
}

function drawRainbowColor() {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for(let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function clearGrid() {
	let parent = document.getElementById('container');
	while(parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

function resizeGrid() {
	let number = prompt('Enter a number between 1 and 100 to resize the grid.')
	clearGrid();
	createGrid(number);
	drawBlackSquares();
	
}	

drawblack_button.addEventListener('click', () => drawBlackSquares());
drawrainbow_button.addEventListener('click', () => drawRainbowSquares());
cleargrid_button.addEventListener('click', () => clearGrid());
gridsize_button.addEventListener('click', () => resizeGrid());
container_div = document.getElementById('container');


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
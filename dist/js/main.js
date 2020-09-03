document.addEventListener('keydown', write);

const container = document.querySelector('.container');

let word = '';
let spanElement;

function write(e) {
	const keyPressed = e.key;
	console.log(keyPressed);

	if (word === '') {
		word += e.key;
		let spanElement = document.createElement('span');
		spanElement.innerHTML = word;
		container.appendChild(spanElement);
	}

	if (word === ' ') {
		word = '';
	}

	let spanElement = container.lastChild;
	word += e.key;
	spanElement.innerHTML = word;
}

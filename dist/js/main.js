import { Word } from './Word.js';

document.addEventListener('keydown', write);

const container = document.querySelector('.container');

let word = '';
let spanElement;

function write(e) {
	// if word is blank, create new span
	// if characters are pressed, add to word and to span
	// if space bar is pressed, delete the word
	// if backspace is pressed, delete char from word and span
	// if word is empty, find last span and remove last char,
	// and set word to remainder of the span

	const keyPressed = e.key;
	const keyCode = e.keyCode;

	if (65 >= keyCode <= 90) {
		// chars A-Z
		if (word === '') {
			//create a span element
			spanElement = document.createElement('span');
			word = new Word(spanElement);
			word.addChar(keyPressed);
			container.appendChild(spanElement);
			spanElement.innerHTML = word.wordStr;
		} else {
			//get last span
			spanElement = container.lastChild;
			word += keyPressed;
			spanElement.innerHTML = word.wordStr;
		}
	} else if (keyCode === 8) {
	} else if (keyCode == 32) {
		word = '';
	}
}

export class Word {
	constructor(htmlSpanElement) {
		this.htmlSpanElement = htmlSpanElement;
		this.wordStr = '';
	}

	addChar(ch) {
		this.wordStr += ch;
	}
}

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	set state(state) {
    	this._state = state;
		if (state < 0) {
			this._state = 0;
		} else if (state > 100) {
			this._state = 100;
		}
	}

	get state() {
		return this._state;
	}

	fix() {
		this.state = this.state * 1.5;
    	return this.state;
  }
}

class Library {
	constructor(name) {
		this.name = name;
		this.book = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.book.push(book)
		}
	}

	findBookBy(type, value) {
		
	}
} 

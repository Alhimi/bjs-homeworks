class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type) {
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

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type) {
	  	super(state);
	  	this.name = name;
	    this.releaseDate = releaseDate;
	    this.pagesCount = pagesCount;
	    this.type = 'magazine';
	    
	    
  	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state, type) {
	  	super(state);
	  	this.author = author;
	  	this.name = name;
	    this.releaseDate = releaseDate;
	    this.pagesCount = pagesCount;
	    this.type = 'book';
  	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type) {  	
	  	super(state);
	  	this.author = author;
	  	this.name = name;
	    this.releaseDate = releaseDate;
	    this.pagesCount = pagesCount;
	    this.type = 'novel';
  	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type) { 	
	  	super(state);
	  	this.author = author;
	  	this.name = name;
	    this.releaseDate = releaseDate;
	    this.pagesCount = pagesCount;
	    this.type = 'fantastic';
  	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type) {
	  	super(state);
	  	this.author = author;
	  	this.name = name;
	    this.releaseDate = releaseDate;
	    this.pagesCount = pagesCount;
	    this.type = 'detective';
  	}
}

//Задача 2


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
		for (let i = 0; i < this.book.length; i++){
	    	if (this.book[i].type === value) {
		        return this.book[i]
	    	}
		}
	}
	
	giveBookByName() {
	  
	}
} 

// // Задача 3 

// class StudentLog {
//   	constructor(name) {
//     	this.name = name;
//   	}
  
//   	getName() {
//    		return this.name;
//  	}
  
  
// }
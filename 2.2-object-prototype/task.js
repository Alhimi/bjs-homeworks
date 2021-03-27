'use strict';

String.prototype.isPalindrome = function isPalindrome() {
	console.log(this.toLowerCase().split(' ').join('').split('').join(''));
	console.log(this.split('').join(''));
	console.log(this.trim())
	if (this.toLowerCase().split(' ').join('').split('').reverse().join('') === this.toLowerCase().split(' ').join('').split('').join('')) {
		return true
	} else {
		return false
	}
}

// Задача 2

function getAverageMark(marks) {
	if (marks.length === 0) {
		return 0;
	}

	let sum = 0;
    for (let i = 0; i < marks.length; i++) {
    	sum += marks[i];
    }
    let average = sum / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage
}

// Задача 3

function checkBirthday(birthday) {
    let now = +new Date;
    let secBirthday = birthday.split('-');
    let year = Number(secBirthday[0]);
    let month = Number(secBirthday[1] - 1);
    let day = Number(secBirthday[2]);
    birthday = +new Date(year, month, day);
    let diff = now - birthday;
    let age = diff / (1000 * 60 * 60 * 24 * 365.25);
    
    if (age >= 18) {
    	return true
    } else {
    	return false
    }
}
'use strict';

String.prototype.isPalindrome = function isPalindrome() {
	console.log(this.toLowerCase().split(' ').join('').split('').join(''));
	console.log(this.split('').join(''));
	console.log(this.trim());
	const source = this.split(' ').join('').toLowerCase().split('');	
	return source.join('') === source.reverse().join('');
}

// Задача 2

function getAverageMark(marks) {
	if (!marks.length) {
		return 0;
	}

	let sum = 0;
    for (let i = 0; i < marks.length; i++) {
    	sum += marks[i];
    }
    const average = sum / marks.length;
    const roundedAverage = Math.round(average);
    return roundedAverage
}

// Задача 3

function checkBirthday(birthday) {
    const now = +new Date;
    const secBirthday = birthday.split('-');
    const year = Number(secBirthday[0]);
    const month = Number(secBirthday[1] - 1);
    const day = Number(secBirthday[2]);
    // const parsedBirthday = new Date(birthday).getTime();
    // не переназначать аргумент функции
    birthday = +new Date(year, month, day);
    const diff = now - birthday;
    const age = diff / (1000 * 60 * 60 * 24 * 365.25);
    
    if (age >= 18) {
    	return true
    } else {
    	return false
    }
}
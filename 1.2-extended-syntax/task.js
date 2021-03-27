'use strict';

function getResult(a,b,c){
    let d = b**2 - 4 * a * c;
	let x = [];

    if (d === 0) {
    	x[0] = -b / (2 * a); 
    } else if (d > 0) {
    	x[0] = (-b + (Math.sqrt(d))) / 2 * a;
    	x[1] = (-b - (Math.sqrt(d))) / 2 * a;
    }

    return x;
}

function getAverageMark(marks){
    let averageMark = 0;

	if (marks.length > 5) {
		console.log('ВНИМАНИЕ! Вы ввели более 5 оценок!');
    	marks.splice(5);
	}

    if (marks.length > 0) {   	
    	let sum = 0;
    	for (let i = 0; i < marks.length; i++) {
    		sum += marks[i];
    	}
    	averageMark = sum / marks.length;
    } 
 
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    
    if (age > 17) {
    	return `Не желаете ли олд-фэшн, ${name}?`;
    } else {
    	return `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    }
}
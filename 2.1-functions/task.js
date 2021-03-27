'use strict';

function getSolutions(a,b,c) {
    let d = b**2 - 4 * a * c;
    let getSolutions = new Object;
    
    if (d === 0) {
    	let x1 = -b / (2 * a); 
    	getSolutions.D = d;
    	getSolutions.roots = [x1];
    } else if (d > 0) {
    	let x1 = (-b + (Math.sqrt(d))) / (2 * a);
    	let x2 = (-b - (Math.sqrt(d))) / (2 * a);
    	getSolutions.D = d;
    	getSolutions.roots = [x1, x2];
    } else if (d < 0) {
    	getSolutions.D = d;
    	getSolutions.roots = [];
    }

   	return getSolutions;
}

function showSolutionsMessage(a, b, c) {
	let result = getSolutions(a,b,c);
	alert(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	alert(`Значение дискриминанта: ${result.D}`);
	switch (result.roots.length) {
		case 0:
			alert('Уравнение не имеет вещественных корней');
			break;
		case 1:
			alert(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
			break;
		case 2:
			alert(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
	}
}

// Задача 2

function getAverageScore(data) {
	let subjects = Object.keys(data);
	let averageScore = new Object;
	let average = 0;
	
	if (subjects.length === 0) {
		averageScore.average = 0;
		return averageScore;
	}

	for (let i = 0; i < subjects.length; i++) {
			let subject = subjects[i];
			let marks = data[subject];
			let averageMark = getAverageMark(marks)
			averageScore[subject] = averageMark;
			average += averageMark;
	}

	averageScore.average = average / subjects.length;

	return averageScore;
}	

function getAverageMark(marks){    	
	if (marks.length === 0) {
	 	return 0;
    } 

    let sum = 0;

	for (let i = 0; i < marks.length; i++) {
	    sum += marks[i];
	}

    return sum / marks.length;
}



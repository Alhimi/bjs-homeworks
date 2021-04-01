'use strict';

function parseCount(number) {
	const num = Number.parseInt(number);
	if (isNaN(num)) {
		throw new Error('Невалидное значение');
	}
	return num;
}

function validateCount(number) {
	try {
		return parseCount(number);
	} catch(e) {
		return e;
	}		
}

// Задача 2

class Triangle {
	constructor(a, b, c) {
		if (c >= a + b || b >= a + c || a >= c + b ) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}

	getPerimeter() {
		return this.a + this.b + this.c;
	}

	getArea() {
		const p = this.getPerimeter() / 2;
		return Number(Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c)).toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c)
	} catch(e) {
		return {
			getPerimeter(){
				return 'Ошибка! Треугольник не существует'
			},
			getArea(){
				return 'Ошибка! Треугольник не существует'
			}
		}
	}
}
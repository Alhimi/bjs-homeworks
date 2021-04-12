'use strict'

function memorize() {
	function innerResultFunc() {
  };
  return innerResultFunc;
}



// function sleep(milliseconds) {
// 	let e = new Date().getTime() + milliseconds;
// 	while (new Date().getTime() <= e) {}
// }

// ////////

// function sum(...args) {
// 	// Замедление на половину секунды.
// 	sleep(100); // Можно использовать другое значение замедления.
// 	return args.reduce((sum, arg) => {
// 		return sum += +arg;
//   	}, 0);
// }

// /////////////

function compareArrays( arr1, arr2 ) {
	arr1.every
}

// compareArrays([8, 9], [6]); // false, разные значения
// compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); // false, разные значения
// compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные значения
// compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
// compareArrays([8, 1, 2], [8, 1, 2]); // true

// //////////

// function memorize(fn, limit) {

// }

// const mSum = memorize(sum, 5); // 5 результатов может хранится в памяти

// // Вызов этих функций даёт один и тот же результат
// sum(3, 4); // 7
// /* 
//   разница только в том, что mSum запоминает результат (7)
//   и повторно не делает вычисления
//  */
// mSum(3, 4); // 7
'use strict'

// function memorize() {
// 	function innerResultFunc() {
//   };
//   return innerResultFunc;
// }

// function memorize2(a, b, c, d) {
// 	function innerResultFunc(a, b, c, d) {
//     console.log(a, b, c, d)
//   };
//   return innerResultFunc;
// }


// const resultFunction = memorize(a => a ** 2);
// resultFunction(2); // <= должно вызываться без ошибок


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

function compareArrays(arr1, arr2) {
	if (arr1.length === arr2.length && arr1.every(num => num === arr2[arr1.indexOf(num)])) {
    return true;
  } else {
    return false;
  }
}

// //////////


// непонимаю, как можно обЪявить массив в функции так, что бы щт при каждом вызове не переобЪявлялся!?
const memory = []

function memorize(func, limit) {
  function innerResultFunc(...args) {
  	if(memory.some(arr.args === [...args]) {
  		let result = memory.find(arr.args === [...args]).result;
  	} else {
  		let result = func(...args); 
  		memory.push({'args': ...args, 'result': result});	
  	}
    if(memory.length > limit) {
    	memory.shift;
    }
    return result;
    }
  }
  return innerResultFunc;
}





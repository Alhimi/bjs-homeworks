'use strict'

function sleep(milliseconds) {
	let e = new Date().getTime() + milliseconds;
	while (new Date().getTime() <= e) {}
}

// ////////

function sum(...args) {
	// Замедление на половину секунды.
	sleep(100); // Можно использовать другое значение замедления.
	return args.reduce((sum, arg) => {
		return sum += +arg;
  	}, 0);
}

// /////////////

function compareArrays(arr1, arr2) {
  return arr1.every((num, index) => num === arr2[index]) && arr1.length === arr2.length;
}

// //////////

const memory = [];

function memorize(func, limit) {
  function innerResultFunc(...args) {
  	if(memory.find(arr => arr.args === [...args])) {
      return memory.find(arr => arr.args === [...args]).result;
  	} else {
  		let result = func(...args); 
  		memory.push({'args': [...args], 'result': result});	
  	}
    if(memory.length > limit) {
    	memory.shift();
    }
    return result;
  }
  return innerResultFunc;
}

// function memorize(func) {
//   function innerResultFunc(...args) {
//     return func(...args);
//   };
//   return innerResultFunc;
// }





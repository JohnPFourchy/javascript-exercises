const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let total = 0;
  for(let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

const multiply = function(...rest) {
  let total = 1;
  for(let i = 0; i < rest.length; i++) {
    total = total * rest[i];
  }
  return total;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  if(num === 0) {
    return 1;
  } else {
    total = 1;
    for(let i = num; i >= 1; i--) {
      total *= i;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

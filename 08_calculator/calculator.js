const add = function(a = 0, b = 0) {
  return a + b;
};

const subtract = function(a = 0, b = 0) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc, item) => acc + item, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, item) => acc * item, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(nbr) {
  let fact = 1;
	if (nbr <= 1) {
    return fact;
  }
  for (i = 1; i <= nbr; i++) {
    fact *= i;
  }
  return fact;
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

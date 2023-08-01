const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a- b;
};

const sum = function(array) {
	let sum =0;
  for (let i =0 ;i < array.length ; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(...args) {
  let product = 1;
  for(let i = 0; i < args.length; i++){
    product = product * args[i];
  }
  return product;
};

const power = function(a, b) {
  let product = a;
	for (b ; b>1; b--) product= a*product;
  return product;
};

const factorial = function(a) {
	if(a === 0)return 1;
  let product = a;
  a--;
  for(a; a > 0;a--)product = product *a;
  return product;
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

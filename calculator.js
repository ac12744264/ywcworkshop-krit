console.log("Hello")
console.log(add(10,20))

function add(num1,num2){
	return num1 + num2
}

function minus(num1,num2){
	return num1 - num2
}

function multiply(num1,num2){
	return num1 * num2
}

function divide(num1,num2){
	return num1 / num2
}

function sum(num1,num2,num3){
	return num1 + num2 + num3
}


/*
module.exports.add = add
module.exports.minus = minus
module.exports.multiply = multiply
module.exports.divide = divide

exports.add = add
exports.minus = minus
exports.multiply = multiply
exports.divide = divide
*/
module.exports = {
	add: add,
	minus: minus,
	multiply: multiply,
	divide: divide,
	sum: sum
}


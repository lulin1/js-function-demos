/*函数柯里化*/
/*第一版*/
var curry = function (func) {
	var args = [].slice.call(arguments, 1);
	return function () {
		var newArgs = args.concat([].slice.call(arguments));
		return func.apply(this, newArgs);
	}
}
var add = function (a, b) {
	return a + b;
}
var addCurry = curry(add, 1, 2);
addCurry(); //3
var addCurry = curry(add, 1);
addCurry(2); //3
var addCurry = curry(add);
addCurry(1, 2); //3

/*第二版*/
var curry = function (func, args) {
	var len = func.length,
		// args = [].slice.call(arguments, 1);
		args = args || [];
		// console.log(args)
	return function () {
		var newArgs = args.concat([].slice.call(arguments));
		// console.log(len+','+newArgs.length)
		if (newArgs.length < len) {
			return curry.call(this, func, newArgs);
		} else {
			return func.apply(this, newArgs);
		}
	}
}
var beArray = function (a, b, c) {
	console.log([a, b, c]);
}
var fn = curry(beArray); //curry函数里只有一个参数，即要执行的函数
fn('a', 'b', 'c'); // ["a", "b", "c"]
fn("a", "b")("c"); // ["a", "b", "c"]
fn('a')('b')('c'); // ["a", "b", "c"]
fn("a")("b", "c"); // ["a", "b", "c"]

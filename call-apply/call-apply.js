/* Demo of call */
Function.prototype.callByHand = function (context) {
	var context = context || window;
	context.fn = this;
	var args = [];
	for (var i = 1, len = arguments.length; i < len; i++) {
		args.push(arguments[i]);
	}
	var result = context.fn(...args);
	delete context.fn //删除context对象原本没有的fn函数
	return result;
}

var value = 'windowValue';

var obj = {
	'value' : 'objValue'
}

var bar1 = function (name, age) {
	console.log(this.value);
	return {
		value: this.value,
		name: name,
		age: age
	}
}

bar1.callByHand(null); //与bar1.call(null);结果相同
bar1.callByHand(obj, 'lulin', '25'); //与bar1.call(obj, 'lulin', 25);结果相同

/* Demo of apply */
Function.prototype.applyByHand = function (context, arr) {
	var context = context || window;
	context.fn = this;
	var result;
	if (arr) {
		result = context.fn(...arr);
	} else {
		result = context.fn();
	}

	delete context.fn;
	return result;
}

var bar2 = function (...arr) {
	console.log(this.value);
	return [...arr];
}
bar2.applyByHand(obj, [1992, 0, 8, 1, 6]); //与bar2.apply(obj, [1992, 0, 8, 1, 6]);结果相同
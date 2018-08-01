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

var bar = function (name, age) {
	console.log(this.value);
	return {
		value: this.value,
		name: name,
		age: age
	}
}

bar.callByHand(null); //与bar.call(null);结果相同
bar.callByHand(obj, 'lulin', '25'); //与bar.call(obj, 'lulin', 25);结果相同

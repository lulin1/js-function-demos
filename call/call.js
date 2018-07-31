Function.prototype.callByHand = function (context) {
	var context = context || window;
	context.fn = this;
	var args = [];
	for (var i = 1, len = arguments.length; i < len; i++) {
		var arg = 'arguments[' + i + ']';
		args.push(arg);
	}
	console.log('==='+args)
	// context.fn(...args);
	var result = eval('context.fn(' + args +')');
	delete context.fn
	return result;
}

var value = 'window';

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

// bar.call(null);
bar.callByHand(obj, 'lulin', '25');
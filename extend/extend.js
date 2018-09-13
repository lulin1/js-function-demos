var judgeType = function (obj) {
	var toString = Object.prototype.toString;
	return function () {
		return toString.call(arguments[0]) === ('[object ' + obj + ']');
	}
}
var extend = function () {
	var deep = false,
		i = 1,
		src, 
		copy,
		option,
		clone,
		target = arguments[0] || {},
		len = arguments.length,
		isObject = judgeType('Object'),
		isArray = judgeType('Array'),
		isFunction = judgeType('Function'),
		isBoolean = judgeType('Boolean');
	if (isBoolean(target)) {
		deep = target;
		target = arguments[i] || {};
		i++;
	}
	/*如果target不是对象，我们是无法进行复制的，所以设为 {}*/
	if (typeof(target) !== 'object' && !isFunction(target)) {
		target = {};
	}
	for (; i < len; i++) {
		option = arguments[i];
		for(var key in option) {
			src = target[key];
			copy = option[key];
			if (deep && copy && (isObject(copy) || isArray(copy))) {
				if (isObject(copy)) {
				    clone = src && isObject(src) ? src : {};
				} else if (isArray(copy)) {
					clone = src && isArray(src) ? src : [];
				}
				target[key] = extend(deep, clone, copy);
			} else if (copy !== undefined) {
				target[key] = copy;
			}
		}
	}
	return target;
}
/*test demo*/
var obj1 = {
	value: {
		1: 10,
		2: 20
	}
}
var obj2 = {
	value: {
		1: 10,
		3: 30
	}
}
var result = extend(true, obj1, obj2);
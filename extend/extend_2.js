var extend = (function () {
	var isObjFunc = function (name) {
		var toString = Object.prototype.toString
		return function () {
			return toString.call(arguments[0]) === '[object ' + name + ']'
		}
	}
	var isObject = isObjFunc('Object'),
		isArray = isObjFunc('Array'),
		isBoolean = isObjFunc('Boolean')
	return function extend() {
		var index = 0,
			isDeep = false,
			obj, src, copy, destination, source, i
		if (isBoolean(arguments[0])) {
			index = 1
			isDeep = arguments[0]
		}
		for (i = arguments.length - 1; i > index; i--) {
			destination = arguments[i - 1]
			source = arguments[i]
			if (isObject(source) || isArray(source)) {
				console.log(source)
				for (var property in source) {
					obj = source[property];
					src = destination[property];
					if (isDeep && (isObject(obj) || isArray(obj))) {
						if(isObject(obj)) {
							copy = src && isObject(src) ? src : {}; 
                        }
						if(isArray(obj)) {
							copy = src && isArray(src) ? src : []; 
						}
						var extended = extend(isDeep, copy, obj)
						destination[property] = extended
					} else {
						destination[property] = source[property]
					}
				}
			} else {
				destination = source
			}
		}
		return destination
	}
})()
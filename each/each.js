/*模拟实现jQuery的each方法--jQuery 的 each 方法，作为一个通用遍历方法，可用于遍历对象和数组。*/
/*1.第一版*/
var each = function (obj, cb) {
    if (Array.isArray(obj)) {
    	var len = obj.length;
    	for (var i = 0; i < len; i++) {
    		cb(i, obj[i]);
    	}
    } else if (Object.prototype.toString.call(obj) === '[object Object]') {
    	for (var key in obj) {
    		cb(key, obj[key])
    	}
    }
	return obj;
}
each([1, 9, 9, 2], function (i, item) {
    console.log(i, item);
})

/*2.第二版：加上中止循环和this绑定*/
var each = function (obj, cb) {
	var len, i;
	if (Array.isArray(obj)) {
		len = obj.length;
		for (i = 0; i < len; i++) {
			if (cb.call(obj[i], i, obj[i]) === false) { //当回调函数返回 false 的时候，就中止循环
				break;
			}
		}
	} else if (Object.prototype.toString.call(obj) === '[object Object]') {
		for (i in obj) {
			if (cb.call(obj[i], i, obj[i]) === false) { //当回调函数返回 false 的时候，就中止循环
				break;
			}
		}
	}
	return obj;
}
var person = [{name: 'liao'}, {name: 'lulin'}];
each(person, function (i, item) {
    item.age = 25 + i;
}) //[{name: "liao", age: 25}, {name: "lulin", age: 26}]

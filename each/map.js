/*模拟实现jQuery的map方法*/
/*map和each的区别:
	1.map中的参数和each中的参数是相反的
		map(arr, function(elem, index) {});
		each(arr, function(index, elem) {});
	2.each()返回的是原来的数组，并不会新创建一个数组。
	  map()方法会返回一个新的数组。如果在没有必要的情况下使用map，则有可能造 成内存浪费
*/
var map = function (obj, cb) {
	var len, i,
		objCopy = JSON.parse(JSON.stringify(obj));
	if (Array.isArray(objCopy)) {
		len = objCopy.length;
		for (i = 0; i < len; i++) {
			if (cb.call(objCopy[i], objCopy[i], i) === false) { //当回调函数返回 false 的时候，就中止循环
				break;
			}
		}
	} else if (Object.prototype.toString.call(objCopy) === '[object Object]') {
		for (i in objCopy) {
			if (cb.call(objCopy[i], objCopy[i], i) === false) { //当回调函数返回 false 的时候，就中止循环
				break;
			}
		}
	}
	return objCopy;
}
var person = [{name: 'liao'}, {name: 'lulin'}];
map(person, function (item, i) {
    item.age = 25 + i;
}) //[{name: "liao", age: 25}, {name: "lulin", age: 26}]

/*共12种类型: Number, String, Boolean, Undefined, Null, Object, Array, Function, RegExp, Date, Error, Arguments*/
var typeMape = {}; //类型映射
var mapping = function (obj) {
	"Number, String, Boolean, Undefined, Null, Object, Array, Function, RegExp, Date, Error, Arguments".split(', ').map(function (item, index) {
		typeMape['[object ' + item + ']'] = item.toLowerCase();
	})
}
mapping(); //生成typeMape映射
var type = function (obj) {
	if (obj == null) { //针对IE6做兼容: IE6 中，null 和 undefined 会被 Object.prototype.toString 识别成 [object Object]！
		return obj + '';
	}
	return typeof obj === 'object' || typeof obj === 'function' ? typeMape[Object.prototype.toString.call(obj)] || 'object' : typeof obj;
}

type('0816'); // 1."string"
type(0816); // 2."number"
type(true); // 3."boolean"
type(undefined); // 4."undefined"
type(null); // 5."null"
type({}); // 6."object"
type([0, 8, 1, 6]); // 7."array"
type(function(){}); // 8."function"
type(new Date); // 9."date"
type(new Error); // 10."error"
type(new RegExp); // 11."regexp"
var argumentsType = function () {
	return type(arguments);
}
argumentsType(); // 12."arguments"

/*new的模拟实现:
 * 1.执行构造函数，this指向实例对象
 * 2.实例对象的__proto__指向构造函数的prototype
 */
var newByHand = function () {
	var obj = {},
		cons = [].shift.call(arguments);
	obj.__proto__ = cons.prototype;
	var ret = cons.apply(obj, arguments);
	return typeof ret === 'object' ? ret : obj; //假如构造函数有返回值,且返回值是对象,那么在实例 obj 中只能访问返回的对象中的属性,即obj为:{age: 26}, 而不是{name: "lulin", age: 26, habit: "dance"}
}

var Person = function (name, age) {
	this.name = name;
	this.habit = 'dance';
	return {
		age : age
	}
}
Person.prototype.sex = 'girl';

var obj = newByHand(Person, 'lulin', 26); //等同于var obj = new Person('lulin', 26);
obj;//{age: 26}

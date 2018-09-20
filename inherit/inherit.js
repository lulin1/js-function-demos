/*js辅助函数inherit-用途是创建一个继承父类原型的新对象*/
var inherit = function (protoFunc) {
	/*proto是一个对象，但不能是null*/
    if (protoFunc === null) {
    	throw TypeError();
    }
    /*如果Object.create()存在,直接使用它*/
    if (Object.create) {
    	return Object.create(protoFunc);
    }
    /*否则进一步检查,并使用另一种方法实现继承*/
    if (typeof protoFunc !== 'object' && typeof protoFunc !== 'function') {
    	throw TypeError();
    }
    var fn = function () {}; //定义一个空构造函数
    fn.prototype = protoFunc; // 将其原型属性设置为protoFunc
    var newObj = new fn(); //使用new fn()创建protoFunc的继承对象
    return newObj;
}

var func = function () {};
func.text = 'proto-func';
func.getText = function () {
	return this.text;
}

var newInstance = inherit(func);
newInstance.getText(); //"proto-func"
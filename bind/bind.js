 /*bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。(来自于 MDN )*/

 // if (!Function.prototype.bind) {
 	Function.prototype.bind = function (oThis) {
 		if (typeof this !== 'function') {
 			throw new error('Function.prototype.bind-cannot callable');
 		}

 		var doThis = this,
 			funcNop = function () {},
 			doArgs = Array.prototype.slice.call(arguments, 1),
 			funcBound = function () {
 				return doThis.apply(this instanceof funcNop ? this : oThis, doArgs.concat(Array.prototype.slice.call(arguments)));
 			};
		if (this.prototype) {
			funcNop.prototype = this.prototype;
		}
		funcBound.prototype = new funcNop();
		return funcBound;
 	}
 // }

 /*test case*/
 function foo () {
 	this.b = 1;
 	return this.a;
 }
 
 var test = foo.bind({a:2}); //test->funcBound

 test(); // 2----直接调用func()的时候，this指向的是全局对象，那么结果是oThis/{a:2}，这样就可以让这个doThis的this指向这个传进来的对象oThis；
 var test2 = new test(); //如果通过new func()来调用，this会指向一个空对象，这个空对象的原型会指向构造器test的prototype的属性，也就是test/funcBound的prototype属性。此时this instanceof fNOP 为true，那么返回的是this就是当前正常的this；相当于忽略掉bind的this的影响
 test2 // funcBound {b: 1}
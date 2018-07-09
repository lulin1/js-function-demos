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
 
 var test = foo.bind({a:2});
 test(); // 2
 var test2 = new test();
 test2 // funcBound {b: 1}
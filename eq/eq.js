/*判断两个对象是否相等*/
/* +0不等于-0, NaN等于NaN
   此外,
   1.‘curry’和 new String('curry')相等；
   2.6和 new Number(6)相等；
   3.true和 new Boolean(true)相等；
   4.new Date(2018, 9, 19)要和 new Date(2018, 9, 19)相等；
   5./a/i要和 new RegExp(/a/i)相等。
*/
var eq = function (a, b) {
	if (a === b) { //区别出 +0 和 -0不相等
		return a !== 0 || 1 / a === 1 / b;
	}
	if (a !== a) { // 判断 NaN等于NaN
		return b !== b;
	}
	if (typeof(a) !== 'object' && typeof(a) !== 'function' && typeof(b) !== 'object') { //如果是基本类型，直接返回 false
		return false;
	}
	return deepEq(a, b); //否则更复杂的对象使用 deepEq 函数进行深度比较
}
var deepEq = function (a, b) {
	var toString = Object.prototype.toString,
		typeofA = toString.call(a),
		typeofB = toString.call(b);
	if (typeofA !== typeofB) {
		return false;
	}
	/*使用new一个实例时的判断*/
	switch (typeofA) {
		case '[object String]':
		case '[object RegExp]':
			return a + '' === b + '';
		case '[object Boolean]':
		case '[object Date]':
			return +a === +b;
		case '[object Number]':
			if (+a !== +a) { //a is NaN
				return +b !== +b; //判断b是否为NaN
			}
			return +a === 0 ? 1 / +a === 1 / +b : +a === +b;
	}
	/*数组判断*/
	if (Array.isArray(a)) {
		var lenOfA = a.length,
			i = 0;
		if (lenOfA !== b.length) {
			return false;
		}
		for (;i < lenOfA; i++) {
			if (!eq(a[i], b[i])) {
				return false;
			}
		}
	}
	/*对象判断*/
	else if (typeofA === '[object Object]') {
		var keysOfA = Object.keys(a),
			keysOfB = Object.keys(b),
			key;
		if (keysOfA.length !== keysOfB.length) {
			return false;
		}
		for (key in a) {
			if (!(b.hasOwnProperty(key) && eq(a[key], b[key]))) {
				return false;
			}
		}

	}
	return true;
}

eq(0, 0); //true
eq(0, -0); //false
eq(NaN, NaN); //true
eq(null, null); //true
eq(6, new Number(6)); //true
eq('curry', new String('curry')); //true
eq(true, new Boolean(true)); //true
eq(/a/i, new RegExp(/a/i)); //true
eq(new Date(2018, 9, 19), new Date(2018, 9, 19));
eq([1, 9, 9, 2], [1, 9, 9, 2]); //true
eq({name: 'lulin', sex: 'girl'}, {name: 'lulin', sex: 'girl'}); //true
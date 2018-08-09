/*1.浅拷贝--concat&slice*/

	/*1.1.如果数组元素是基本类型，就会拷贝一份，互不影响，*/
	var a = ['old-a', 1, 2];
	var b = a.concat();
	var c = a.slice();
	b[0] = 'new-b';
	c[0] = 'new-c';
	console.log(a); //["old", 1, 2]
	console.log(b); //["new-b", 1, 2]
	console.log(c); //["new-c", 1, 2]

	/*1.2.而如果数组元素是 对象 或者 数组，就会只拷贝对象和数组的引用，这样在新旧数组进行了修改，两者都会发生变化。*/
	var a = [{name: 'a'}, [1,2]];
	var b = a.concat();
	var c = a.slice();
	b[0].name = 'b';
	b[1][0] = 11;
	c[0].name = 'c';
	b[1][0] = 111;
	console.log(a); //[{'name': 'c'}, [111,2]];
	console.log(b); //[{'name': 'c'}, [111,2]];
	console.log(c); //[{'name': 'c'}, [111,2]];


/*深拷贝是指完全的拷贝一个对象，即使嵌套了对象，两者也相互分离，修改一个对象的属性，也不会影响另一个。*/

/*2.深拷贝--JSON.parse( JSON.stringify(arr));*/

	/*2.1.深拷贝一个数组，不仅适用于数组中的 数组元素 还适用于 对象元素*/
	var a = [{name: 'a'}, [1,2]];
	var b = JSON.parse(JSON.stringify(a));
	b[0].name = 'b';
	b[1][0] = 11;
	console.log(a); //[{'name': 'a'}, [1,2]]; --b数组中的对象和数组元素改变后a数组未受影响
	console.log(b); //[{'name': 'b'}, [11,2]];

	/*2.2.但是不能拷贝函数*/
	var a = [{name: 'a'}, function () {console.log('Its a')}];
	var b = JSON.parse(JSON.stringify(a));
	console.log(b); //[{'name': 'a'}, null];

/*3.深拷贝的实现--在拷贝的时候判断一下属性值的类型，如果是对象，递归调用深拷贝函数就好了~*/
	var deepCopy = function (obj) {
		if (typeof obj !== "object") return obj; //如果是基本类型（null、undefined、boolean、string、number），即不需要深拷贝时，可以直接返回
		var newObj = obj instanceof Array ? [] : {};
		for(var key in obj) {
			if (obj.hasOwnProperty(key)) {
				newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]; //注意: obj[key]为函数时，typeof obj[key] 等于"function",不等于 "object"，所以会直接返回obj[key]
			}
		}
		return newObj;
	}

	var a = [{name: 'a'}, function () {console.log('Its a')}];
	var b = deepCopy(a);
	console.log(b); //[{'name': 'a'}, function () {console.log('Its a')}];


/*性能问题--尽管使用深拷贝会完全的克隆一个新对象，不会产生副作用，但是深拷贝因为使用递归，性能会不如浅拷贝，在开发中，还是要根据实际情况进行选择。*/
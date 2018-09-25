/* 实现一个LazyMan，可以按照以下方式调用:
	LazyMan(“Hank”)输出:
	Hi! This is Hank!

	LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
	Hi! This is Hank!
	//等待10秒..
	Wake up after 10
	Eat dinner~

	LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
	Hi This is Hank!
	Eat dinner~
	Eat supper~

	LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
	//等待5秒
	Wake up after 5
	Hi This is Hank!
	Eat supper
	 
	以此类推。
 */
var _lazyMan = function (name) {
	this.tasks = [];
	var self = this;
	var fn = (function (n) {
		var name = n;
		return function () {
			console.log('Hi! This is ' + name + '!');
			self.next();
		}
	})(name)
	this.tasks.push(fn);
	// 在下一个事件循环启动任务
	setTimeout(function () {
		self.next();
	}, 0)
}
/*事件调度函数*/
_lazyMan.prototype.next = function () {
	var fn = this.tasks.shift();
	fn && fn();
}
_lazyMan.prototype.eat = function (food) {
	var self = this;
	var fn = (function (food) {
		return function () {
			console.log('Eat ' + food + '~');
			self.next();
		}
	})(food)
	this.tasks.push(fn);
	return this; // 实现链式调用
}
_lazyMan.prototype.sleep = function (time) {
	var self = this;
	var fn = (function (t) {
		var time = t;
		return function () {
			setTimeout(function () {
				console.log('Wake up after ' + time + 's!');
				self.next();
			}, time * 1000);
		}
	})(time);
	this.tasks.push(fn);
	return this;
}
_lazyMan.prototype.sleepFirst = function (time) {
	var self = this;
	var fn = (function (time) {
		return function () {
			setTimeout(function () {
				console.log('Wake up after ' + time + 's!');
				self.next();
			}, time * 1000);
		}
	})(time);
	this.tasks.unshift(fn); //将事件sleepFirst通过unshift方法插入到tasks数组第一项的位置，从而实现优先执行
	return this;
}
/*封装*/
var lazyMan = function (name) {
	return new _lazyMan(name);
}
/*举个例子*/
lazyMan('lulin').sleepFirst(3).eat('mint').eat('ice-cream')
// _lazyMan {tasks: Array(4)}
//等待3秒
// Wake up after 3s!
// Hi! This is lulin!
// Eat mint~
// Eat ice-cream~
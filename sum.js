function sum () {
	this.argsArr = [].slice.call(arguments);
	//console.log(argsArr);
	var that = this;
	return {
		v: function () {
			var result = 0;
			console.log(that.argsArr);
			for (var i = 0; i < that.argsArr.length; i++) {
				result += that.argsArr[i];
			}
			return result;
		}
	}
}

sum(1, 2).v(); //3
sum(1, 2)(3, 4).v(); //10
sum(1)(2)(3).v(); //6
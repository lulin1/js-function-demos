/*repeat方法-字符串*/
String.prototype.repeatMine = function () {
	var times = [].slice.call(arguments), 
		i,
		newStr = '' + this;
	if (times == Infinity) {
       throw new RangeError('repeat count must be less than infinity');
    }
	times = Math.floor(times);
	if (times <= 0) {
		return '';
	} else if (times === 1) {
		return newStr;
	} else {
		for (i = 2; i <= times; i++) {
			newStr += this;
		}
		return newStr;
	}
}
'hello-'.repeatMine(0); //""
'hello-'.repeatMine(1); //"hello-"
'hello-'.repeatMine(2); //"hello-hello-"
'hello-'.repeatMine(3); //"hello-hello-hello-"
'hello-'.repeatMine(4.6); //"hello-hello-hello-hello-"
'hello-'.repeatMine(5.1); //"hello-hello-hello-hello-hello-"
'hello-'.repeatMine(1/0); //Uncaught RangeError: repeat count must be less than infinity
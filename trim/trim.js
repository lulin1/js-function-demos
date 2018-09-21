/*手写实现trim功能:
	删除字符串开始和结束位置的空格，类似还有trimLeft和trimRight函数
	/s: 匹配任意的空白符（包括空格、换行、tab缩进等所有空白）
	/S: 匹配所有不是空格的字符（与\s相反）
	[/s/S]: 表示所有的都匹配
*/
String.prototype.trimMine1 = function () {
	return this.replace(/^\s*/, '').replace(/\s*$/, ''); // * 匹配零次或多次
}
String.prototype.trimMine2 = function () {
	return this.replace(/^\s+/, '').replace(/\s+$/, ''); // + 匹配一次或多次--和实现1很相似，但稍慢一点，主要原因是它最先是假设至少存在一个空白符。
}
String.prototype.trimMineLeft = function () {
	return this.replace(/^\s+/, '');
}
String.prototype.trimMineRight = function () {
	return this.replace(/\s+$/, '');
}

'   hello   '.trimMine1(); //'hello'
'   hello   '.trimMine2(); //'hello'

'   hello   '.trimMineLeft(); //"hello   "
'   hello   '.trimMineRight(); //"   hello"
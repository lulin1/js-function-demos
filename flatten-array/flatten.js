/*数组扁平化*/
var flatten = function (arr) {
	while (arr.some(item => Array.isArray(item))) {
		arr = [].concat(...arr);
	}
	return arr;
}
var testArray = [1, [2,3], [4, 5, 6]];
flatten(testArray); //[1, 2, 3, 4, 5, 6]
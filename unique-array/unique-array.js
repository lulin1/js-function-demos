/* Method one : ES6 */
var uniqueOne = (a) => [...new Set(a)];

/* Method two : indexOf */
var uniqueTwo = function (arr) {
	var uniArr = [];
	for (var i = 0; i < arr.length; i++) {
		var current = arr[i];
		if (uniArr.indexOf(current) === -1) {
			uniArr.push(current);
		}
	}
	return uniArr;
}

/* Method three: quickSort*/
var uniqueThree = function (arr) {
	if (arr.length <= 1) { return arr };
	var pivotIndex = Math.floor(arr.length / 2), //求基准值在数组中的下标
		pivot = arr.splice(pivotIndex, 1)[0], //求基准值, [0]是将基准值的格式从数组变为具体某个数值
		left = [], right = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else if (arr[i] > pivot) {
			right.push(arr[i]);
		}
	}
	return uniqueThree(left).concat([pivot], uniqueThree(right)); //使用递归不断重复这个过程，就可以得到排序后的数组
}

var array = [1, 9, 9, 2, 0, 8, 1, 6];
console.log('Method one result : ' + uniqueOne(array)); //[1, 9, 2, 0, 8, 6]
console.log('Method two result : ' + uniqueTwo(array)); //[1, 9, 2, 0, 8, 6]
console.log('Method three result : ' + uniqueThree(array)); //[0, 1, 2, 6, 8, 9]

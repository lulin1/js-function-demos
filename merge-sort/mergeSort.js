
var mergeSlice = function (arr) {
	var len = arr.length,
		middle,
		left = [],
		right = [];
	if (len < 2) {
		return arr;
	}
	middle = Math.floor(len/2);
	left = arr.slice(0, middle);
	right = arr.slice(middle);
	return mergeSort(mergeSlice(left), mergeSlice(right));
}

var mergeSort = function (left, right) {
	var temp = [];
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			temp.push(left.shift());
		} else {
			temp.push(right.shift());
		}
	}
	while (left.length) {
		temp.push(left.shift());
	}
	while (right.length) {
		temp.push(right.shift());
	}
	return temp;
}

var testArr = [1, 9, 9, 2, 0, 8, 1, 6];
mergeSlice(testArr); //[0, 1, 1, 2, 6, 8, 9, 9]
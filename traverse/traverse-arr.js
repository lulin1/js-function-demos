var arr = [1, 2, 3, 4];
function traverseLeft (arr, n) {
	var left = arr.slice(0, n),
		right = arr.slice(n);
	return right.concat(left);
}
traverseLeft(arr, 1); //[2, 3, 4, 1]
function traverseRight (arr, n) {
	var len = arr.length,
		index = len-1-(n-1);
	var right = arr.slice(index),
		left = arr.slice(0, index);
	return right.concat(left);
}
traverseRight(arr, 1); //[4, 1, 2, 3]
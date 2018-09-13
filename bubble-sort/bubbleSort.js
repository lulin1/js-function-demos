/*冒泡排序*/
var bubbleSort = function (arr) {
	var len = arr.length;
	for (var i = 0; i < len - 1; i++) {
		for (var j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}
var testArr = [1, 9, 9, 2, 0, 8, 1, 6];
bubbleSort(testArr); //[0, 1, 1, 2, 6, 8, 9, 9]
var quickSort = function (arr) {
	if (arr.length <= 1) { return arr };
	var pivotIndex = Math.floor(arr.length / 2), //求基准值在数组中的下标
		pivot = arr.splice(pivotIndex, 1)[0], //求基准值, [0]是将基准值的格式从数组变为具体某个数值
		left = [], right = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return quickSort(left).concat([pivot], quickSort(right)); //使用递归不断重复这个过程，就可以得到排序后的数组
}

var array = [1, 9, 9, 2, 0, 8, 1, 6];
quickSort(array); //[0, 1, 1, 2, 6, 8, 9, 9]
var insertionSort = function (arr) {
	var arrLen = arr.length, preIndex, current;
	for(var i = 1; i < arrLen; i++) {
		preIndex = i - 1;
		current = arr[i];
		while(preIndex >= 0 && arr[preIndex] > current) {
			arr[preIndex + 1] = arr[preIndex];
			preIndex--;
		} 
		arr[preIndex + 1] = current;
	}
	return arr;
}
var array = [1, 9, 9, 2, 0, 8, 1, 6];
insertionSort(array);
console.log(array); //[0, 1, 1, 2, 6, 8, 9, 9]
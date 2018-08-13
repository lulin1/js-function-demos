var selectionSort = function (arr) {
	var arrLen = arr.length;
	var temp, minIndex;
	for(var i = 0; i < arrLen - 1; i++) {
		minIndex = i;
		for(var j = i + 1; j < arrLen; j++) {
			if (arr[j] < arr[minIndex]) { //寻找最小的数
				minIndex = j; //将最小数的索引保存
			}
		}
		temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}
	return arr;
}
var arrayOld = [1, 9, 9, 2, 0, 8, 1, 6];
selectionSort(arrayOld);
console.log(arrayOld); //[0, 1, 1, 2, 6, 8, 9, 9]
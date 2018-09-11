/*计数排序*/
var countingSort = function (arr, maxValue) {
	var bucket = new Array(maxValue + 1),
		bucketLen = maxValue + 1,
		sortedIndex = 0,
		arrLen = arr.length;
	for(var i = 0; i < arrLen; i++) {
		if (!bucket[arr[i]]) {
			bucket[arr[i]] = 0;
		}
		bucket[arr[i]]++;
		console.log(bucket);
	}
	for(var j = 0; j < bucketLen; j++) {
		while(bucket[j] > 0) {
			arr[sortedIndex] = j;
			console.log('arr[sortedIndex]==='+arr[sortedIndex])
			sortedIndex++;
			bucket[j]--;
		}
	}
	return arr;
}

var testArr = [1, 9, 9, 2];
countingSort(testArr, 9); // [1, 2, 9, 9]

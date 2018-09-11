/*计数排序*/
var countingSort = function (arr, maxValue) {
	var bucket = new Array(maxValue + 1),
		bucketLen = maxValue + 1,
		sortedIndex = 0,
		arrLen = arr.length;
	for(var i = 0; i < arrLen; i++) { //将arr[i]的值作为bucket的key（键）
		if (!bucket[arr[i]]) {
			bucket[arr[i]] = 0;
		}
		bucket[arr[i]]++; //计算arr[i]在bucket中(作为bucket的key)出现的次数
		console.log(bucket);
	}
	for(var j = 0; j < bucketLen; j++) {
		while(bucket[j] > 0) { //如果bucket的key（j）对应的值（即对key的计数）大于0
			arr[sortedIndex] = j;
			console.log('arr[sortedIndex]==='+arr[sortedIndex])
			sortedIndex++;
			bucket[j]--; //对同一个key的计数有多少个就赋值给arr多少次
		}
	}
	return arr;
}

var testArr = [1, 9, 9, 2];
countingSort(testArr, 9); // [1, 2, 9, 9]

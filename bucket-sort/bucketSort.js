/*桶排序*/
var bucketSort = function (arr, bucketNum) {
	var arrLen = arr.length,
		bucketNum = bucketNum || 5,
		maxNum = Math.max(...arr),
		minNum = Math.min(...arr),
		bucketRange = Math.floor((maxNum - minNum) / bucketNum) + 1, //求出每一个桶的数值范围
		buckets = [],
		newArray = [];
		for(var i = 0; i < arrLen; i++) {
			var index = Math.floor((arr[i] - minNum) / bucketRange); //找到相应的桶序列
			console.log('buckets index ===='+index)
			if (!buckets[index]) { //新增数值入桶，暂时用数组模拟链表
				buckets[index] = [];
				buckets[index].push(arr[i]);
				
				console.log('===='+buckets[index])
			} else {
				buckets[index].push(arr[i]);
				insertionSort(buckets[index]); //对每个桶进行排序，这里使用了插入排序
			}
		}
		console.log('buckets.length===='+buckets.length)
		//开始合并数组,即将每个排好序的桶（数组）进行合并
		for(var j = 0; j < buckets.length; j++) {
			if (buckets[j]) {
				for(var k = 0; k < buckets[j].length; k++) {
					newArray.push(buckets[j][k]);
				}
				//newArray = newArray.concat(buckets[j]);
			}
		}
		return newArray;
}

var testArray = [1, 9, 9, 2, 0, 8, 1, 6];
bucketSort(testArray, 5);
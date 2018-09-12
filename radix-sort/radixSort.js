/*基数排序*/
var radixSort = function (arr) {
	var arrMax = Math.max(...arr),
		sortTimes = calcuTimes(arrMax), //计算最大值的位数
		buckets = [];
	for(var i = 0; i < 10; i++) { //初始化10个空桶
		buckets[i] = [];
	}
	for(var j = 1; j <= sortTimes; j++) { //最大数的位数是几，就循环几次。比如最大位数是2，则循环两次，分别将个位和十位上的数进行分桶
		sortByRadix(arr, j, buckets); //分别将个位、十位、百位、千位...上的数值放到对应序号的桶中
	}
	return arr;
}
var calcuTimes = function (arrMax) {
	var times = 0;
	while(arrMax > 1) {
		times++;
		arrMax /= 10;
	}
	return times;
}
var calBucketsIndex = function (num, radix) { // 根据数字某个位数上的值得到桶的编号
	return parseInt((num % Math.pow(10, radix) / Math.pow(10, radix - 1)));
}
var sortByRadix = function (arr, radix, buckets) {
	var index,
		len = arr.length;
	 //入桶
	for(var k = 0; k < len; k++) {
		index = calBucketsIndex(arr[k], radix);
		buckets[index].push(arr[k]);
		//console.log(index + ',' + buckets[index]);
	}
	//重写原桶
	var ii = 0;
	for(var t = 0; t < 10; t++) {
		var bucket = buckets[t];
		for(var p = 0; p < bucket.length; p++) {
			arr[ii++] = bucket[p];
		}
		bucket.length = 0;
	}
}
var test =[3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
radixSort(test); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
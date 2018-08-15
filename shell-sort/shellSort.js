var shellSort = function (arr) {
	var temp,
		gap = 1,
		len = arr.length;
	while (gap < len / 3) {
		gap = gap*3 + 1;
	}
	for(gap; gap > 0; gap = Math.floor(gap/3)) {
		for(var i = gap; i < len; i++) {
			temp = arr[i];
			for(var j = i - gap; j >= 0 && temp < arr[j]; j -= gap) {
				arr[j + gap] = arr[j];
			}
			arr[j + gap] = temp;
		}
	}
	return arr;
}

var arrayOld = [1, 9, 9, 2, 0, 8, 1, 6];
shellSort(arrayOld);
console.log(arrayOld); //[0, 1, 1, 2, 6, 8, 9, 9]
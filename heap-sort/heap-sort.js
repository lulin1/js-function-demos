/*堆排序*/
var len;
/*创建最大堆（Build-Max-Heap）：将堆所有数据重新排序，使其成为最大堆*/
var buildMaxHeap = function(arr) {
	len = arr.length;
	var iparent = Math.floor(len/2) - 1;
	for(var i = iparent; i >= 0; i--) { //从最后一个堆的父节点开始，将每个堆进行调整（即调用heapify方法使得每个堆的子节点均小于父节点）,直至i==0(即最顶端的父节点调用heapify进行该堆的父子节点调整)
		heapify(arr, i);
	}
}
/*最大堆调整（heapify）：以每个堆的父节点开始，将每个堆的子节点作调整，使得子节点永远小于父节点*/
var heapify = function (arr, index) {
	var iLeft = index * 2 + 1,
		iRight = index * 2 + 2,
		iMax = index;
	if (iLeft < len && arr[iLeft] > arr[iMax]) {
		iMax = iLeft;
	}
	if (iRight < len && arr[iRight] > arr[iMax]) {
		iMax = iRight;
	}
	if (iMax !== index) {
		swap(arr, iMax, index);
		heapify(arr, iMax); //递归调用heapify方法，使得子节点小于父节点
	}
}
var swap = function (arr, i, j) {
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}
/*堆排序（heapSort）：移除位在第一个数据的根节点，并从上至下做 最大堆调整(heapify) 的递归运算*/
var heapSort = function (arr) {
	buildMaxHeap(arr);
	for(var i = arr.length -1; i > 0; i--) {
		swap(arr, 0, i);
		len--;
		heapify(arr, 0);
	}
	return arr;
}

var testArr = [1, 9, 9, 2, 0, 8, 1, 6];
heapSort(testArr); //[0, 1, 1, 2, 6, 8, 9, 9]
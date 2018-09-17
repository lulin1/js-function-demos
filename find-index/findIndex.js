/*在数组中查找指定元素*/

/*1.正序查找*/
var findIndex = function (arr, func, context) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        if(func.call(context, arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
}
findIndex([1, 9, 9, 2], function (item, i, arr){
    if(item === 9) {
        return true;
    } else {
        return false;
    }
})  //1

/*2.倒序查找*/
var findLastIndex = function (arr, func, context) {
    var len = arr.length;
    for (var i = len - 1; i >= 0; i--) {
        if (func.call(context, arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
}
findLastIndex([1, 9, 9, 2], function (item, i, arr) {
    if (item === 9) {
        return true;
    } else {
        return false;
    }
})  //2

/*3.findIndex 和 findLastIndex 有很多重复的部分,下面利用传参的不同，返回不同的函数*/
var creatIndexFinder = function (para) {
    return function (arr, func, context) {
        var len = arr.length,
            i = para > 0 ? 0 : len - 1;
        for (; i >= 0 && i < len; i += para) {
            if (func.call(context, arr[i], i, arr)) {
                return i;
            }
        }
        return -1;
    }
}
var findIndex = creatIndexFinder(1);
var findLastIndex = creatIndexFinder(-1);

/*4.在一个排好序的数组中找到 value 对应的位置，保证插入数组后，依然保持有序的状态。*/
var sortedIndex = function (arr, item) {
    var len = arr.length,
        middle,
        low = 0;
        high = len - 1;
    while (low < high) {
        middle = Math.floor((low + high) / 2);
        if (arr[middle] < item) {
            low = middle + 1;
        } else {
            high = middle;
        }
    }
    return high;
}
sortedIndex([1, 2, 9, 9], 8); //2
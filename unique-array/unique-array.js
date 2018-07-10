/* Method one : ES6 */
var uniqueOne = (a) => [...new Set(a)];

/* Method two : indexOf */
var uniqueTwo = function (arr) {
	var uniArr = [];
	for (var i = 0; i < arr.length; i++) {
		var current = arr[i];
		if (uniArr.indexOf(current) === -1) {
			uniArr.push(current);
		}
	}
	return uniArr;
}

var array = [1, 9, 9, 2, 0, 8, 1, 6];
console.log('Method one result : ' + uniqueOne(array)); //[1, 9, 2, 0, 8, 6]
console.log('Method two result : ' + uniqueTwo(array)); //[1, 9, 2, 0, 8, 6]

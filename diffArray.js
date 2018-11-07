var a = [8,2,12,41,9],
	b = [4,22,31,41],
	result = [];
function diffArr (a, b) {
    for(var i = 0; i < a.length; i++){
        var bIndex = b.indexOf(a[i]);
        while (bIndex >= 0){
            b.splice(bIndex,1);
            bIndex = b.indexOf(a[i]);
        }
        //console.log(b);
    }
	return b;
}
diffArr(a,b)
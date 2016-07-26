/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 7, 15, 27], 27);
 * console.log(index); // 4
 */
var binarySearch = function (array, target) {
	debugger;
	if(array.length===0)
		return -1;
	var mid=Math.floor((array.length-1)/2);//2
	if(array[mid]===target)
		return mid;

	if(array[mid]>target){
		return binarySearch(array.slice(0,mid),target)
	}
	else
		return binarySearch(array.slice(mid+1,array.length),target)	
};

// var cou =0;
// var flag=false;
// var binarySearch = function (array, target) {
// 	debugger;
// 	if(array.length===0)
// 		return -1;
// 	var mid=Math.floor((array.length-1)/2);//2
// 	if(array[mid]===target){
// 		flag=true;
// 	}

// 	if(array[mid]>target){
// 		cou+=binarySearch(array.slice(0,mid),target);
// 		if(flag)
// 			return cou;
// 	}
// 	else{
// 		cou+=binarySearch(array.slice(mid+1,array.length),target)	;
// 		if(flag)
// 			return cou;
// 	}
// };


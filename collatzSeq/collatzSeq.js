/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/
var calculate=function(number){
	var results=[];
	while(number > 1){
		results.push(number);
		if(number % 2 !== 0){
				number= 3 * number + 1;
				results.push(number);
			}else{
				number= number / 2;
				results.push(number);
			}
	}
	return results.length;
}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

var longestCollatzSeq = function(){
	var max=0;
	var results=[];
	//my console crashed when the number was million but it worked for 100 thousands
	for (var i = 0; i < 100000; i++) {
		results.push(calculate(i));
	}
	max=getMaxOfArray(results);
	return results.indexOf(max); 
}


module.exports = longestCollatzSeq;

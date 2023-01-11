function hasTargetSum(array, target) {
	// Write your algorithm here
	const arrayMap = {}; // {}
	for (arrayValue of array) {
		//2
		console.log(arrayMap);
		console.log(arrayMap[arrayValue]);
		const targetMinusValue = target - arrayValue; // 4-2 = 2
		if (arrayMap[arrayValue] !== undefined) {
			//
			return true;
		} else {
			arrayMap[targetMinusValue] = arrayValue; // 2:2
		}
	}
	return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/
// sort array from least to greatest (array.sort((a,b) => a-b))
// binary search
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
	// add your own custom tests in here
	console.log("Expecting: true");
	console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

	console.log("");

	console.log("Expecting: true");
	console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

	console.log("");

	console.log("Expecting: false");
	console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

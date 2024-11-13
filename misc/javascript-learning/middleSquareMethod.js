function middleSquareMethod(seed) {
	// take the square root first
	var result = (seed * seed).toString();
    	var middleIndex = Math.floor(result.length / 2);
    	var middleDigits = result.slice(middleIndex - 2, middleIndex + 2);

    	// If the middle digits are less than 4 characters, pad with zeros
    	if (middleDigits.length < 4) {
        	middleDigits = middleDigits.padStart(4, "0");
    	}	

    return parseInt(middleDigits);
}

// Get randomized numbers in for loops
var seed = 45;
for (var i = 0; i < 15; i++) {
    seed = middleSquareMethod(seed);
    console.log(seed);
}

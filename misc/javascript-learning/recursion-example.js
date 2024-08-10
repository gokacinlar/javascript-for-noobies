function recursionExample(start, end) {
	if(start < end) {
		return recursionExample(start + 1, end);
	} else {
		return start;
	}
}

console.log(recursionExample(5, 180));
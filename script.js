function firstNonRepeatedChar(str) {
    const charCount = {};
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    for (let count of str){
        if (charCount [count] === 1){
            return count;
        }
    }
	return null;
	
    
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

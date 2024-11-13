// Ceaser's Cipher's Encryption
function encrypt(plainText, key) {
	// Encrpyt the plain text
	const alphabet = "abcçdefgğhıijklmnoöprsştuüvyz";
	let cipherText = "";
	
	for(let char of plainText) {
		let ptCharIndex = alphabet.indexOf(char);
		if(ptCharIndex !== -1) {
			let ctCharIndex = (ptCharIndex + key) % 29;
			cipherText += alphabet[ctCharIndex];
		} else {
			cipherText += char;
		}
	}
	return cipherText;
}

console.log(encrypt("hello", 2));

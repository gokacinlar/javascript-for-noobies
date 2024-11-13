function bufferToAscii(buf) {
	  let ascii = '';
	  for (let i = 0; i < buf.length; i++) {
		      ascii += String.fromCharCode(buf[i]);
		    }
	  return ascii;
}

const buf = Buffer.from('Hello, World!');
const asciiArt = bufferToAscii(buf);
console.log(asciiArt); // Hello, World! 

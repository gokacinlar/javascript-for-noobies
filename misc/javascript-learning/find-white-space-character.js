for(let i = 0; i < message.length; i++) {
  if (message[i] === " ") {
    console.log(`Whitespace character found here at: ${i}`);
  }
  console.log(`Index number of ${i} is ${message[i]}`);
}
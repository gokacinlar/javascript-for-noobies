function incrementLines(n) {
  let lines = "";
  for(let i = 1; i<=n; i++) { // Outer loop to print rows
    for(let j =1; j<=i; j++) { // Inner loop to print columns with "lines" string
      lines += "*";
      console.log(lines);
	  lines = "";
    }
  }
}

printLines(5);
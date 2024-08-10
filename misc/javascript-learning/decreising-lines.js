function decremenetLines(n) {
  for(let i = n; i >= 1; i--) {
    let lines = "";
    for (let j = 0; j < i; j++){
      lines += "*";
    }
    console.log(lines);
  }
}

printLines(6);

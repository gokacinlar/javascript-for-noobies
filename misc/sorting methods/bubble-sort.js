let n = [56, 4, 65, 87, 23, 1, 2, 3, 47, 76, 456, 85]; 

// Bubble Sort Algorithm
for (let i = 0; i < n.length - 1; i++) {
  for (let j = 0; j < n.length - 1 - i; j++) {
    // Compare adjacent elements
    if (n[j] > n[j + 1]) {
      // Swap if the current element is greater than the next
      let temp = n[j];
      n[j] = n[j + 1];
      n[j + 1] = temp;
    }
  }
}

console.log(n); // Output the sorted array
let n = [56, 4, 65, 87, 23, 1, 2, 3, 47, 76, 456, 85]; 

for (let i = 1; i < n.length; i++) {
  let current = n[i]; // The current element to be compared
  let j = i - 1; // Start comparing with the previous element

  // Move elements of n[0..i-1], that are greater than current, to one position ahead of their current position
  while (j >= 0 && n[j] > current) {
    n[j + 1] = n[j]; // Shift the larger element to the right
    j--; // Move to the next element on the left
  }
  n[j + 1] = current; // Place the current element in its correct position
}

console.log(n); // Output the sorted array
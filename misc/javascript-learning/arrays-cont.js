// Another set of array methods with examples.

// .map()
// It modifies and creates a new array from given array
// with your function

const nums = [1,2,3,4,5,6,7,8,9,10];
const numsDouble = nums.map(num => num *2);
console.log(JSON.stringify(numsDouble, null, 0));

const nums2 = [1,2,3,4,5,6,7,8,9,10];
const numsSubstract = nums2.map(num => num - 1);

console.log(JSON.stringify(numsSubstract, null, 0));


// .filter()
// creates a new array from given array provided that its contents
// pass criteria you set

const words = ["luxembourg", "germany", "turkey", "russia", "italy"];
const wordLengthLimited = words.filter((word) => {
  return words.length < 7;
});

console.log(wordLengthLimited);

// .find()
// returns the first element in an array that matches your criteria

const users = [
  {id: 1, name: "Ayşe"},
  {id: 2, name: "Ali"},
  {id: 3, name: "Gökberk"}
];

const firstUser = users.find((user) => {
  return user.id === 2;
});

console.log(firstUser);

// .some()
// it tests whether one element in an array passes a specified test
// (provided as a function)

const numbers2 = [1, -2, 3, 4, 5];
const hasNegative = numbers2.some(num => num < 0);
console.log(hasNegative); // expected output: true


// .every()
// it tests whether all elements passes a specified test

const numbers3 = [1, 2, 3, 4, 5];
const allPositive = numbers3.every(num => num > 0);
console.log(allPositive); // expected output: true


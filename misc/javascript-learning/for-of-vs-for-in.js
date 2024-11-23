const obj = {
  arr: "Hello world",
  ofc: "Hello hello"
}

const arr = [
  [1,2,3,4,5],
  ["hello world"]
]

for(j in  obj) {
  console.log(j + " = " +  obj[j])
}

for(j of arr) {
  console.log(j);
  const x = Object.assign({}, arr);
  console.log(x);
}
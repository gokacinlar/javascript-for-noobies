// ARRAYS [DİZİLER]

let names = [
    "arda",
    "kerem",
    "aslı",
    "mert"
]

let years = [
    1991,
    2001,
    2005,
    1998
]

console.log(names);
console.log(names.length); // eleman sayısını gösterir
console.log(years);

let mixed = [
    "Arda",
    "Yılmaz",
    1991,
    null,
    undefined,
    [
        "Math",
        "Programming",
        "Sports"
    ]
]

console.log(mixed);
console.log(mixed.length);

// bir dizi içindeki elemana ulaşma & çağırma
// get array item

// console.log(names[0]); // köşeli parantez içerisinde index değeri çağırma
// console.log(names[3]); // köşeli parantez içerisinde index değeri çağırma
// console.log(names[5] = "Added file!"); // string elemanı saydıktan sonra eklenir

// dizideki elemanı değiştimre
// set array item

// console.log(names[0] = "Derviş"); // yeni değer atama [Setting array item]

// adding items to a string
// push method

names.push("Eda"); // sona ekler
names.unshift("Eda") // başa ekler
console.log(names);

// remove item

years.pop(); // sondan bir öge siler
years.shift(); // baştan bir öge siler
console.log(years);

// dizi içerisindeki elemanın varlığını sorgulama, kaçıncı indiste olduğunu sorgulama
// indexOf method

let index1 = names.indexOf("arda");
console.log("Index 1 içerisindeki: " + index1);

// dizi elemanları ters sıralama
// reverse method

names.reverse();
console.log(names);

// dizi elemanları sıralama

names.sort();
console.log(names); // alfabetik olarak sıralar

// veri ekleme metodu
//concatenation

let veri = names.concat(years);
console.log(veri);

// splice method

names.splice(2, 0, "Hiho!");
// 1. parametre hangi indisten başlanacağını
// 2. parametre silinip silinmeyeceğini (1 silinir), (0 silinmez)
// 3. parametre de hangi stringin ekleneceğini belirtir.
console.log(veri);
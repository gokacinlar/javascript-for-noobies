// date object

let zaman = new Date();
let dogumGunu = new Date(2001, 09, 09);
let cikarim;

// var olan zamandan dogum gununu cikararak yasi bulma

cikarim = dogumGunu.getFullYear() - zaman.getFullYear();
console.log(cikarim);

// set methods (zamani degistirmek icin)

// zaman.setDate(25);
// zaman.setMonth(12);
// zaman.setFullYear(2011);

// asagidakilerin aynisi gecerlidir

// get methods (zamani almak icin var olan yontemler)

// console.log(zaman.getMonth()); // ay
// console.log(zaman.getDate()); // tarih
// console.log(zaman.getFullYear()); // yıl
// console.log(zaman.getDay()); // gun 
// console.log(zaman.getMinutes()); // dakikalar
// console.log(zaman.getSeconds());  // saniyeler
// console.log(zaman.getMilliseconds()); // milisaniyeler

console.log(zaman);
console.log(typeof zaman);
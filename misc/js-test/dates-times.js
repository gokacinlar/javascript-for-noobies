// DATE OBJECT

let zaman = new Date();
let dogumGunu = new Date(2001);
dogumGunu.setFullYear(2001);

// set methods
// zamanı deklare etmek için kullanılır

zaman.setDate(25); // gün girilir
zaman.setMonth(7);
zaman.setFullYear(2024);
zaman.setHours(22);
zaman.setMilliseconds(35);
zaman.setSeconds(56);

// get methods

// istenilen zaman objesi çağrılabilir

console.log(zaman.getMonth());
console.log(zaman.getDate());
console.log(zaman.getFullYear());
console.log(zaman.getDay());
console.log(zaman.getHours());
console.log(zaman.getMinutes());
console.log(zaman.getMilliseconds());

// yaş hesaplama

console.log(zaman.getFullYear() - dogumGunu.getFullYear());
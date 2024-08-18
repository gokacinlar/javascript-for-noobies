// strings

const firstName = "Derviş";
const LastName = "Öksüzoğlu";
const age = "22";

let hobbies = "formula sinema kitap yazılım";

let veri;

console.log(firstName);
console.log(typeof firstName);
console.log(LastName);
console.log(typeof LastName);
console.log(age);
console.log(typeof age);

// string concatenations (string birleştirme)

veri = firstName + " " + LastName;
veri = "Derviş";
veri += " Öksüzoğlu";

veri = 'Benim adım ' + firstName + ' ' + LastName + ' ' + 'yaşım ' + age + ' ' + 've İstanbul\'da yaşıyorum.';

veri = firstName.concat(' ', LastName); // concat metodu ile de yapılabilir

// upper and lower case
// stringin hepsini ya büyük ya da küçük harf yapar

veri = veri.toLowerCase();
veri = veri.toUpperCase();

// veri = veri.substring(3, 11); // string içerisindeki belirli bölümleri almanızı sağlar
// veri = veri.slice(1, 8); // substring ile aynı mantıkta çalışır, 1. parametreden itibaren almaya başlar, daha sonra bırakır

veri = veri.indexOf("e"); // string karakteri neredeyse onun sıralamadaki yerini gösterir

// veri = veri.replace('Derviş', 'Immanüel'); // 1. parametrede girilen değer, 2. parametre tarafından değiştirilir

// veri = veri.length(); stringin uzunluğunu gösterir

veri = hobbies.split(' ',); // dizinin elemanları olarak ayırır


console.log(veri);
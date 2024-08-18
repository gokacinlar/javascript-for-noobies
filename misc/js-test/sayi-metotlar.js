// NUMBERS

let veri;

/*

veri = Number("5");
veri = parseInt("5");
veri = parseFloat("5.5"); // ondalıklı sayı döndürür
veri = parseInt("5c"); // string karakterleri parselanmaz
veri = parseInt("c5"); // not a number NaN hatası alırız
veri = isNaN("c5"); // nan olup olmadığını kontrol eder ve geriye true döndürür, çünkü c is nan
veri = isNaN("5"); // false döndürür, çünkü bu bir number'dır

*/

var sayi = 56.346534;
var math;
veri = sayi.toPrecision(5); // bu parametrede girilen sayı kadar basamak gösterilir.
veri = sayi.toFixed(3); // virgülden sonraki basamak sayısı kadar veri döndürür

math = Math.PI; // pi sayısını döndürür
math = Math.round(3.5);
math = Math.round(3.2);
math = Math.ceil(3.2); // yukarı yuvarlar
math = Math.floor(8.3); // aşağı yuvarlar
math = Math.pow(3, 3); // kare alır
math = Math.sqrt(81); // karekök alır
math = Math.abs(-50); // negatiften pozitife dönüştürür
math = Math.min(54, 34, 23, 67, 13, 86); // minimumu döndürür
math = Math.max(54, 34, 23, 67, 13, 86); // maksimumu döndürür
math = Math.random(); // parametre girilmezse, 0-1 arası rastgele sayı üretir
math = Math.random() * 10; // çarpı ile girilen sayı arasında rastgele sayı üretir
math = Math.floor(Math.random() * 100); // ondalıklı sayı istenmiyorsa, int değer döndürmesi için kullanılır
math = Math.floor(Math.random() * 100 + 1); // 0 sayısı istenmezse, artı ile eklenir

console.log(veri);
console.log(typeof veri);


console.log(math);
console.log(typeof math);
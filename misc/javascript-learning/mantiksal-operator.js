// karsilastirma operatorleri

var a = 10;
var b = 7;
var c = 5;
var veri;

// veri = a===b; // uc esittir, karsilasitirlan verilerin string mi yoksa sayi mi oldugunu da gosterir

// console.log(veri); 

// mantiksal (%% - and)

// veri = (a>b) && (a>c);

// mantiksal (|| - veya)

// veri = (a>b) || (a>c); // degerlerden birisi dogru ise true olur

// mantiksal (! - degil/not)

veri = !(a<b); // ! dogru olani yanlis, yanlisi dogru yapar

console.log(veri);
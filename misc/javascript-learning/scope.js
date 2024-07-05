// Scope kavramı üçe ayrılır
// değişkenin konumunu belirler

/**
 * Üçe ayrılır:
 * 1. Global Scope
 * 2. Function Scope
 * 3. Block Scope
 */

var veri1 = 5; // global scope
let veri2 = 6;
const veri3 = 8;

// fonksiyon kapsamında oluşturulan veriler, ÖNCELİKLİDİR
// SONUÇ: veri1 = 7, veri2 = 8, veri3 = 12
function ornekFonk() {
    var veri1 = 7;
    let veri2 = 8;
    const veri3 = 12;
    console.log(veri1, veri2, veri3);
}

ornekFonk()

console.log(veri1, veri2, veri3); // global kapsamda loglanan veri degeri aynıdır

// BLOCK SCOPE

if (true) {
    var a = 10; // blok içinde kullanılan var komutu, global scope'da da geçerlidir
    let b = 20;
    const c = 30; // let ve const, blok dışında kullanılamazlar
}

// output: sadece a loglanır
console.log(a);


// block karmaşası

var admin_pass = "111";
let admin_pass2 = "333"

if (true) {
    var admin_pass = "222";
    let admin_pass2 = "444";
}
// 222 olarak değişir
console.log(admin_pass);

// 333 olarak let ile tanımlanan değişken değişmez

console.log(admin_pass2);
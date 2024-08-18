// DEĞİŞKEN TÜRLERİ

// 1) PRIMITIVE TYPES

// a) string

// let de aynı var gibi değişken oluşturmak için kullanılabilir

let firstName = "Derviş";
console.log(typeof firstName)

// b) number

let age = 21;
console.log(typeof age)

// c) boolean (mantıksal)

let kredi_kullanimi = true;
console.log(typeof kredi_kullanimi)

// d) undefined

let stuff;
console.log(typeof stuff)

// f) reference types: objects

// array

let liste = ["Aslı", "Kerem", "Mustafa"]
console.log(typeof liste)

// objects literals

let adres = {
    city: "İstanbul",
    country: "Turkey",
    continent: "Asia",
}
console.log(typeof adres)

// function (ileriki derslerde detaylı şekilde öğrenilecek)

let hesaplama = function () {
    return 0;
}
console.log(typeof hesaplama)
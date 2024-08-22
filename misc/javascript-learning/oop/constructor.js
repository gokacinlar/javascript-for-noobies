// İki farklı nesne örneği

let hyundai = {
  name: "i20",
  date: 2020,
  color: "red"
}

let mercedes = {
  name: "w120",
  date: 1980,
  color: "grey" 
}

console.log(mercedes);
console.log(typeof mercedes);

// Birden fazla nesneyi, "name", "date" gibi anahtar değerlere atanacak
// şekilde otomatik olarak oluşturmak için constructor() metodu kullanırız.

// Fonksiyon isminin büyük harfle başlamasına dikkat et!
function Araba(name, date, color) {
  this.name = name; // Değerleri tutmak için this anahtarını gir.
  this.date = date;
  this.color = color;

  console.log(this);
  // Obje içinde de fonksiyonlar oluşturabiliriz
  // Örn: Arabanın yaşını hesaplayan bir fonksiyon yazalım.
  this.arabaYasHesaplama = () => {
    return new Date().getFullYear() - this.date;
  }
}

let araba2 = new Araba("Tofaş", 2001, "Kırmızı"); // Yeni bir nesne oluşturdun!

console.log(araba2.arabaYasHesaplama());

// Bu fonksiyon bir değişken olarak da gerçekleştirilebilir:

let arabaXd = function (name, date, color) {
  this.name = name; // Değerleri tutmak için this anahtarını gir.
  this.date = date;
  this.color = color;

  console.log(this);
  // Obje içinde de fonksiyonlar oluşturabiliriz
  // Örn: Arabanın yaşını hesaplayan bir fonksiyon yazalım.
  this.arabaYasHesaplama = () => {
    return new Date().getFullYear() - this.date;
  }
}

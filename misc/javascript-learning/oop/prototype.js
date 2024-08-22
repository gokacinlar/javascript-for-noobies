// Miras alma yöntemini "prototype" kavramı ile gerçekleştiririz
/**
* INHERITANCE NEDİR?
* Herhangi bir nesnedeki, başka bir nesnede kullanmaktır (miras almaktır)
*/

// Prototype (Java'daki sınıf kavramı ile eşdeğerdir)

let Hayvan = function(name, birthDate, sex) {
  this.name = name;
  this.birthDate = birthDate;
  this.sex = sex;

  // Bu fonksiyonu prototype kısmına göndererek başka
  // nesnelerden de erişimini sağlayalım
  // Bunu "Nesne ismi".prototype."Fonksiyon ismi" ile yaparız
  // this.calculateAnimalAge = ()=>{
  //  return new Date().getFullYear - this.birthDate;
  // }
}

let kerata = new Hayvan("Kerata", 2021, "Male");
let sarikiz = new Hayvan("Sarı Kız", 2018, "Female");

console.log(kerata);
console.log(sarikiz);

// Prototype ile başka nesnelerden veri alımı yapabiliriz
// Bu fonksiyon hayvanın yaşını hesaplar
Hayvan.prototype.calculateAnimalAge = function() {
  return new Date().getFullYear() - this.birthDate;
}

// Nesnelerden isim çeken fonksiyon

Hayvan.prototype.getName = function() {
  return this.name;
}

// NOT: Arrow function ile "this" anahtar kelimesinin bağlamı kopar
// Arrow function ile prototype fonksiyonları yazamazsınız.
// Eğer Hayvan.prototype.getName fonksiyonunu bir arrow function olarak 
// tanımlarsan, this anahtar kelimesi, Hayvan nesnesinin örneğini 
// (instance) değil, fonksiyonun tanımlandığı bağlamı 
// (örneğin, global bağlam veya bir üst fonksiyonun bağlamı) referans alır

console.log(sarikiz.calculateAnimalAge());
console.log(sarikiz.getName());

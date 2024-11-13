// Immediate Functions
// Bir kez çalışmasının istenildiği fonksiyonlara verilen isimdir

function welcomeUser() {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  var today = new Date(); // Yeni bir Date Nesnesi oluşturuyoruz ki, tarihleri alabilelim
  var msg = "Hoşgeldiniz, bugün " + days[today.getDay()];
  return msg;
}

console.log(welcomeUser());

// Yukarıdaki fonksiyon birden kez çalıştırılabilir fakat biz bir kez çalıştırmak
// istediğimiz bir fonksiyon yazabilmek istiyoruz

(function() {
    var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  var today = new Date(); // Yeni bir Date Nesnesi oluşturuyoruz ki, tarihleri alabilelim
  var msg = "Hoşgeldiniz, bugün " + days[today.getDay()];
  console.log(msg);
  // return msg; RETURNE İHTİYACIMIZ YOK
}()); // Buradaki biten parantezi, fonksiyonu kapsayan bloğun içinde veya dışında kullanabiliriz

// veya parametre ekleyerek de yapabiliriz

(function(name) {
    var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  var today = new Date(); // Yeni bir Date Nesnesi oluşturuyoruz ki, tarihleri alabilelim
  var msg = "Hoşgeldiniz " + name + " bugün günlerden " + days[today.getDay()];
  console.log(msg);
})("Gökaçınlar");

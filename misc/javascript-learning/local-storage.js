// Local Storage
// Verilerin kalıcı bir şekilde tarayıcıda depolanmasıdır

// 1. Veri Eklemek
// setItem

localStorage.setItem("Lesson", "Math");

// 2. Veriye Ulaşmak/Okumak
// getITem

const value = localStorage.getItem("Lesson") // Alınan key verisi her daim string'dir

// Integer bir değere dönüştürmek için parseFloat kullanılabilir

// 3. Local Storage temizleme

localStorage.clear();

// Eğer LS'de herhangi bir veri yoksa, istenen bilgiye karşı NULL gelir.
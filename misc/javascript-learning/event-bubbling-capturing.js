// Event Bubbling
// Event olaylarında, parent & child hiyerarşisinde tıklanılan
// tek bir eventin, tüm elementleri tetiklemesidir.
// İçten dışa doğru iç-içe geçmiş elementlerden, içte olana
// tıklandığında, onu kapsayan parent elementlere de tıklanmış olur
// ve onlara bağlı tüm eventler de böylece tetiklenmiş olur.

const exampleElement = document.querySelector(".example");
const exampleEl2 = document.querySelector(".example-two");
const exampleEl3 = document.querySelector(".example-three");

exampleElement.addEventListener("click", function (e) { // add e parameter
    console.log("success!");
    e.stopPropagation(); // stop event bubbling
});

// stopPropagation metodu, event capturing için uygun
// değildir.

exampleEl2.addEventListener("click", function (e) {
    console.log("success!");
    e.stopPropagation(); // stop event bubbling
});

exampleEl3.addEventListener("click", function (e) {
    console.log("success!");
    e.stopPropagation(); // stop event bubbling
});

// Event Capturing
// Dıştan içe doğru bir çizelge izler. En dıştaki elemana tıklandığında
// dıştan içe doğru eventlerin tetiklenme durumudur.

exampleEl2.addEventListener("click", function (e) {
    console.log("success!");
    e.stopPropagation(); // stop event bubbling
}), true;

exampleEl3.addEventListener("click", function (e) {
    console.log("success!");
    e.stopPropagation(); // stop event bubbling
}), true;
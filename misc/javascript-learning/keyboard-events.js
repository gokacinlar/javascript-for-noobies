const exampleText = document.getElementById("txt");

// Focus event
// input gibi alanlarda tıklandığında tetiklenir

exampleText.addEventListener("focus", run);

// Blur event
// input gibi alanlarda tıklanılan alandan çıkıldığında çalışır

exampleText.addEventListener("blur", run);

// Paste event
// kopyala-yapıştır olayında, yapıştırmada çalışır

exampleText.addEventListener("paste", run);

// Copy event
// kopyala-yapıştır olayında, kopyalamada çalışır

exampleText.addEventListener("copy", run);

// Cut event

exampleText.addEventListener("cut", run);

// Select event
// input gibi ögelerde seçilen içeriğin seçildiği anda çalışır

exampleText.addEventListener("select", run);

// keydown event
// herhangi bir klaye tuşuna basıldığında çalışır

exampleText.addEventListener("keydown", run);

// keyup event
// herhangi bir klavye tuşuna basılıp, BIRAKILDIĞINDA ÇALIŞIR

exampleText.addEventListener("keyup", run);


// display event type

function run(e) {
    console.log(e.type);
}
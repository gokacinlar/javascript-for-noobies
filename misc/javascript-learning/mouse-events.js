// mouse events

const btn = document.querySelector("#btnNew");
const ul = document.querySelector("#taskList");

// click events

btn.addEventListener("click", run);

// double click event

btn.addEventListener("dblclick", run);

// mouse down event
// tıklanan ögeye tıklandığı süre boyunca işlem uygular

btn.addEventListener("mousedown", run);


// mouse up event
// tıklanan öge bırakıldığında çalışır

btn.addEventListener("mouseup", run);

// mouse enter event
// tıklanmak istenen ögenin üzerine gelindiğinde çalışır

btn.addEventListener("mouseenter", run);

// mouse leave event
// tıklanmak istenen ögenin üzerinden gidildiğinde çalışır

btn.addEventListener("mouseleave", run);

// mouse over event

btn.addEventListener("mouseover", run);

// mouse out event

btn.addEventListener("mouseout", run);

// mouse out ve over eventleri, bir elementin children'leri
// kapsamında da çalışır

// mouse move event

btn.addEventListener("mousemove", run);
// öge üzerinde imleç hareket ettiği ölçüde çalışır.
// koordinat cinsinden(piksel), (x,y) güncelleme yapar
// genellikle görseller ile çalışıldığında kullanılır

// function to show what event did run

function run(event) {
    console.log(`event type: ${event.type}`);
}
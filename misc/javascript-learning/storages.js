// Tarayıcı depolama alanlarını kullanmak

/**
 * Bu session storage ve local storage verilerininconsole'un, "Applications" sekmesinde
 * "Key" ve "Value" olarak saklandığını bulabilirsiniz.
 */

// Session Storage (Oturum Depolaması)
// Kullanıcının, site açık durduğu sürece depoladığı verilerdir.

const keyValue = document.querySelector(".key-div");
const value = document.querySelector(".value-div");

const addKey = document.getElementById("addKey");
const deleteKey = document.getElementById("delKey");
const clearKey = document.getElementById("clearKey");

addKey.addEventListener("click", addItem);
deleteKey.addEventListener("click", removeItem);
clearKey.addEventListener("click", clearAll);

function addItem(e) {
    sessionStorage.setItem(keyValue.value, value.value);
    // add session storage and set item with
    // parameter 1: key value
    // parameter 2: value itself
}


function removeItem(e) {
    // Bir verinin silinmesi için onun "Key", yani anahtar değerinin silinmesi
    // yeterlidir
    sessionStorage.removeItem(deleteKey.value);
}

function clearAll(e) {
    // Storage'deki tüm ögeleri siler
    sessionStorage.clear();
}
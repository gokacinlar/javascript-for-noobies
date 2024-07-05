const taskList = document.querySelector("#task");

taskList.remove(); // Ögeyi siler

taskList.childNodes[2].remove(); // İndeks numarasındaki ögeyi siler.
// node kapsamındaki her şeyi seçer (text vs) ve bu yüzden seçim indeksi çok uzar
// bunu engellemek için children.remove() kullanılabilir.

taskList.children[3].remove();
// Sadece elementler arası seçimi yapar, node'unu almaz

taskList.removeChild(3); // çok daha basit bir seçim, indis numarasıyla

// Attribute silme

taskList.children[1].removeAttribute("class");

// for loop ile silme

for (let i in taskList.children.length) {
    taskList.children[i].removeAttribute("class");
}

// for each ile silme

taskList.children.forEach(element => {
    element.removeAttribute("class");
});
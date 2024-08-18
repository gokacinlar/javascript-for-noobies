let btn = document.getElementById("btn");

btn.addEventListener("click", function (a) {
    let value;
    value = a.target; // event listener tetikleyen ögeyi getirir
    a.preventDefault();
    console.log(value);
});
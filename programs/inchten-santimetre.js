// inch'ten santimetreye donusturme
// tarayicida calistirmak icin:

// var inch, cm, oran = 2.54;

// i = Number(prompt("Inch Değerini Giriniz: "));

// cm = oran * i;

// alert(i + " Inch " + cm + " Santimetredir");

// node.js'de calistirmak icin:

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inch, cm, oran = 2.54;

rl.question("Inch Değerini Giriniz: ", (answer1) => {
    inch = parseFloat(answer1);
    cm = oran * inch;
    console.log(inch + " Inch " + cm + " Santimetredir");
    rl.close();
});
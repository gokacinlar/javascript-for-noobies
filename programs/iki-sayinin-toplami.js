// tarayicida calistirmak icin

// var sayi1, sayi2, toplam;

// sayi1 = (prompt("Birinci sayı:"));
// sayi2 = (prompt("İkinci sayı:"));

// toplam = sayi1 + sayi2;
// alert("Sayıların Toplami: " + toplam);

// node.js'de calistirmak icin

const readline = require("readline");
const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

let sayi1, sayi2, toplam;

rl.question("Birinci Sayıyı Giriniz: ", (answer1) => {
    sayi1 = parseFloat(answer1);

    rl.question("İkinci Sayıyı Giriniz: ", (answer2) => {
        sayi2 = parseFloat(answer2);

        toplam = sayi1 + sayi2;
        console.log("Sayıların Toplamı: " + toplam);

        rl.close();
    });
});
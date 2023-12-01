// tarayicida calistirmak icin

// var sayi1, sayi2, sayi3, ortalama;

// sayi1 = (prompt("Birinci Sayı:"));
// sayi2 = (prompt("İkinci Sayı:"));
// sayi3 = (prompt("Üçüncü Sayı:"));

// ortalama = ((sayi1 + sayi2 + sayi3) / 3);
// alert("Sayıların Ortalaması:" + ortalama);

// node.js'de calistirmak icin

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let sayi1, sayi2, sayi3, ortalama;

rl.question("Birinci Sayı: ", (answer1) => {
    sayi1 = parseFloat(answer1);

    rl.question("İkinci Sayı: ", (answer2) => {
        sayi2 = parseFloat(answer2);

        rl.question("Üçüncü Sayı: ", (answer3) => {
            sayi3 = parseFloat(answer3);

            if (!isNaN(sayi1) && !isNaN(sayi2) && !isNaN(sayi3)) {
                ortalama = (sayi1 + sayi2 + sayi3) / 3;
                console.log("Sayıların Ortalaması: " + ortalama);
            } else {
                console.log("Geçersiz giriş! Lütfen sayıları doğru bir şekilde girin.");
            }

            rl.close();
        });
    });
});
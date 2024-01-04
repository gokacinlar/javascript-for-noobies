const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getCiftSayilar() { // kullanıcının hatalı giriş yapması sonucu programa eklenen fonksiyon ile kullanıcı tekrardan başa döndürülür.
    rl.question('Bir sayı giriniz: ', (inputNumber) => {
        const k = parseInt(inputNumber);

        if (k > 0) {
            for (let i = 1; i <= k; i++) {
                if (i % 2 === 0) {
                    console.log(i);
                }
            }
            rl.close();
        } else {
            console.log("Hatalı giriş. Pozitif bir sayı giriniz.");
            getCiftSayilar(); // Tekrar giriş iste
        }
    });
}

getCiftSayilar();
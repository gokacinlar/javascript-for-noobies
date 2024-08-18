const kisiler=[
    {
        isim:'Yasin',
        yas:30
    },
    {
        isim:'Ayşe',
        yas:30
    },
    {
        isim:'Ali',
        yas:30
    }
]
console.table(kisiler)


console.log("111","222","3333")

console.count("Elma")
console.count("Armut")
console.count("Elma")

console.debug("Burada bir problem var")


console.assert(4>5,"4 büyük değildir 5")


console.group("Kullanicilar")
console.log("Kullanıcı 1")
console.log("Kullanıcı 2")
console.groupEnd()

console.group("Meyveler")
console.log("Elma")
console.log("Armut")
console.groupEnd()


console.time("mytimer")
for (let index = 0; index < 10000; index++) {
    
}
console.timeEnd("mytimer")



console.profile("profile")
for (let index = 0; index < 10000; index++) {
    
}
console.profileEnd()


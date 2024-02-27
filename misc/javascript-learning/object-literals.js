// object literals

// primitive objects ile kullanıcı bilgisi tutma

// let fName = "Test";
// let lName = "Person";

// birden fazla kullanıcıda hiç de pratik olmayan bir sistemdir

// string kullanımıyla:

let kullanici = [
    "Test",
    "Kullanıcısı",
    23,
    "Math"
]

let kullanici2 = [
    "Test1",
    "Kullanici2",
    45
]

// kullanıcı bilgileri hangi indiste olduğunu bulup çağırmak ve kullanmak
// için yine son derece zahmetli ve pratik olmayan bir yol

// OBJECT LITERALS'E GEÇİŞ

let veri;
let user = {
    userName: "TestName",
    age: 25,
    profession: "Math",
    passwd: "blabla1",
    interests: ["math", "science", "software programming"],
    address: {
        city: "Bursa",
        country: "Turkey",
        phone: "+90",
    }
}

veri = user.address; // object literalden veri çağırma 
veri = user.userName;
veri = user.interests.length; // kaç tane hobisi olduğunu çağırma

console.log(veri);
console.log(typeof user);
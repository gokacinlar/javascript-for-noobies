// Object Create

let personOne = {
  calculateAge: function() {
    return new Date().getFullYear() - this.yearOfBirth;
  }
}

// personOne objesini kullanarak yeni bir obje oluştur

let ali = Object.create(personOne);
ali.yearOfBirth = 2001;
ali.job = "Student";

console.log(ali);
console.log(ali.calculateAge()); // Yaş hesaplanır

let aylin = Object.create(personOne, {
  name: {value: "Aylin"},
  job: {value: "Teacher"},
  yearOfBirth: {value: 1999}
});

console.log(aylin);
console.log(aylin.calculateAge());

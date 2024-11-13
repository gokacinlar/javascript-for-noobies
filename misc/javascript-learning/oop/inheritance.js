// Prototype tabanlı miras alma

let Person = function(name, job, yearOfBirth) {
  this.name = name;
  this.job = job;
  this.yearOfBirth = yearOfBirth;
}

Person.prototype.calculateAge = function() {
  return new Date().getFullYear() - this.yearOfBirth;
}

// Miras almazsak, yukarıdaki gibi this ile yeni bir nesne oluştururduk
let Teacher = function(name, job, subject, yearOfBirth) {
  // Miras alma (Inheritance), call() metoduyla hallederiz
  Person.call(this, name, job, yearOfBirth);
  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);

let aylin = new Teacher("Aylin", "Öğretmen", 1988, "English");

console.log(Teacher.prototype.constructor);
console.log(aylin);
console.log(aylin.calculateAge()); // Hata alırız, çünkü miras olarak almadık

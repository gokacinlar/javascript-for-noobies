// Constructors
// They are special methods for defining properties of methods of Objects
/*
* The constructor method is a special method 
* for creating and initializing an object created with a class.
*/

function Computer(name, ram, cpu, graphics) {
	// Watch out for capitalization in function name = "C"omputer
	
	// User "this" keyword to assign these
	this.name = name,
	this.ram = ram,
	this.cpu = cpu,
	this.graphics = graphics,
	// We can assign a function too!
	this.use = function() {
		console.log(`You use ${this.name}`);
	}
}

const pc1 = new Computer("Dell", "16GB", "Intel", "Nvidia");

console.log(pc1.name)
console.log(pc1.ram)
console.log(pc1.cpu)
console.log(pc1.graphics)

// Call the function
pc1.use();
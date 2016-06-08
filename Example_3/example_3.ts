class Person {
	private fullName: string;
	constructor(public fName, public lName){
		this.fullName = `${fName} ${lName}`;
	}
	sayHi(){
		return `Hi ${this.fullName}`;
	}
}

/*interface User {
	fName: string;
	lName: string;
}*/

function sayHello(u){
	return`Hello ${u.fName} ${u.lName}`;
}

var person = new Person('Saurabh', 'Shankariya');
// person.fullName;   ----  Property 'fullName' is private and only accessible within class 'Person'.
document.getElementById('text1').innerHTML = person.sayHi();
document.getElementById('text2').innerHTML = sayHello(person);



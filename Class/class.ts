/*

*	Class

*/

//Creating own class in javascript
class Person {
// Protected members can be accessible by derived class only
	protected _fullName: string = 'unknown';
	constructor(public fName, public lName, public height: number, public weight: number){
		this._fullName = `${fName} ${lName}`;
	}
	sayHi(){
		return `Hi ${this._fullName}`;
	}
	// Accessor for fullName. Setter/Getter for full Name
	get fullName(): string{
		return this._fullName;
	}
	getPersonDetails(){
		return `Person full name is ${this._fullName} with height ${this.height} and weight ${this.weight}`;
	}
}


/*

*	Interface

*/
//Creating Interface for adding retreiving hobbies
interface Hobbies {
	hobbies: Array<string>; // properties in interface by default is in public. It cannot be private/protected.
	setHobbies(list: string[]): void ; // returns nothing
	getHobbies(): string[]; // returns array of string
}


/*

*	Inheritance

*/
// Extending Person class and Implementing Hobbies interface
class Boy extends Person implements Hobbies{
	//Private variables can be access inside class only
	private _skinColor: string = 'white';
	public hobbies: string[]; // properties implementing from interface must be in public only. Private/Protected will throw compile error.
	constructor(public fName, public lName, public height: number, public weight: number){
		//Calling parent class constructor
		super(fName, lName, height, weight);
	}
	//Overriding getPersonDetails method.
	getPersonDetails(){
		return `Boy full name is ${this.fullName} with height ${this.height}, weight ${this.weight} and color as ${this._skinColor}`;	
	}
	//Accessor for setting and retreiving skinColor
	set skinColor(c: string){
		this._skinColor = c;
	}
	get skinColor(){
		return this._skinColor;
	}
	//Implementing interface Hobbies methods
	setHobbies(list: string[]){
		if (list.length > 0) {
			this.hobbies = list;
		}
	}
	getHobbies(){
		return this.hobbies;
	}
}


let p = new Person('saurabh', 'shankariya', 5.7, 64);
// p._fullName; --- Error : since _fullName is a protected accessfier
document.getElementById('text1').innerHTML = `Person Object : ${p.getPersonDetails()}`;

let b = new Boy('saurabh', 'shankariya', 5.7, 64);
b.skinColor = 'Fair'; // it will call setter property of skinColor 
document.getElementById('text2').innerHTML = `Boy Object : ${b.getPersonDetails()}`;
document.getElementById('text3').innerHTML = `Is Boy's instance is an instance of Person : ${b instanceof Person}`;
document.getElementById('text4').innerHTML = `Is Boy's instance is an instance of Object : ${b instanceof Object}`;


let hobbyList = ['Movie Making', 'Sound Editing', 'Coding'];
b.setHobbies(hobbyList);
document.getElementById('text5').innerHTML = `Boy's hobbies : ${b.getHobbies()}`;

/*

*	Static Properties

*/


//Class containing static methods and property.
class Experience {
	static _currentYear: number = new Date().getFullYear();
	static calculateExp(startedYear: number): number {
		let exp = this._currentYear - startedYear;
		return exp;
	}
}
	
//Static Properties and Methods of class can be accessible without creating instance of class
Experience._currentYear = 2015;
document.getElementById('text6').innerHTML = `Total number of working experience is ${Experience.calculateExp(2012)} years.`;


/*

*	Abstract Class and Method

*/


//Abstract clas ses
abstract class Animal{
	// Protected members can be accessible by derived class only
	protected _numberOfLegs: number= 0;
	protected _gender: string= 'Male';
	protected _name: string = 'unknown';
	protected _sound: string = '';
	constructor(name: string, sound:string){
		this._name = name;
		this._sound = sound;
	}
	abstract getAnimalDetails(): string;

	setAnimalDetails(numberOfLegs: number, gender: string): void{
		this._numberOfLegs = numberOfLegs;
		this._gender = gender;

	}
}

// Class Dog extending abstract class Animal and implementing abstrac methods.
class Dog extends Animal{
	constructor(name: string,sound:string){
		//callingparent constructor. While extending abstract class it must be called.
		super(name, sound);
	}
	setDogDetails(legs: number, gender: string){
		//calling parent method using super keyword.
		super.setAnimalDetails(legs, gender);
	}
	//method accessing protected members of parent classs
	getAnimalDetails(): string{
		return `Dog name is ${this._name} sounds like ${this._sound} with number of legs as ${this._numberOfLegs} and gender as ${this._gender}`;
	}
}

// let ani = new Animal('Tiger', 'Khaauuuuuuuooooo'); --- Cannot create instance of abstract class
let animal: Animal; // Can create a reference of Abstract class;
let d = new Dog('Bruzoo', 'bhoooo-bhooo');
d.setDogDetails(4, 'Female');
document.getElementById('text7').innerHTML = `Animal details are : ${d.getAnimalDetails()}`;

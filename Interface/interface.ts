//Interfaces are also capable of describing an object with properties.
interface Person {
	name: string
}

function getName(p: Person){
	return `Hello ${p.name}`;
};
let pObj ={age: 25, name:  'saurabh'}
getName(pObj);

/*
*  Optional Properties in interface
*/
interface Animal{
	name: string;
	// numberOfLegs?: number = 4; ---- Error : Interface property cannot have an initializer
	numberOfLegs?: number;
	gender?: string;
}

function getAnimalDetails(a: Animal){
	return `Hello ${a.name} ${a.numberOfLegs} ${a.gender}`;
};
// let aObj = { gender: 'M', numbeofLegs: 4};  ---   Property 'name' is missing in type '{ gender: string; numbeofLegs: number; }'.
let aObj = { gender: 'M', name: 'Tiger'};
getAnimalDetails(aObj);

//Interfaces are also capable of describing function types.
interface checkString {
	//THis is input parameter		// this is return type of function checkString
	(source: string): 				boolean;
}

//Implementing checkString interface
let isValidString : checkString;
isValidString = function(str : string = '') : boolean{
	if(str){
		return true;
	}else{
		return false;
	}
}
isValidString('saurabh'); // true
isValidString(''); // false


//Implementing interface in the class
interface Car {
	sound: string;
	setSound(s: string) : void; // it will return any value
	getSound() : string;
	getCarDetails() : string;
}

// Class implementing interface using implements keyword
class Maruti implements Car{
	sound: string = "";
	constructor(public name: string, public numberOfTyres: number, public hasBreak: boolean) { };

	setSound(s: string){
		this.sound = s;
	};
	getSound(){
		return this.sound;
	}
	getCarDetails(){
		return `Maruti ${this.name} has ${this.numberOfTyres} number of tyres and sounds like ${this.sound}`;
	}
}

var m = new Maruti('Swift', 4, true);
m.setSound('Burrrrrrrrrrrrr');
m.getCarDetails();


//interface can extend interface using Extends keyword
interface FourWheeler extends Car{
	isImported: boolean;
	isImportedCar(): boolean;
}

//BMW class implementing FourWheeler interface which in turn extedning Car interface
class BMW implements FourWheeler{
	isImported: boolean = true; //  variable defined in FourWheeler interface
	sound: string = "";   //  variable defined in Car interface
	constructor(public name: string, public numberOfTyres: number, public hasBreak: boolean, public country: string) { };
	//Method defined in FourWheeler interface
	isImportedCar(){
		if(this.country === 'India'){
			this.isImported = false;
			return this.isImported;
		}
	}
	// Methods defined in CAR interface.
	setSound(s: string){
		this.sound = s;
	};
	getSound(){
		return this.sound;
	}
	getCarDetails(){
		return `BMW ${this.name} belongs to ${this.country}, has ${this.numberOfTyres} number of tyres and sounds like ${this.sound}`;
	}
}
// This will import all components of interface is Interface object
import * as Interface from "./interface"; 
// This will import PersonClass as Person
import {PersonClass as Person} from "./PersonClass"; 

//If you’re only exporting a single class or function, use export default
 export default class StudentClass extends Person implements Interface.College {
	collegeName: string = "";
	constructor(fName:string, lName:string){
		super(fName, lName); //calling parent class constructor
	}
    //Implementing all methods of College interface
	setCollegeName(n:string){
		this.collegeName = n;
	}
	getCollegeName(){
		return this.collegeName;
	}
    //Implementing abstract method
    getPersonDetails(){
        return `${this._fullName} from ${this.collegeName} with age as ${this.age}`;
    }
};

//export = StudentClass;
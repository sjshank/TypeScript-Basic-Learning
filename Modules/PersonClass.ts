//Importing only required component from interface.ts file
import { Age } from "./interface";

//Exporting Abstract class which implementing Age interface` 
export abstract class PersonClass implements Age{
	protected _fullName: string = "";
	age : number = 0;
	constructor(fName:string, lName:string){
		this._fullName = `My Name is ${fName} ${lName}`;
	}
	setAge(a:number){
		this.age = a;
	}
	getAge(){
		return this.age;
	}
    //Abstract methods gets implemented by all subClass
	abstract getPersonDetails():string;
};

//We can Re-Export Age interface from here as well after importing at top
//export { age as Age } from "./interface";
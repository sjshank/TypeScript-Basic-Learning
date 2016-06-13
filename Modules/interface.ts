//Export age interface
export interface Age{
	age : number;
	setAge(n: number):void;
	getAge():number;
}

interface CollegeInterface{
	collegeName:string;
	setCollegeName(c: string):void;
	getCollegeName():string;
}
//Another way to export. Exporting CollegeInterface
export { CollegeInterface as College }
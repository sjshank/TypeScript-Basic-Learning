//Boolean Type
let flag: boolean = true;

//Number Type
let decimalValue: number = 12;
let floatValue: number = 10.50;
let hexValue: number = 0xfd01;

//String Type
let strValue: string = "This is string";
strValue = "String just changed";

//Array Type
let list: number[] = [1, 2, 3];
let anotherList: Array<number> = [1, 2, 3];
let strList: Array<string> = ['1', '2'];

//Tuple type allow you to express an array where the type of a fixed number of elements is known, but need not be the same. 
let a: [string, number, boolean];
a = ['saurabh', 25, true];
// a = ['saurabh', 25, 'true'];  ----    Type 'string' is not assignable to type 'boolean'.
// a[1] = "This is string type"; -----  Type 'string' is not assignable to type 'number'
console.log(a);
console.log(a[2]);

// Any Type
let variable: any = 100;
variable = null;
variable = "String type";
variable = false;
console.log(variable);

let dummyObject: any = 200;
// Below lines throws error at runtime.
//dummyObject.isNumber();
//dummyObject.isBoolean(); 

/*************************************/
let obj: Object = {
	//obj.isEmptyObject(); ---- throws error at compile time. Property 'isEmptyObject' does not exist on type 'Object'
	isEmptyObject : function() {
		return this.propertyIsEnumerable();
	}
}


function checkInputVar(inputVar: string){
	if(inputVar){
		var b = true;
	}
	return b;
}


/*  
*   The variable b was declared within the if block, and yet we were able to access it from outside that block.
*   That’s because var declarations are accessible anywhere within their containing function, module, namespace, or global scope
*/
checkInputVar('abc'); // true
checkInputVar(''); // undefined


for (var i = 0; i <= 10; i++) {
	setTimeout(function() { console.log(i); }, 100);
}
		  // 10 10 10 10 10 10 10 10......output
	

/*
*
*	When a variable is declared using let, it uses what some call lexical-scoping or block-scoping
*
*/
for (let i = 0; i <= 10 ; i++) {
    setTimeout(function() {console.log(i); }, 100);
};  // 1 2 3 4 5 6 7 8 9 10....actual output

function getName(fName: string, lName: string){
	let sep = "-";
	if(fName && lName){
		let fullName = `${fName} ${sep} ${lName}`;  // sep scope is limited to whole getName function. Hence, can be access inside if block.
		return fullName;
	}
	let x = 10;
	//let x = 20; ---- error: can't re-declare 'x' in the same scope


	// return fullName; --- error, fullName can't be accessible outside of if block scope.
}
function func1(a){
	//let a = 10; ---- error: cannot declare same varaible as input paramtere
	function func2(){
		let b = 10;
		//var b = 20;  error: can't have both declarations of 'b'
	}
}

const numberOfGoals = 8;
//numberOfGoals = 4; ---- error once set cannot be change.
const user = {
	name : 'saurabh',
	age: 25,
}

/*
*	Error 
*
const user = {
	lastName : 'sshankariya',
	city : 'Nagpur'
}
*/
user.name = 'sshankariya'; // acceptable
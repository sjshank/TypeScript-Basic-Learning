function sayHello(user : string){
	return `Hello ${user}`;
}

var user = "Saurabh";

// var user = 10; ----  Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(sayHello(user));


interface User {
	fName: string;
	lName: string;
}



function sayHi (u: User) {
	return`Hi ${u.fName} ${u.lName}`;
}

/*
*  Argument of type '{ firstName: string; lastName: string; }' is not assignable to parameter of type 'User'.
*  Property 'fName' is missing in type '{ firstName: string; lastName: string; }'
*

var userObj = {
	firstName: 'Saurabh',
	lastName: 'Shankariya'
}

console.log(sayHi(userObj)); 
*/


var userObj = {
	fName: 'Saurabh',
	lName: 'Shankariya'
}

console.log(sayHi(userObj)); 
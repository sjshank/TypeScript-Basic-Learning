//Boolean Type
var flag = true;
//Number Type
var decimalValue = 12;
var floatValue = 10.50;
var hexValue = 0xfd01;
//String Type
var strValue = "This is string";
strValue = "String just changed";
//Array Type
var list = [1, 2, 3];
var anotherList = [1, 2, 3];
var strList = ['1', '2'];
//Tuple type allow you to express an array where the type of a fixed number of elements is known, but need not be the same. 
var a;
a = ['saurabh', 25, true];
// a = ['saurabh', 25, 'true'];  ----    Type 'string' is not assignable to type 'boolean'.
// a[1] = "This is string type"; -----  Type 'string' is not assignable to type 'number'
console.log(a);
console.log(a[2]);
// Any Type
var variable = 100;
variable = null;
variable = "String type";
variable = false;
console.log(variable);
var dummyObject = 200;
// Below lines throws error at runtime.
//dummyObject.isNumber();
//dummyObject.isBoolean(); 
/*************************************/
var obj = {
    //obj.isEmptyObject(); ---- throws error at compile time. Property 'isEmptyObject' does not exist on type 'Object'
    isEmptyObject: function () {
        return this.propertyIsEnumerable();
    }
};
function checkInputVar(inputVar) {
    if (inputVar) {
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
    setTimeout(function () { console.log(i); }, 100);
}
// 10 10 10 10 10 10 10 10......output
/*
*
*	When a variable is declared using let, it uses what some call lexical-scoping or block-scoping
*
*/
var _loop_1 = function(i_1) {
    setTimeout(function () { console.log(i_1); }, 100);
};
for (var i_1 = 0; i_1 <= 10; i_1++) {
    _loop_1(i_1);
}
; // 1 2 3 4 5 6 7 8 9 10....actual output
function getName(fName, lName) {
    var sep = "-";
    if (fName && lName) {
        var fullName = fName + " " + sep + " " + lName; // sep scope is limited to whole getName function. Hence, can be access inside if block.
        return fullName;
    }
    var x = 10;
    //let x = 20; ---- error: can't re-declare 'x' in the same scope
    // return fullName; --- error, fullName can't be accessible outside of if block scope.
}
function func1(a) {
    //let a = 10; ---- error: cannot declare same varaible as input paramtere
    function func2() {
        var b = 10;
        //var b = 20;  error: can't have both declarations of 'b'
    }
}
var numberOfGoals = 8;
//numberOfGoals = 4; ---- error once set cannot be change.
var user = {
    name: 'saurabh',
    age: 25
};
/*
*	Error
*
const user = {
    lastName : 'sshankariya',
    city : 'Nagpur'
}
*/
user.name = 'sshankariya'; // acceptable

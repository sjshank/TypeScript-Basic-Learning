var Person = (function () {
    function Person(fName, lName) {
        this.fName = fName;
        this.lName = lName;
        this.fullName = fName + " " + lName;
    }
    Person.prototype.sayHi = function () {
        return "Hi " + this.fullName;
    };
    return Person;
}());
/*interface User {
    fName: string;
    lName: string;
}*/
function sayHello(u) {
    return "Hello " + u.fName + " " + u.lName;
}
var person = new Person('Saurabh', 'Shankariya');
// person.fullName;   ----  Property 'fullName' is private and only accessible within class 'Person'.
document.getElementById('text1').innerHTML = person.sayHi();
document.getElementById('text2').innerHTML = sayHello(person);

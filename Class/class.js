/*

*	Class

*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Creating own class in javascript
var Person = (function () {
    function Person(fName, lName, height, weight) {
        this.fName = fName;
        this.lName = lName;
        this.height = height;
        this.weight = weight;
        // Protected members can be accessible by derived class only
        this._fullName = 'unknown';
        this._fullName = fName + " " + lName;
    }
    Person.prototype.sayHi = function () {
        return "Hi " + this._fullName;
    };
    Object.defineProperty(Person.prototype, "fullName", {
        // Accessor for fullName. Setter/Getter for full Name
        get: function () {
            return this._fullName;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.getPersonDetails = function () {
        return "Person full name is " + this._fullName + " with height " + this.height + " and weight " + this.weight;
    };
    return Person;
}());
/*

*	Inheritance

*/
// Extending Person class and Implementing Hobbies interface
var Boy = (function (_super) {
    __extends(Boy, _super);
    function Boy(fName, lName, height, weight) {
        //Calling parent class constructor
        _super.call(this, fName, lName, height, weight);
        this.fName = fName;
        this.lName = lName;
        this.height = height;
        this.weight = weight;
        //Private variables can be access inside class only
        this._skinColor = 'white';
    }
    //Overriding getPersonDetails method.
    Boy.prototype.getPersonDetails = function () {
        return "Boy full name is " + this.fullName + " with height " + this.height + ", weight " + this.weight + " and color as " + this._skinColor;
    };
    Object.defineProperty(Boy.prototype, "skinColor", {
        get: function () {
            return this._skinColor;
        },
        //Accessor for setting and retreiving skinColor
        set: function (c) {
            this._skinColor = c;
        },
        enumerable: true,
        configurable: true
    });
    //Implementing interface Hobbies methods
    Boy.prototype.setHobbies = function (list) {
        if (list.length > 0) {
            this.hobbies = list;
        }
    };
    Boy.prototype.getHobbies = function () {
        return this.hobbies;
    };
    return Boy;
}(Person));
var p = new Person('saurabh', 'shankariya', 5.7, 64);
// p._fullName; --- Error : since _fullName is a protected accessfier
document.getElementById('text1').innerHTML = "Person Object : " + p.getPersonDetails();
var b = new Boy('saurabh', 'shankariya', 5.7, 64);
b.skinColor = 'Fair'; // it will call setter property of skinColor 
document.getElementById('text2').innerHTML = "Boy Object : " + b.getPersonDetails();
document.getElementById('text3').innerHTML = "Is Boy's instance is an instance of Person : " + (b instanceof Person);
document.getElementById('text4').innerHTML = "Is Boy's instance is an instance of Object : " + (b instanceof Object);
var hobbyList = ['Movie Making', 'Sound Editing', 'Coding'];
b.setHobbies(hobbyList);
document.getElementById('text5').innerHTML = "Boy's hobbies : " + b.getHobbies();
/*

*	Static Properties

*/
//Class containing static methods and property.
var Experience = (function () {
    function Experience() {
    }
    Experience.calculateExp = function (startedYear) {
        var exp = this._currentYear - startedYear;
        return exp;
    };
    Experience._currentYear = new Date().getFullYear();
    return Experience;
}());
//Static Properties and Methods of class can be accessible without creating instance of class
Experience._currentYear = 2015;
document.getElementById('text6').innerHTML = "Total number of working experience is " + Experience.calculateExp(2012) + " years.";
/*

*	Abstract Class and Method

*/
//Abstract clas ses
var Animal = (function () {
    function Animal(name, sound) {
        // Protected members can be accessible by derived class only
        this._numberOfLegs = 0;
        this._gender = 'Male';
        this._name = 'unknown';
        this._sound = '';
        this._name = name;
        this._sound = sound;
    }
    Animal.prototype.setAnimalDetails = function (numberOfLegs, gender) {
        this._numberOfLegs = numberOfLegs;
        this._gender = gender;
    };
    return Animal;
}());
// Class Dog extending abstract class Animal and implementing abstrac methods.
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name, sound) {
        //callingparent constructor. While extending abstract class it must be called.
        _super.call(this, name, sound);
    }
    Dog.prototype.setDogDetails = function (legs, gender) {
        //calling parent method using super keyword.
        _super.prototype.setAnimalDetails.call(this, legs, gender);
    };
    //method accessing protected members of parent classs
    Dog.prototype.getAnimalDetails = function () {
        return "Dog name is " + this._name + " sounds like " + this._sound + " with number of legs as " + this._numberOfLegs + " and gender as " + this._gender;
    };
    return Dog;
}(Animal));
// let ani = new Animal('Tiger', 'Khaauuuuuuuooooo'); --- Cannot create instance of abstract class
var animal; // Can create a reference of Abstract class;
var d = new Dog('Bruzoo', 'bhoooo-bhooo');
d.setDogDetails(4, 'Female');
document.getElementById('text7').innerHTML = "Animal details are : " + d.getAnimalDetails();
//# sourceMappingURL=class.js.map
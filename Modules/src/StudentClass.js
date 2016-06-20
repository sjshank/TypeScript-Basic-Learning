"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This will import PersonClass as Person
var PersonClass_1 = require("./PersonClass");
//If you’re only exporting a single class or function, use export default
var StudentClass = (function (_super) {
    __extends(StudentClass, _super);
    function StudentClass(fName, lName) {
        _super.call(this, fName, lName); //calling parent class constructor
        this.collegeName = "";
    }
    //Implementing all methods of College interface
    StudentClass.prototype.setCollegeName = function (n) {
        this.collegeName = n;
    };
    StudentClass.prototype.getCollegeName = function () {
        return this.collegeName;
    };
    //Implementing abstract method
    StudentClass.prototype.getPersonDetails = function () {
        return this._fullName + " from " + this.collegeName + " with age as " + this.age;
    };
    return StudentClass;
}(PersonClass_1.PersonClass));
exports.__esModule = true;
exports["default"] = StudentClass;
;
//export = StudentClass; 

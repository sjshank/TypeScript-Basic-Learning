"use strict";
var PersonClass = (function () {
    function PersonClass(fName, lName) {
        this._fullName = "";
        this.age = 0;
        this._fullName = "My Name is " + fName + " " + lName;
    }
    PersonClass.prototype.setAge = function (a) {
        this.age = a;
    };
    PersonClass.prototype.getAge = function () {
        return this.age;
    };
    return PersonClass;
}());
exports.PersonClass = PersonClass;
;
//We can Re-Export Age interface from here as well after importing at top
//export { age as Age } from "./interface"; 
//# sourceMappingURL=PersonClass.js.map
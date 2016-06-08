function getName(p) {
    return "Hello " + p.name;
}
;
var pObj = { age: 25, name: 'saurabh' };
getName(pObj);
function getAnimalDetails(a) {
    return "Hello " + a.name + " " + a.numberOfLegs + " " + a.gender;
}
;
// let aObj = { gender: 'M', numbeofLegs: 4};  ---   Property 'name' is missing in type '{ gender: string; numbeofLegs: number; }'.
var aObj = { gender: 'M', name: 'Tiger' };
getAnimalDetails(aObj);
//Implementing checkString interface
var isValidString;
isValidString = function (str) {
    if (str === void 0) { str = ''; }
    if (str) {
        return true;
    }
    else {
        return false;
    }
};
isValidString('saurabh'); // true
isValidString(''); // false
// Class implementing interface using implements keyword
var Maruti = (function () {
    function Maruti(name, numberOfTyres, hasBreak) {
        this.name = name;
        this.numberOfTyres = numberOfTyres;
        this.hasBreak = hasBreak;
        this.sound = "";
    }
    ;
    Maruti.prototype.setSound = function (s) {
        this.sound = s;
    };
    ;
    Maruti.prototype.getSound = function () {
        return this.sound;
    };
    Maruti.prototype.getCarDetails = function () {
        return "Maruti " + this.name + " has " + this.numberOfTyres + " number of tyres and sounds like " + this.sound;
    };
    return Maruti;
}());
var m = new Maruti('Swift', 4, true);
m.setSound('Burrrrrrrrrrrrr');
m.getCarDetails();
//BMW class implementing FourWheeler interface which in turn extedning Car interface
var BMW = (function () {
    function BMW(name, numberOfTyres, hasBreak, country) {
        this.name = name;
        this.numberOfTyres = numberOfTyres;
        this.hasBreak = hasBreak;
        this.country = country;
        this.isImported = true;
        this.sound = "";
    }
    ;
    BMW.prototype.isImportedCar = function () {
        if (this.country === 'India') {
            this.isImported = false;
            return this.isImported;
        }
    };
    BMW.prototype.setSound = function (s) {
        this.sound = s;
    };
    ;
    BMW.prototype.getSound = function () {
        return this.sound;
    };
    BMW.prototype.getCarDetails = function () {
        return "BMW " + this.name + " belongs to " + this.country + ", has " + this.numberOfTyres + " number of tyres and sounds like " + this.sound;
    };
    return BMW;
}());

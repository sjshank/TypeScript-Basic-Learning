function doAdd(a, b) {
    return a + b;
}
var s = doAdd(2, 3);
//Function assigned to myAdd  // Return type number
var myAdd = 
//Contains 2 inputs as a number types
//Contains 2 inputs as a number types
function (x, y) { return x + y; };
/*
*	Optional and Default Parameters
*/
//lName is Optional parameter
function getFullName(fName, lName) {
    return fName + " " + lName;
}
getFullName('saurabh'); // since lName is optional so it's not throwing 
function retreiveFullName(fName, lName) {
    if (fName === void 0) { fName = 'Guest'; }
    if (lName === void 0) { lName = 'User'; }
    return fName + " " + lName;
}
retreiveFullName(); // no parameters hence outout is Guest User
function fullName(fName, lName) {
    if (fName === void 0) { fName = 'Guest'; }
    return fName + " " + lName;
}
//fullName('shankariya'); Error : do not match with function signature
fullName(null, 'shankariya'); // need to pass undefined/null first paramter if omitting it.
/*
*	Rest Parameters
*/
function func1(fName) {
    var name = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        name[_i - 1] = arguments[_i];
    }
    return fName + " " + name.join(' ');
}
func1('saurabh', 'jayprakash', 'shankariya');
/*
*	Overloads
*/
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);

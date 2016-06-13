
function doAdd(a: number, b: number):number{
	return a + b;
}	

let s = doAdd(2, 3);

	//Function assigned to myAdd  // Return type number
let myAdd: (x: number, y: number)=>number =
	//Contains 2 inputs as a number types
    function(x: number, y: number): number { return x+y; };

/*
*	Optional and Default Parameters
*/					
						//lName is Optional parameter
function getFullName(fName, lName?):string{
	return `${fName} ${lName}`;
}

getFullName('saurabh'); // since lName is optional so it's not throwing 

function retreiveFullName(fName='Guest',lName='User'):string{
	return `${fName} ${lName}`;
}
retreiveFullName(); // no parameters hence outout is Guest User

function fullName(fName='Guest',lName):string{
	return `${fName} ${lName}`;
}
//fullName('shankariya'); Error : do not match with function signature
fullName(null, 'shankariya'); // need to pass undefined/null first paramter if omitting it.

/*
*	Rest Parameters
*/
function func1(fName:string, ...name: string[]):string{
	return `${fName} ${name.join(' ')}`;
}
func1('saurabh', 'jayprakash', 'shankariya');


/*
*	Overloads
*/
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };

function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
/*
JS Fundamentals Lesson Scratchpad

To run the code in this file, run the command:
      node lessons/js_fundamentals.js
*/ 
console.log("js_fundamentals.js is running")


/*
JS Variables & Data Types Examples
*/ 

var firstName = 'Ben';
var age = 26;
const isNice = true;

const policeSketchDescription = {
  hair: 'blond',
  eyes: 'brown',
  isTall: false,
  visibleTattoos: 1
}

let favoriteFoods = ['pizza', 'blueberries', 'ice cream', 'sushi']

let partnerName = null;
let jobTitle;

console.log('job title: ', jobTitle)

console.log('policesketchdescription - eyes: ', policeSketchDescription.eyes)
console.log('policesketchdescription - visibleTattoos: ', policeSketchDescription.visibleTattoos)
console.log('First favorite food: ', favoriteFoods[0])
console.log('Last Favorite food: ', favoriteFoods[3])

let quantity = 3;
let mythicalCreature = " unicorns";
let creatureCount = quantity + mythicalCreature

console.log('quantity:', quantity)
console.log('Mythical Creature:', mythicalCreature)
console.log('Creature Count: ', creatureCount)

/*
JS Concatenation & Interpolation
*/ 
let creatureCount2 = "<p>I have " + quantity + " very fancy" + mythicalCreature + "</p>"
console.log(creatureCount2)

let anotherQuantity = 3;
let anotherMythicalCreature = "unicorns"; //notice no extra space in the "unicorns" string
let anotherCreatureCount = `<p>I have ${quantity} very fancy ${mythicalCreature}</p>`

console.log(anotherCreatureCount)






/*
JS Functions
*/
// ES5 function
function logStatement() {
  let myFirstStatement = "A varaible string called myFirstStatement"; 
  // alert('This is my second statement!'); 
  console.log(myFirstStatement); 
  } 
  
  logStatement()
// ES6 function
  const logStatement2 = () => {
    let myFirstStatement = "A variable string called myFirstStatement"; 
    // alert('This is my second statement'); 
    console.log(myFirstStatement);     
    } 

    logStatement2()

let mathFtn = (num1, num2, num3) => {
  let addNum = num1 +2;
  let subNum = num2 -2;
  let mulNum = num3 * 2;
  let sumNums = num1 + num2 + num3;
  console.log(`${num1} + 2 = ${addNum}`);
  console.log(`${num2} - 2 = ${subNum}`);
  console.log(`${num3} * 2 = ${mulNum}`);
  console.log(`${num1} + ${num2} + ${num3} = ${sumNums}`);
}

mathFtn(2, 4, 6)
/*
JS Conditionals
*/ 

function identifyCookie(cookie) {
  if (cookie === "chocolate chip") {
    console.log("This cookie is a chocolate chip cookie!");
  } else if (cookie === "oatmeal raisin") {
    console.log("This should not even be called a cookie :(");
  } else {
    console.log("I bet you wish you had a chocolate chip cookie");
  }
}

// identifyCookie("chocolate chip")
// identifyCookie("oatmeal raisin")
// identifyCookie("sugar")

function evaluateSleep(hoursOfSleep) {  
  if (hoursOfSleep < 6) {
    console.log('I am groggy.');
  } else {
    console.log('I feel fantastic!');
  }
}

// evaluateSleep(8)
// evaluateSleep(4)







/*
JS For Loops
*/ 

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let points = [7, 3, 0, 14];

function calculateTotalPoints() {
  totalPoints = 0;
  for (let i = 0; i < points.length; i++) {
    totalPoints += points[i];
  }
  return totalPoints
}

console.log(calculateTotalPoints())

function printTotalPoints() {
  return `Your team scored ${calculateTotalPoints()} points!`;
}

console.log(printTotalPoints());
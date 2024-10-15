/*
JS Array Prototype Methods Lesson Scratchpad

To run the code in this file, run the command:
  node lessons/array_prototype_methods.js
*/ 
console.log("array_prototype_methods.js is running")

// .filter() Examples

// Example #1
// Return a new array of the names that are 4 letters or less using the filter prototype method.
const names = ['nick', 'ben', 'trisha', 'john', 'dustin'];

// PSEUDOCODE
// Iterate through array
// Determine if element is 4 letters or less
// If yes, Add to new array

function filterNames() {
  const shortNames = names.filter( (name) => name.length < 5 )
  console.log('result:', shortNames)
}

filterNames()

// Alternate solution
function FilterNames() {
  const shortNames = names.filter( (name) => {
    return name.length < 5
  })
  return shortNames
}
console.log(filterNames)
// shortcut/shorthand
const shortNames = names.filter( (name) => name.length < 5)
console.log(shortNames)

// Example #2
// Create a new array of living beatles using the filter method and store them in a livingBeatles variable.
var beatles = [
  { name: 'John', living: false, instruments: ['guitar', 'bass', 'piano'] },
  { name: 'Paul', living: true, instruments: ['bass', 'guitar', 'piano'] },
  { name: 'George', living: false, instruments: ['guitar', 'sitar'] },
  { name: 'Ringo', living: true, instruments: ['drums', 'bongos'] },
];

// PSEUDOCODE
// Iterate through array
// sheck object to see if each person is living or dead
// If person is living, then store them in a new variable - LivingBeatles

function isLiving() {
  const livingBeatles = beatles.filter( (beatle) => {
    if (beatle.living === true) {
      return beatle
    }
  })
  return livingBeatles
}

console.log("Living:", isLiving())

// Example #3
// Create another array of beatles that play the guitar using the filter method and store them in a guitarPlayingBeatles variable.

function playsGuitar() {
  const guitarPlayingBeatles = beatles.filter( (beatle) => {
    if (beatle.instruments.includes('guitar')) {
      return beatle
    }
  })
  return guitarPlayingBeatles
}

console.log("plays guitar:", playsGuitar())

// .map() Examples
// Example #1
// Using map, iterate over the array of prices, increase the price by $1, and return a new array of increased prices. Store them in a variable called increasedPrices.
const prices = [4.99, 5.50, 7.00, 10.25];

function increasePrices() {
  const increasedPrices = prices.map( (price) => price + 1 )
  return increasedPrices
}

console.log('increased prices:', increasePrices())

// Example #2
// Using an array of temperature data in Fahrenheit, convert the date to degrees Celsius and store them in a variable called degreesC. (T(°C) = (T(°F) - 32) / 1.8)
const degreesF = [67, 32, 55, 102]

function convertTemp() {
  const degreesC = degreesF.map( (temperature) => (temperature - 32) / 1.8 )
  return degreesC
}

console.log("Temps Celsius:", convertTemp())

// .reduce() Examples  *NOTE*  .reduce() takes 2 arguments.
// Within the callback we have access to the accumulator, the current element in the iteration, the current elements index, and the original array we are looping over.
// Initial Value - The initial value to be used as the accumulator (The first argument to the first call of the callback). The accumulator is the singale value that will eventually be returned.  It's called an accumulator because each iteration over the array will modify the accumulator value until the loop is complete.
//Example #1
const numbers = [1, 2, 3, 4, 5];

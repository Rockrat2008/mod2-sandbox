/* To run the code in this file, run the command:
      node js_party/type_coercion_concatenation_interpolation_playground.js
*/

console.log("type_coercion_concatenation_interpolation_playground.js is running")

// PART 1: Type Coercion

// 1a. Look at the variable declarations and assignments below.  Guess what will log for creatureCount.  Uncomment and run it.
        var quantity = 3;
        var mythicalCreature = " unicorns";
        var creatureCount = quantity + mythicalCreature;
        console.log(creatureCount)

// 1b. In the example above, what is the data type of the quantity variable? Integer
// 1c. In the example above, what is the data type of the mythicalCreature variable? String
// 1d. In the example above, what is the data type of the creatureCount variable?  String
//     How can a number plus a string equal a string? Type coercion
//     Take a few minutes to look up and read about Type Coercion in the MDN docs.

// PART 2: Concatenation
  var brag = "I have " + quantity + " fancy" + mythicalCreature +"!"
  console.log(brag)

// 2a. Ensure the quantity, mythicalCreature, and brag variables above are not commented out.  Click Run.

// 2b. The value of brag above is being created using concatenation. A way to link multiple values (strings, numbers, variables, etc) together into one string using the + operator.  Let's try it!
   // Declare a variable and assign it a string value of a friend's name.
   var friendName = "Bunny"
   // Declare a variable and assign it a string value of a nice gesture.
   var friendGesture = "curtsey"
   // Declare a variable "gratitude" and assign it a statement of thanks that uses concatenation and your other 2 variables.  For example:  "Thank you Kayla for pointing out the food in my teeth."
   var gratitude = "That's impressive " + friendName + ". I can tell you have been practicing how to " + friendGesture + "."
   console.log(gratitude)

// 2c. Use the variables below to make a concatenated string.
      var activity = 'talk'
      var estrangedUncle = 'Bruno'
      console.log("Seriously John? It is time for to " + activity + " to uncle " + estrangedUncle + " already!")

// PART 3: Interpolation
  var bigBrag = `I have ${quantity} VERY fancy and sophisticated${mythicalCreature}!`
  console.log(bigBrag)
        //Note the weird spacing between sophisticated and mythicalCreature above due to how we already included a space in the mythicalCreature value previously.

// 3a. Ensure the quantity, mythicalCreature, and bigBrag variables above are not commented out. Click Run.

// 3b. The bigBrag variable above uses a different way of combining values called interpolation. It accomplishes the same goal as concatenation but uses different syntax - backticks instead of quotes(``) and these guys ${}.  Let's try it!
     // Declare a variable and assign it a string value of a name.
     var firstName = "Michael"
     // Declare a variable and assign it a string value of a celebratory exclamation ("congrats", "woohoo", etc)
     var celebratoryExclamation = "Congrats"
     // Declare a variable and assign it to a string value of a nice characteristic ("cute", "nice", etc)
     var niceCharacteristic = "gorgeous"
     // Declare a variable "babyNote" and assign it a statement of new baby congratulations that uses interpolation and your other 3 variables.  For example: "Congratulations Trisha! I heard your new baby is adorable!"
     var babyNote = `${celebratoryExclamation} ${firstName}! Your baby has ${niceCharacteristic} blue eyes.`
     console.log(babyNote)

// 3c. Use the variables below to make an interpolated string.
      var celebration = 'birthday'
      var age = 25
      var bdayString = `I heard on your next ${celebration} that you will be ${age} years old.`
      console.log(bdayString)


/* 
 Lab 003 – Data Types in JavaScript (Boolean, Undefined, Null & Immutability)
*/

// TODO 1: Booleans
// - Create isStudent = true, hasLicense = false
let isStudent = true;
let hasLicense = false; 

// - Print results of true || false, true && false, !true
console.log (isStudent || hasLicense);
console.log (isStudent && hasLicense);
console.log (!isStudent);

// TODO 2: Short-circuit evaluation
// - Print result of false && (5 > 2)
console.log (false && (5 > 2));

// - Print result of true || (2 > 5)
console.log (true || (2 > 5));

// TODO 3: Undefined
// - Declare variable grade and print it
let grade;
console.log (grade);

// TODO 4: Null
// - Create city = null, print it
let city = null; 
console.log (city);

// - Reassign city = "Miami" and print again
city = "Miami"
console.log (city);

// TODO 5: Immutability
// - Create word = "hello"
let word = "hello";

// - Try word[0] = "H", print word
word[0] = "H";
console.log (word);

// - Reassign word = "Hello" and print again
word = "Hello";
console.log (word);


// 🚀 Stretch Goals
// - Check if number is between 10 and 20 using &&
let number = 10
if(number > 10 && number < 20){
    console.log(number + " is between 10 and 20")
} else{
    console.log(number + " is not between 10 and 20")
}

// - Check if city is "Miami" or "Berlin" using ||
let City = "miami";
if (City === "miami" || City === "berlin") {
  console.log("Yes its Miami");
} else {
  console.log("Not Miami");
}

//EXIT TICKET 
// 1. undefined means a variable exists but has no value, while null is set on purpose to mean “nothing.” They both mean empty, but in different ways.
// 2. Immutability means primitive values can’t be changed. If you try to change one, it just makes a new value.
// 3. Short-circuit evaluation is useful because it skips extra checks. It makes code faster and avoids errors.
// 4. I’d use the || operator the most. It’s simple and great for checking multiple conditions or setting defaults.

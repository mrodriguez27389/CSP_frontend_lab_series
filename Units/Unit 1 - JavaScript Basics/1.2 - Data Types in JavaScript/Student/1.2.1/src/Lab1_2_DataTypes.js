/* 
 Lab 002 – Data Types in JavaScript
*/

// TODO 1: Create variables age (34) and price (12.99), print both
let age = 34;
let price = 12.99;
console.log (`Age: ${age}`)
console.log ("Price: "+ price)

// TODO 1b: Divide "Sandra" by 2 and print result (expect NaN)
let whatIsThis = "Sandra" / 2;
console.log(whatIsThis);

// TODO 2: Print basic math ops: + - * /
console.log ("2 + 2 =", 2 + 2);
console.log ("4 - 2 =", 4 - 2);
console.log ("3 * 2 =", 3 * 2);
console.log ("6 / 2 =", 6 / 2);

// TODO 2b: Use exponentiation (2 ** 3) and modulo (7 % 2)
console.log ("2 ** 3 =", 2 ** 3); 
console.log ("7 % 2 =", 7 % 2);

// TODO 3: Assignment operators with score variable
let score = 10;
console.log (score)
console.log (score += 5)
console.log (score -= 3)
console.log (score *= 3)
console.log (score /= 12)

// TODO 4: Expressions with operator precedence
console.log (((7 + 5) / 3) - 8)
console.log(2 + 2 * 2);     
console.log((2 + 2) * 2);  

// TODO 5: Strings (single, double, backticks)
let name1 = 'Maxx';
let name2 = "Maxx";
let name3 = `Maxx`;
let Age = 16;
console.log(`Hello, my name is ${name3} and I am ${Age} years old.`);

// TODO 6: String properties and methods
// - greeting.length
let greeting = "Hello there!";
console.log (greeting.length)

// - charAt(0), charAt(5), [3]
console.log (greeting.charAt(0));
console.log (greeting.charAt(5));
console.log (greeting[3]);

// - indexOf("sad")
let sentence = "Don't be sad, be happy!";
console.log (sentence.indexOf("sad"));

// - repeat()
console.log("la".repeat(5));  

// - substring, substr, slice examples
console.log (sentence.substring(0,3));
console.log (sentence.substr(0,3));
console.log (sentence.slice(0,3));

// 🚀 Stretch Goals
// - Even number check using %
let number = 12;
if (number % 2 === 0) {
  console.log(number + " is even.");
} else {
  console.log(number + " is odd.");
}

// - localeCompare() example
let city1 = "Paris";
let city2 = "London";
let comparison = city1.localeCompare(city2);
if (comparison < 0) {
  console.log(city1 + " comes before " + city2);
} else if (comparison > 0) {
  console.log(city1 + " comes after " + city2);
} else {
  console.log(city1 + " and " + city2 + " are the same.");
}

// EXIT TICKET
// 1. Primitive data types are basic things like numbers, strings, and booleans. Non-primitive ones, like arrays and objects, can hold lots of stuff and are stored by reference.
// 2. NaN shows up when you try to do math with something that isn’t a number, like dividing a string by a number. It basically means the calculation didn’t work.
// 3. Backticks let you put variables or expressions right in a string with ${}, and you can also make multi-line strings without using \n. They make your code cleaner and easier to read when you’re combining text and variables.
// 4. I think .slice() was the most useful because it’s easy to get part of a string exactly how you want it. It’s faster than doing everything manually.
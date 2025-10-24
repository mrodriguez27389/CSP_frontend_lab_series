/* ===========================================================
   Lab 1.1 – Intro
   Exploring JavaScript syntax, console output, and variables.
   =========================================================== */

// TODO 1: Print your full name with console.log()
console.log("Maxx Rodriguez");

// TODO 2: Declare variable favoriteFood, assign "Steak", then reassign "Pizza"
let favoriteFood = "Steak";
console.log(favoriteFood);
favoriteFood = "Pizza";
console.log(favoriteFood);

// TODO 3: Create variable mystery, assign a string, then a number, print type each time
let mystery = "Hello";
console.log ("Value: " + mystery + " Data Type: " + typeof mystery)
mystery = 68;
console.log ("Value: " + mystery + " Data Type: " + typeof mystery)

// TODO 4: Declare const schoolName, try to reassign
const schoolName = "Christopher Columbus High School";
console.log(schoolName);
// schoolName = "Belen"; Cannot reasign value to const

// TODO 5: Create three valid camelCase variables and print them
let firstName; 
let lastName
let birthYear;
let favoriteCity;
let carType;
console.log(firstName)
console.log(lastName)
console.log(birthYear)
console.log(favoriteCity)
console.log(carType)



// 🚀 Stretch Goals (optional)
// - Create a variable age and print "I am X years old" using concatenation
// - Repeat using template literals

let age = 16;
console.log(`I am ${age} years old`); // Template literals 
console.log("I am " + age + " years old") // String concatenation

/* ===========================================================
   🎟 EXIT TICKET
   1. What new concept or skill did you learn in this lab?
   Let, console.log, const, typeof, and number.
   2. What challenges did you encounter, and how did you solve them?
   If you go to the console it tells you the error and what line it is in.
   3. Where else could this programming concept be useful?
   orginization, determination, and websites.
   =========================================================== */

   let a = "7";
   let b = "3";

   console.log(Number(a) + Number(b));

   let width = 30;
   let height = 10;
   let area = width * height;
   let perimeter = 2 * (width + height);

   console.log(`The area of the rectangle is ${area}`)
   console.log(`The perimeter of the rectangle is ${perimeter}`)
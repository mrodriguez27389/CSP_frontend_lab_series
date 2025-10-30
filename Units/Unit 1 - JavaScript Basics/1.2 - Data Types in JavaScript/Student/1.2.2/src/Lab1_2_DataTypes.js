/* ===========================================================
   Lab 1.2 – Data Types
   Primitive types, typeof, and basic conversions.
   =========================================================== */

// 1️⃣ Primitive Types
// Declare one variable for each primitive type: string, number, boolean, null, undefined.
let myString = "Hello";
let myNumber = 67;
let myBoolean = true;
let myNull = null;
let myUndefined; 

// Print each variable and its type using typeof.
console.log(myString, typeof myString);      
console.log(myNumber, typeof myNumber);      
console.log(myBoolean, typeof myBoolean);    
console.log(myNull, typeof myNull);         
console.log(myUndefined, typeof myUndefined);

// 2️⃣ Typeof Check
// Compare typeof null and typeof undefined.
let a = null;
let b; 
console.log(typeof a); 
console.log(typeof b); 

// Explain in a comment why the results differ.
   // 1. The results differ because null is a special primitive that represents "no value" but JavaScript mistakenly identifies it as an object. Undefined is a primitive that means the variable has been declared but not assigned a value.

// 3️⃣ Concatenation vs Addition
// Use "5" and 5 to demonstrate the difference between concatenation and numeric addition.
// Print both results and explain the behavior.
let str = "5";
let num = 5;
console.log("Concatenation:", str + num); 
console.log("Numeric addition:", Number(str) + num); 

// 4️⃣ Explicit Conversions
// Convert different values using Number(), String(), and Boolean().
// Print each result and describe what you notice.
console.log(Number("123"));      // 123
console.log(Number("abc"));      // NaN
console.log(Number(""));         // 0
console.log(Number(0));          // 0
console.log(Number(true));       // 1
console.log(Number(false));      // 0
console.log(Number(null));       // 0
console.log(Number(undefined));  // NaN
console.log(String("123"));      // "123"
console.log(String("abc"));      // "abc"
console.log(String(""));         // ""
console.log(String(0));          // "0"
console.log(String(true));       // "true"
console.log(String(false));      // "false"
console.log(String(null));       // "null"
console.log(String(undefined));  // "undefined"
console.log(Boolean("123"));     // true
console.log(Boolean("abc"));     // true
console.log(Boolean(""));        // false
console.log(Boolean(0));         // false
console.log(Boolean(1));         // true
console.log(Boolean(true));      // true
console.log(Boolean(false));     // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false

// 5️⃣ NaN and isNaN()
// Try converting a non-numeric string such as "hello" to a number.
let value1 = "hello";
let converted1 = Number(value1);
console.log(converted1);        

// Use isNaN() to check the result and comment on the output.
console.log(isNaN(converted1)); 

// 6️⃣ Template Literals
// Create variables name and age.
let name = "Maxx";
let age = 16;

// Use a template literal to print: Hello, my name is ${name} and I am ${age} years old.
console.log(`Hello, my name is ${name} and I am ${age} years old.`);

/* ===========================================================
   🎟 EXIT TICKET
   1. Which data type(s) did you use today and why?
   I used strings, numbers, booleans, null, and undefined to test how they work in JavaScript. They helped me see how data changes when I use different operators or conversions.
   
   2. Where did you encounter type conversion (implicit or explicit)?
   I saw type conversion when I added a string and a number together. I also used Number(), String(), and Boolean() to change values on purpose.
   
   3. One misconception I corrected or a tip I learned.
   I learned that null and undefined don’t mean the same thing. Null is something I set on purpose, and undefined happens when I forget to give a value.
   
   4. What would you try next time to debug faster?
   Next time I’ll use console.log() more often to check my variables. I’ll also use typeof to see what type they really are while I’m coding.

   =========================================================== */

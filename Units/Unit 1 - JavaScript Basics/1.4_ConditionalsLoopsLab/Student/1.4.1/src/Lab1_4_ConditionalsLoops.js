/* 
 Lab 004 – Conditionals and Loops
*/

// TODO 1: if..else with age discounts
let age = 15;
if (age <= 16) {
  console.log("Teen discount");
} else if (age >= 65) {
  console.log("Senior discount");
} else {
  console.log("No discount");
}

// TODO 2: Nested if with two numbers
let number1 = 8;
let number2 = 12;
if (number1 === number2) {
  console.log("Numbers are equal");
} else if (number1 > number2) {
  console.log("Number 1 is bigger");
} else {
  console.log("Number 1 is smaller");
}

// TODO 3: Switch statement for language greeting
let language = "French";
switch (language) {
  case "Spanish":
    console.log("Hola, mundo!");
    break;
  case "French":
    console.log("Bonjour tout le monde");
    break;
  case "English":
  default:
    console.log("Hello, world!");
    break;
}

// TODO 4: While loop (1 to 10)
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// TODO 5: Do..while loop (1 to 5)
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

// TODO 6: For loop (1 to 20, print "ten" at 10 and "twenty" at 20)
for (let n = 1; n <= 20; n++) {
  if (n === 10) {
    console.log("ten");
  } else if (n === 20) {
    console.log("twenty");
  } else {
    console.log(n);
  }
} 

// TODO 7: Even/Odd loop (1 to 20)
for (let x = 1; x <= 20; x++) {
  if (x % 2 === 0) {
    console.log(`${x} is even`);
  } else {
    console.log(`${x} is odd`);
  }
}
// 🚀 Stretch Goals
// - Backwards loop from 20 to 1
for (let y = 20; y >= 1; y--) {
  console.log(y);
}

// - Skip multiples of 3 in even/odd loop
for (let z = 1; z <= 20; z++) {
  if (z % 3 === 0) continue;
  if (z % 2 === 0) {
    console.log(`${z} is even`);
  } else {
    console.log(`${z} is odd`); 
  }
}

// EXIT TICkET
// 1. Switch is easier than many else ifs because it looks cleaner and is easier to read. It also makes the code shorter and more organized.
// 2. While checks the condition before running, but do..while always runs at least once before checking. This makes do..while useful when you want the code to run at least one time.
// 3. Break stops the loop completely when the condition is met, while continue skips only that iteration and keeps the rest running. They help control the loop without changing its setup.
// 4. I like for loops the most because they are simple and easy to control. You can see the start, condition, and update all in one line, which makes it easy to follow. 
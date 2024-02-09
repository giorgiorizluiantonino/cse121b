var adult = true;

if (adult) {
  var myName = "Bob";
  let age = 24;
}

console.log(myName);
// Bob
console.log("")

// 2
let myVariable = 4;
// do some stuff with myVariable

// reassign myVariable?
myVarable = 5;

console.log(myVariable)
// do some more stuff expecting myVariable to be changed...

console.log("")
console.log("ARRAYS")
console.log("")

let names = ["Bob", "Sue", "Jorge", "Svetlana"];
names[2] = "George"
console.log(names);
console.log(names[2]);

console.log("")
console.log("ARRAYS PUSH")
console.log("")

let pangalan = ["Bob", "Sue", "Jorge", "Svetlana"];
pangalan.push("Grace");
console.log(pangalan);
//Displays ['Bob','Sue','George','Svetlana','Grace']

console.log("")
console.log("ARRAYS POP")
console.log("")

let pangalan1 = ["Bob", "Sue", "Jorge", "Svetlana"];
pangalan1.push("Grace");
pangalan1.pop();
console.log(pangalan1);
//Displays ['Bob','Sue','George','Svetlana']



console.log("")
console.log("STRINGS")
console.log("")

let myString = "This is my String!";
myString.length; // 18

let myString2 = "This is my String!";
myString[2]; // "i"  - remember that indexes start counting with 0!


console.log("")
console.log("STRINGS DELIMITERS")
console.log("")

const hello = "Hello";
const world = "World";
const complexString = hello + " " + world;

const hello2 = "Hello";
const world2 = "World";
const complexString2 = `${hello2} ${world2}`;

//FOR HTML
const myArray = ["one", "two", "three"];
const htmlString = `
<ol>
  <li>${myarray[0]}</li>
  <li>${myarray[1]}</li>
  <li>${myarray[2]}</li>
</ol>`;
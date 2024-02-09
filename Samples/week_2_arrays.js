// BASIC ARRAYS 
let scores = [100, 72, 83, 94, 88, 87];
console.log(scores);

console.log("INDEX REFERENCE")
let aScore = scores[0]; 
console.log(aScore) 

console.log("MODIFIED")
scores[0] = 99; 
// This assignment expression changed the first score in the array from 100 to 99.

console.log("CLASSIC LOOP")
for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
  }

console.log("FOR EACh")
scores.forEach(function(score) {
    console.log(score);
  });

console.log("LENGTH")
let numScores = scores.length; 
// The numScores variable is assigned the value of 6


//ARRAY METHODS
console.log("ARRAY METHODS")
scores.push(100); // Adds a new element to the end of the array
scores.pop(); // Removes the last element from the array
scores.shift(); // Removes the first element from the array
scores.unshift(100); // Adds a new element to the beginning of the array
scores.splice(2, 1); // Removes 1 element from the array starting at index 2


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

console.log("")
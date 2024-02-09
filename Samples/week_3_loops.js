const prompt = require("prompt-sync")();

let numSales = prompt("Enter a number :");

if (numSales <= 50) {
    console.log("Way to few sales");
  } else if (numSales <= 1000) {
    console.log("Average number of sales");
  } else {
    console.log("A good number of sales.");
  }

// SWITCH 

let grade = "A";
let gpaPoints = 0;
switch (grade) {
  case "A":
    gpaPoints = 4;
    break;
  case "B":
    gpaPoints = 3;
    break;
  default:
    gpaPoints = -1;
}


function gpaPoints(grade) {
    let gpaPoints = 0;
    switch (grade) {
      case "A":
        gpaPoints = 4;
      // break removed
      case "B":
        gpaPoints = 3;
        break;
      case "C":
        gpaPoints = 2;
      default:
        gpaPoints = -1;
    }
    return gpaPoints;
  }
  
  gpaPoints("A"); // returns 3!
  gpaPoints("B"); // also returns 3
  gpaPoints("C"); // returns -1!
  gpaPoints("X"); // returns -1
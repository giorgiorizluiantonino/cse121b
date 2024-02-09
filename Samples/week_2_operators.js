y = 5;
x = 2; 

console.log(y + x);

console.log("") 

console.log(y - x);

console.log("")

console.log(y * x);

console.log("")

console.log(y / x);
 
console.log("")

console.log(y ** x);

console.log("")


//SAMPLE CONDITTIONAL AND SPREAD 
function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  // Expected output: 6
  
  console.log(sum.apply(null, numbers));
  // Expected output: 6
  

  function getFee(isMember) {
    return isMember ? '$2.00' : '$10.00';
  }
  
  console.log(getFee(true));
  // Expected output: "$2.00"
  
  console.log(getFee(false));
  // Expected output: "$10.00"
  
  console.log(getFee(null));
  // Expected output: "$10.00"

  
console.log("")
//DECREMENT
t = 5;
t++; //post decerement

console.log(t);
o = 4;
--o; // pre decerement
console.log(o)

//The Nullish Coalescing Operator (??)

let name = null;
let text = "missing";
let result = name ?? text;

//The Optional Chaining Operator (?.)
// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};
// Ask for car name:
document.getElementById("demo").innerHTML = car?.name;

//The typeof Operator
typeof "John"   // Returns string
typeof 3.14     // Returns number

//The delete Operator
const person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
  };
  delete person.age;

// The Spread (...) Operator
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];

// The in Operator
const person1 = {firstName:"John", lastName:"Doe", age:50};
("firstName" in person);
("age" in person);
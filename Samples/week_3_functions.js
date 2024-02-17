//SAMPLES--------------------------------------------------------------
function square(number) {
    return number * number;
  }


  function myFunc(theObject) {
    theObject.make = "Toyota";
  }
  
  ////--------------------------------------------------------------
function myFunc(theObject) {
theObject.make = "Toyota";
}
  
const mycar = {
make: "Honda",
model: "Accord",
year: 1998,
};

const myyear = {
    year2: 2000,
    year1: 1998,
    };


console.log(mycar.make); // "Honda"
myFunc(mycar);
console.log(mycar.make); // "Toyota"

console.log(myyear.year1)
myFunc(myyear)

/// Arr--------------------------------------------------------------
function myFunc(theArr) {
    theArr[0] = 30;
  }
  
  const arr = [45];
  
  console.log(arr[0]); // 45
  myFunc(arr);
  console.log(arr[0]); // 30


// FUNCTION EXPRESSIONS --------------------------------------------------------------
const factorial = function fac(n) {
return n < 2 ? 1 : n * fac(n - 1);
};
  
console.log(factorial(3)); // 6


// ARRAY--------------------------------------------------------------
function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
      result[i] = f(a[i]);
    }
    return result;
  }
  
  const cube = function (x) {
    return x * x * x;
  };
  
  const numbers = [0, 1, 2, 5, 10];
  console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]


  //CALLING FUNCTIONS--------------------------------------------------------------
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120


//FUNCTION HOISTING--------------------------------------------------------------
console.log(square(5)); // 25

function square(n) {
  return n * n;
}

// All function declarations are effectively at the top of the scope
function square(n) {
    return n * n;
  }
  
  console.log(square(5)); // 25


//FUNCTION SCOPE--------------------------------------------------------------

// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"


// LOOP FUNCTION--------------------------------------------------------------

function loop(x) {
    // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
    if (x >= 10) {
      return;
    }
    // do stuff
    loop(x + 1); // the recursive call
  }
  loop(0);


// ANOTHER--------------------------------------------------------------
function walkTree(node) {
    if (node === null) {
      return;
    }
    // do something with node
    for (let i = 0; i < node.childNodes.length; i++) {
      walkTree(node.childNodes[i]);
    }
  }

// ANOTHER 
function foo(i) {
if (i < 0) {
    return;
}
console.log(`begin: ${i}`);
foo(i - 1);
console.log(`end: ${i}`);
}
foo(3);
  
  // Logs:
  // begin: 3
  // begin: 2
  // begin: 1
  // begin: 0
  // end: 0
  // end: 1
  // end: 2
// end: 3

// NESTED FUNCTIONS AND CLOSURES--------------------------------------------------------------

function addSquares(a, b) {
    function square(x) {
      return x * x;
    }
    return square(a) + square(b);
  }
  
  console.log(addSquares(2, 3)); // 13
  console.log(addSquares(3, 4)); // 25
  console.log(addSquares(4, 5)); // 41

//-------------------------------------------------------------- 
function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
  }
  
  const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
  console.log(fnInside(5)); // 8
  console.log(outside(3)(5)); // 8

  // PRESERVATIONS OF VARIABLE MULITPY_NESTED FUNCTIONS--------------------------------------------------------------

function A(x) {
    function B(y) {
      function C(z) {
        console.log(x + y + z);
      }
      C(3);
    }
    B(2);
  }
  A(1); // Logs 6 (which is 1 + 2 + 3)  

// NAME CONFLICTS--------------------------------------------------------------
function outside() {
    const x = 5;
    function inside(x) {
      return x * 2;
    }
    return inside;
  }
  
  console.log(outside()(10)); // 20 (instead of 10


// CLOSURES--------------------------------------------------------------

// The outer function defines a variable called "name"
const pet = function (name) {
    const getName = function () {
      // The inner function has access to the "name" variable of the outer function
      return name;
    };
    return getName; // Return the inner function, thereby exposing it to outer scopes
  };
  const myPet = pet("Vivie");
  
  console.log(myPet()); // "Vivie"

// ANOTHER --------------------------------------------------------------

  const createPet = function (name) {
    let sex;
  
    const pet = {
      // setName(newName) is equivalent to setName: function (newName)
      // in this context
      setName(newName) {
        name = newName;
      },
  
      getName() {
        return name;
      },
  
      getSex() {
        return sex;
      },
  
      setSex(newSex) {
        if (
          typeof newSex === "string" &&
          (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
        ) {
          sex = newSex;
        }
      },
    };
  
    return pet;
  };
  
  const pet2 = createPet("Vivie");
  console.log(pet.getName()); // Vivie
  
  pet.setName("Oliver");
  pet.setSex("male");
  console.log(pet.getSex()); // male
  console.log(pet.getName()); // Oliver


//ARGUMENT OBJECT--------------------------------------------------------------

function myConcat(separator) {
    let result = ""; // initialize list
    // iterate through arguments
    for (let i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
    }
    return result;
  }


//--------------------------------------------------------------

console.log(myConcat(", ", "red", "orange", "blue"));
// "red, orange, blue, "

console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// "elephant; giraffe; lion; cheetah; "

console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
// "sage. basil. oregano. pepper. parsley. "


// ANOTHER --------------------------------------------------------------
function multiply(a, b) {
    b = typeof b !== "undefined" ? b : 1;
    return a * b;
  }
  
  console.log(multiply(5)); // 5

//-----------------------------------------
function multiply(a, b = 1) {
    return a * b;
  }
  
  console.log(multiply(5)); // 5

//REST PARAMETERS --------------------------------------------------------------
function multiply(multiplier, ...theArgs) {
    return theArgs.map((x) => multiplier * x);
  }
  
  const arrs = multiply(2, 1, 2, 3);
  console.log(arrs); // [2, 4, 6]


//ARROW FUNCTIONS ---------------------------------------
const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
  return s.length;
});

console.log(a2); // [8, 6, 7, 9]

const a3 = a.map((s) => s.length);

console.log(a3); // [8, 6, 7, 9]

// 1. Write a function declaration / definition named fullName that has two parameters named first and last. 
//The function's purpose is to combine those two string parameters together to return one combined string (a 'full' name) with a space between the first and last variables.
function fullName(first, last) {
  return `${first} ${last}`;   // or use string concatenation first + ' ' + last (not preferred)
}

// 2. Now use an anonymous function expression to do the same thing where the function is assigned to a variable named fullName.
const fullName = function (first, last) {
  return `${first} ${last}`;
}

// 3. Now use an arrow function expression to do the same thing where the function is assigned to a variable named fullName.
const fullName = (first, last) => `${first} ${last}`;

// 4. Write an expression that calls the fullName function declaration and writes the result to an existing HTML element's text node with the ID of fullName
document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);
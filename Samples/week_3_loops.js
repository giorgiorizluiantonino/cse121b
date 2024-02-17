const prompt = require("prompt-sync")();

let numSales = prompt("Enter a number :");

if (numSales <= 50) {
    console.log("Way to few sales");
  } else if (numSales <= 1000) {
    console.log("Average number of sales");
  } else {
    console.log("A good number of sales.");
  }

// SWITCH --------------------------------------------------------------

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


//MORE LOOPS--------------------------------------------------------------
if (condition) {
  /* code to run if condition is true */
} else {
  /* run some other code instead */
}

//A REAL EXAMPLE--------------------------------------------------------------
let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}

// LET --------------------------------------------------------------
let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}

//NESTING IF ELSE--------------------------------------------------------------
if (choice === "sunny") {
  if (temperature < 86) {
    para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
  } else if (temperature >= 86) {
    para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  }
}

// LOGICAL OPERATORS AND OR AND NOT--------------------------------------------------------------
if (choice === "sunny" && temperature < 86) {
  para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
}

if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("You should leave the house quickly.");
} else {
  console.log("Probably should just stay in then.");
}


if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("Probably should just stay in then.");
} else {
  console.log("You should leave the house quickly.");
}


//SWITCH STATEMENTS --------------------------------------------------------------
switch (expression) {
  case choice1:
    // run this code
    break;

  case choice2:
    // run this code instead
    break;

  // include as many cases as you like

  default:
    // actually, just run this code
    break;
}



//LOOP JS and HTML

// <label for="weather">Select the weather type today: </label>
// <select id="weather">
  // <option value="">--Make a choice--</option>
  // <option value="sunny">Sunny</option>
  // <option value="rainy">Rainy</option>
  // <option value="snowing">Snowing</option>
  // <option value="overcast">Overcast</option>
// </select>

// <p></p>

const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    para.textContent =
      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  } else if (choice === "rainy") {
    para.textContent =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (choice === "snowing") {
    para.textContent =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para.textContent = "";
  }
}




// SWITCH EXAMPLE HTML AND JS

//<label for="weather">Select the weather type today: </label>
//<select id="weather">
//<option value="">--Make a choice--</option>
  //<option value="sunny">Sunny</option>
  //<option value="rainy">Rainy</option>
  //<option value="snowing">Snowing</option>
  //<option value="overcast">Overcast</option>
  //</select>

//<p></p>

const select1 = document.querySelector("select");
const para1 = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select1.value;

  switch (choice) {
    case "sunny":
      para.textContent =
        "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
      break;
    case "rainy":
      para1.textContent =
        "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
      break;
    case "snowing":
      para1.textContent =
        "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
      break;
    case "overcast":
      para1.textContent =
        "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
      break;
    default:
      para1.textContent = "";
  }
}

//TERNARY OPERATOR HTML AND JS

//<label for="theme">Select theme: </label>
//<select id="theme">
  //<option value="white">White</option>
  //<option value="black">Black</option>
//</select>

//<h1>This is my website</h1>

const select2 = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select2.addEventListener("change", () =>
  select2.value === "black"
    ? update("black", "white")
    : update("white", "black"),
);

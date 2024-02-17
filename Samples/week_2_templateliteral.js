const prompt = require("prompt-sync")();

let courseSubject = prompt("Enter course Subject: ");
let courseNumber = prompt("Enter course Number: ");
let courseCredits = prompt("Enter course Credits: ");
let courseLength = prompt("Enter course Length: ");

let output = "Welcome to " + courseSubject + " " + courseNumber + "!Credits: " + courseCredits + "Length: " + courseLength;
console.log(output)
console.log("")

//OR--------------------------------------------------------------
let outp = `Welcome to ${courseSubject} ${courseNumber}!Credits: ${courseCredits}Length: ${courseLength}`;
console.log(outp)
console.log("")

//-------------------------------------------------------------

console.log("MULTI SINGLE STRINGS")
console.log("string text line 1\n" + "string text line 2");
// "string text line 1
// string text line 2

console.log("")
console.log("Same as...")
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"

//-------------------------------------------------------------

console.log("")
console.log("STRING INTERPOLATIION")
const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."

console.log("")
const c = 5;
const d = 10;
console.log(`Fifteen is ${c + d} and
not ${2 * c + d}.`);
// "Fifteen is 15 and
// not 20."

console.log("")
console.log("NESTING TEMPLATES")

const classes = `header ${
    isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
  }`;



console.log("")
console.log("TAGGED TEMPLATES")
const person = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp < 100 ? "youngster" : "centenarian";

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const outpu = myTag`That ${person} is a ${age}.`;

console.log(outpu);
// That Mike is a youngster.

console.log`Hello`; // [ 'Hello' ]
console.log.bind(1, 2)`Hello`; // 2 [ 'Hello' ]
new Function("console.log(arguments)")`Hello`; // [Arguments] { '0': [ 'Hello' ] }

function recursive(strings, ...values) {
  console.log(strings, values);
  return recursive;
}
recursive`Hello``World`;
// [ 'Hello' ] []
// [ 'World' ] []



const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
// Some formatters will format this literal's content as HTML
const doc = html`<!doctype html>
  <html lang="en-US">
    <head>
      <title>Hello</title>
    </head>
    <body>
      <h1>Hello world!</h1>
    </body>
  </html>`;


console.log("")
console.log("RAW STRINGS")


console.log("STARTS ")
`\`` === "`"; // true
`\${1}` === "${1}"; // true



///ANSWER TASK 2--------------------------------------------------------------

let temples = ["Rome", "Salt Lake", "Nauvoo"];
let listItems = "";
for (const temple of temples) {
  listItems += `<li>__________</li>`;
}
document.querySelector("ul").innerHTML = listItems;

//THIS IS THE ANSWER
listItems += `<li>${temple}</li>`;

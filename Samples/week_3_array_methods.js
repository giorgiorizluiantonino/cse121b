// ARRAY filter().
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

//-------------------------------------------------------------------------------
// EXAMPLES 
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

//-------------------------------------------------------------------------------
// FILETERING INVALID ENTRIES FROM JSON
const arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: "undefined" },
  ];
  
  let invalidEntries = 0;
  
  function filterByID(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
      return true;
    }
    invalidEntries++;
    return false;
  }
  
  const arrByID = arr.filter(filterByID);
  
  console.log("Filtered Array\n", arrByID);
  // Filtered Array
  // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]
  
  console.log("Number of Invalid Entries =", invalidEntries);
  // Number of Invalid Entries = 5


//-------------------------------------------------------------------------------
  // SEARCHING IN ARRAY 
  const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']


//-------------------------------------------------------------------------------
//ARRAY map()
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

//-------------------------------------------------------------------------------
//REFORMAT OBJECT IN ARRAY
const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];
  
  const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
  
  console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
  console.log(kvArray);
  // [
  //   { key: 1, value: 10 },
  //   { key: 2, value: 20 },
  //   { key: 3, value: 30 }
  // ]

//-------------------------------------------------------------------------------
// SIDE EFFECTUL MAPPING
const cart = [5, 15, 25];
let total = 0;
const withTax = cart.map((cost) => {
  total += cost;
  return cost * 1.2;
});
console.log(withTax); // [6, 18, 30]
console.log(total); // 45


//-------------------------------------------------------------------------------
// ARRAY reduce()
const array2 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array2.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

//-------------------------------------------------------------------------------
//RUNNING PROMOSES IN SEQUENCE
// Compare this with pipe: fn(acc) is changed to acc.then(fn),
// and initialValue is ensured to be a promise
const asyncPipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => acc.then(fn), Promise.resolve(initialValue));

// Building blocks to use for composition
const p1 = async (a) => a * 5;
const p2 = async (a) => a * 2;
// The composed functions can also return non-promises, because the values are
// all eventually wrapped in promises
const f3 = (a) => a * 3;
const p4 = async (a) => a * 4;

asyncPipe(p1, p2, f3, p4)(10).then(console.log); // 1200


//-------------------------------------------------------------------------------
//CHECK YOUR UNDERSTANDING 
let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];
// ANSWER 
let namesB = names.filter(name => name.charAt(0) === 'B');
console.log(namesB);

//-------------------------------------------------------------------------------
// map()
let nameLengths = names.map((name) => name.length);

//-------------------------------------------------------------------------------
// reduce()
names.reduce((total, name) => total + name.length, 0) / names.length;
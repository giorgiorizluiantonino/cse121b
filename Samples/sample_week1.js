var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 2

// sample 2 
console.log("");

let y = 1;

if (y === 1) {
  let y = 2;

  console.log(y);
  // Expected output: 2
}

console.log(y);
// Expected output: 1

console.log("");

const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
  // Expected output: TypeError: invalid assignment to const 'number'
  // (Note: the exact output may be browser-dependent)
}

console.log(number);
// Expected output: 42

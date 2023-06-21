if (true) {
  var a = 120;
  let b = 100;
}

function scope() {
  var c = 100;
  let d = 200;

  return c + d;
}

console.log(a);
// console.log(b); - this will not work

// console.log(c);  - this will not work
// console.log(d);  - this will not work
console.log(scope());

/**
 * let and const are local to the block in which they are defined but, var is local only to the function defined elsewhere it
 * will be on the global scope
 */

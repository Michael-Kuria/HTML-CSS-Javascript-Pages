/**
 * Array destructuring
 */
const arr = [1, 2, 3, 4, 6];

let [first, second] = arr;

console.log(first + " " + second);

/**
 * Object destructuring
 */
const obj = {
  name: "Michael",
  age: 26,
  height: 1.8,
  year: 2020,
};

let { age, name } = obj;

console.log(age + " " + name);

/*
  - Hoisting allows us to use a variable/function before it has been declared.
  - Hoisting does not work for variables and constants defined using "let" and "const".
*/
//age = 20;
//console.log(age);
//let age;

/*
  - "Fat arrow" function keeps its context. With Fat arrow, you don't need to bind the context using
    call, bind and apply.
*/
const fn = () => console.log(this);
function fn2() {
  console.log(this);
}
// let button = document.querySelector('button');
// button.addEventListener('click', fn2);

let x = 2;
function isEqual(number, compare = number, test = x) {
  console.log(number, compare, test);
  return number === compare;
}

console.log(isEqual(100));


/* Rest operator */

function sum(...items) {
  let result = 0;

  for(let i = 0; i < items.length; i++) {
    result += items[i];
  }

  console.log(result);
}

sum(1,2,3,4,5);

// Spread operator is the opposite of rest operator

let numbers = [1,2,3,4,5,6];
console.log(...numbers);
console.log(Math.max(...numbers));


// Destructuring arrays
let otherNumbers = [1,2,3, 4, 5, 6];

let [a,b, ...c] = otherNumbers;

console.log(a, b, c);

let d = 20;
let e = 10;
[d, e] = [e, d];
console.log(d, e);

let nums = [1,2,3,4,5];
let [y, , z] = nums;
console.log(y, z);

// Destructuring objects

let obj = {
  name: 'Ashish',
  age: 20
};

let { name : person, age } = obj;
console.log(person, age);


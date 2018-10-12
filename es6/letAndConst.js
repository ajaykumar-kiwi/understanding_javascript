/*
  - "let" allows us to have block level scoping in Javascript, which was not available with es5. Now
    Javascript has 3 scopes:
    1. Global scope
    2. Functional scope
    3. Block level scope
  - Variables defined using "let" can not be accessed outside its block.
  - "let" can be used as "var", important difference is the block level scope.
*/

if(true) {
  let age = 20;
}
//console.log(age); // Reference error : age is not defined

/*
  - "const" allows us to have constants in javascript. Once we defined a constant using "const"
    it can not be changed.
  - we can update the items of an array or object created using "const" because we are not changing
    the reference. We can never assign a new value to constants.
*/
const NAME = 'Ashish';
//NAME = "jack"; // TypeError: Assignment to a constant variable

const ARR = [1,2,3,4]
ARR.push(5);

console.log(ARR);

const OBJ = {};

OBJ.a = 1;

console.log(OBJ);

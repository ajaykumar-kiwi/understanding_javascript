/*
  - Iterable objects are those which can be iterated and have Symbol.Iterator in prototype.
  - All of these are iterables:
    - Sets
    - Weaksets
    - Maps
    - WeakMaps
  - Symbol iterator allows you to use "for-of" loop.
  - If we try to iterate object with "for-of", it will throw an error sayinh "Symbol.iterator"
    is not defined.
  - We can use for-in for objects.
  - Generators hold the state of the object.
  - Generators does not produce all values in advance like arrays. It generates values using
    yield when we call next(). It pauses and resumes on next() call.
  - return something from generators stops the generators.

*/
let mySet = new Set([1,2,3,3,3,3,4,5,5]);

for(let val of mySet) {
  console.log(val);
}

let myArray = [1,2,3,4,5];
let iterator = myArray[Symbol.iterator]();
console.log(iterator.next());

function *generator() {
  yield 1;
  yield 2;
  yield* anotherGenerator();
  yield 4;
  yield 5;
  yield 6;
}

function *anotherGenerator() {
  yield 3;
}

let myIterator = generator();
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());


function *infiniteMaker() {
  let i = 0;
  while(true) {
    yield i;
    i++;
  }
}

let a = infiniteMaker();
console.log(a.next());
console.log(a.next());
console.log(a.next());

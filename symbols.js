/*
  - A symbol is unique and immutable datatype and may be used as an identifier to the
    object properties.
  - Property defined using key as symbol does not overwrite the exisiting property if any.
  - Once a symbol has been used as a key, It can not be overwritten.
  - Symbols can be used to add metadata to the object
*/

let sym = Symbol('my test');
console.log(sym.toString(), typeof sym);
let obj = {};

obj[sym] = 'secret';
console.log(obj);
console.log(obj[sym]);

let obj2 = {
  [sym] : 123,
  name: 'Ashish'
}
console.log(obj2);

for(let i in obj2) {
  console.log(obj2[i])
}

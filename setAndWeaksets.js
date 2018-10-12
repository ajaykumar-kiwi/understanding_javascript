/*
- Sets are reference data types
- They allow you to store unique value of any types. You can not have duplicate values inside
  a set.
- Sets are nothing but a unique list.
- For sets, you have to use constructor as sets don't have literals.
- You cannot acess items of set, the way you do with array.
- In set you can pass only iterable arguments like array.

*/

const arr = []; // An array literal
arr[0] = 1; // Setting value in array

const mySet = new Set(); // Creating sets
mySet.add('a');
mySet.add('b');
mySet.add('c').add('d').clear();
console.log(mySet);

const newArr = [1,2,3];
const newSet = new Set(newArr);

for(let val of newSet) {
  console.log(val);
}
console.log(newSet);


const arr2 = [1,2, 2,3, 3,4, 4, 4, 4,5];
const newSet2 = [...new Set(arr2)];
console.log(newSet2);

/*
 - Weakset can only have object as its value, no primitive values are allowed.
 - Weakset are not iterable
*/

const ws = new WeakSet([{a: 1}, {b: 2}]);
// ws.add(1); --- Gives error
ws.add({a: 1});
console.log(ws);

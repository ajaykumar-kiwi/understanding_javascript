/*
 - Map allows you to map arbitary values to other values.
 - You can use object as keys.
 - In map,you can store only unique keys.
 - Maps are iterable and we can use for-of loop with it.
 - Once you define map's key, it holds it in the memory and does not let it garbage collected,
   even if the original key is removed.
*/
const a = {};
const b = {
  num: 1
};

const map = new Map();
map.set(a, 'a').set(b, 'b').set(a, 'c');
//map.delete(b);

for(let [key, value] of map) {
  console.log(key, value);
}


//console.log(map);

const ary = [...map];
//console.log(ary);

{
  let x = {
    a: [1,2]
  };

  var map1 = new Map();
  map1.set(x, 'x')
}
console.log(map1); // x will not be garbage collected even after using outside the block

{
  let y = {
    a: [1,2]
  }

  var map2 = new WeakMap();
  map2.set(y, 'y');
}
console.log(map2); // x will be garbage collected with weak maps


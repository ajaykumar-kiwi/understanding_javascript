/*
  Comparison between forEach and forIn:
    - Performance: According to JsPerf : forEach is little slower than for loop.
    - Usability: There is no way we can break/return from the callback in case of forEach loop.
    - Readability: Using for loop makes code more readable than having forEach in code.
    - Browser compatibility: forEach is Not supported in IE < 9 So that introduces some shim in our code.
    - forEach is a method on the Array prototype. It iterates through each element of an array and passes
      it to a callback function.So basically, forEach is a shorthand method for the use-case
      "pass each element of an array to a  function". Here is a common example where I think Array.forEach is quite useful, compared to a for loop
    - In a forEach loop you don't control the way you iterate over the array. The classic for loop allows you to choose the iteration algorithm as you want (i++; i--; i+=2*i, etc).
    - However, a forEach loop is much easier to use - you don't need to mess with all the i counting,
      finding the array[i] object -- JS does it for you.
    - A for loop repeats until a specified condition evaluates to false whereas the forEach()
      method executes a provided function once for each array element.
    -
*/

var myArray = [1,2,3,4];

myArray.forEach(function(value) {
  if(value === 2)
    return;
  console.log(value);
});

for (var i = 0; i < myArray.length; i++) {
  if(myArray[i] === 2)
    return;
  console.log(myArray[i]);
}

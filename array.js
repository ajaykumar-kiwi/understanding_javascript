// Create new array by new Array(10): It will create an array with 10 empty items.
// Index of array could only be positive integer

// You can insert more than one element at a time
var family = ['John', 'Jack', 'Mira'];

family.push('Joseph', 'Jake');

//

// To insert element as the front of array use unshift
family.unshift('Johnny', 'Joe', 'Daniel');

// You can check the length of array by array.length
// if you will set the value of length to smaller than actual length.. javascript will get rid of all
// extra items
//

family.length = 3;
// If you set length to larger than actual length, you will have undefined items in the array
family.length = 20;

// To get index of some element in array, use array.indexOf
family.indexOf('Johnny');

// indexOf is case sensitive
[{a: 1}, {b: 2}].indexOf({b : 2}) // it will return -1 as though these object looks similar and have
                                  // samme properties but they are two different instance
var a = {a: 1}, b = {b: 2}
[a, b].indexOf(b); // will return 1

// You can pass second parameter to indexOf and javascript will start searching from that index
family.indexOf(2, 2);

var items = [1,2,3,4,5,6,7,8,9,10];

// To slice an array user array.slice. It will take one parameter from where you want to slice
// It will start slicing the array from the index you passed

items.slice(3); // ===> [4,5 ..... 10]

// If you pass second parameter to slice.. it will slice to that index in the array
items.slice(3,7); // ====> will return [4,5,6,7,8]

// slice never changes original array

// you can also use splice to splice the array
items.splice(2) // ==> will return [3,... 10]
// First parameter to splice tell from where to remove the elements
// It will remove the items from actual array
// Splice also takes second paramter, it will tell how many elements will be removed from that index
[1,2,3,4,5,6,7,8,9].splice(3, 4); // =>>
[1,2,3,4,5,6,7,8,9].splice(3,4,10,11,12,13) // => will remove 2 elements and add other elements to the array

Question: What is functional programming ?
Answer: Functional programming a programming paradigm(mindset) for writing programs which says use pure functions.

- Pure function: A pure function is a function which depends only on its input and doesn't look at anything else from the outside world except the argument you pass to it.. and it only returns its output and it does not have any other affect to the outside world.. It just return its return value.
  - Every pure function should return something.
  - It should always return same value with same input.

  // Impure
  var name = "India";
  function greet() {
    console.log('Hello' + name + '!!!'); // Writing to console is also a violation or side effect.
  }
  greet() ===> Hello India!!!
  name = "America";
  greet() ===> Hello America!!!

  // Pure
  function greet(name) {
    return 'Hello '+ name + '!!';
  }
  greet('India');
  greet('America');

  - Pure functions are more safe and predictable, easier to test/debug.

- In functional programming, do everything with functions.
- Avoid side effects.
- Avoid mutability
- Don't loop ... use map, reduce, filter or recursion
- use higher order functions: function with functions as input/output

- In functional programming, data flow through functions. Output becomes input and input becomes output.
- Use functional programming libraries like : Ramda, lodash, Mori


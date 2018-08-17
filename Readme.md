Object oriented javascript

- Four building blocks of object oriented programming:
  1. Encapsualtion : Group related variable and function together to reduce complexity and increase reusability.
  2. Abstraction : Hide details and complexity and show only essentials and also isolates the impact of change in the code.
  3. Inheritance : Eliminate redundant code.
  4. Polymorphism : Remove ugly switch cases.

- If an object has behaviour, i.e. more than one methods with it, We should use factory or constructor to create that object rather than object literal.

- Value type vs reference type
  - Value type: Are copied by theirs value
    1. Number
    2. String
    3. Boolean
    4. null
    5. Undefined
    6. Symbol

  - Reference type: Are copied by their reference
    1. Object
    2. Function
    3. Array

  - Prototype of one object is the parent of another object.
  - Every object in javascript has prototype / Parent except the root object.
  - There are two types of inheritance:
    1. Classical
    2. Prototypical

  - Every javascript object has a prototype property, which makes inheritance possible in javascript.
  - The prototype property of an object is where we put methods and properties which we want other objects to inherit.
  - The constructor's prototype property is not the prototype property of the constructor itself, it's the prototype of all
    instances that are created through it.
  - When a certain method or property is called.. the search starts in the object itself, and if cannot be found, the search       moves to the object prototype. This continues until the method is found ::::: Prototype chain.
  - 'new' operator does following:
    - creates an empty object
    - Assign newly created object to this
    - return that object after assigning methods and properties to it.



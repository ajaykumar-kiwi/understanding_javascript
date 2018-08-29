/*
  - Ultimate objective of object oriented programming is to create objects using constructor.
  - In other object oriented programming languages like java, you have classes and classes have constructor
    which basically helps you set the  initial properties of the object you create. But in javascript you
    don't have classes and you create constructor directly. In ES6 class keyword has been introduced but
    they are still doing the same thing behind the scenes.
  - The job of the constructor is to set the initial properties of the object.
*/

 // Example of constructor:
let Car = function(color) {
  if(!new.target) throw 'Car() must be called with new';
  this.color = color;
}

let redCar = new Car('red');
let blueCar = new Car('blue');
// let yellowCar = Car('yellow'); /// Returns undefined and add color property to window object
console.log(redCar);
console.log(blueCar);

// Compare to the regular function, constructor has a new keyword in front of it while calling
// Prefer having the first letter capital while creating constructor functions.
// Every object has a __proto__ property inside it. __proto__ is the creator of the object.
// When you call a constructor without the new keyword, js looks it as a normal function assign the properties
// and methods to the window object and return undefined.

// All properties created by constructor are public properties. It means that you can access all the properties
console.log(redCar.color);

// Creating private properties
let AnotherCar = function(_color) {
  this.setColor = function() {
    _color = color;
  }
  this.getColor = function() {
    return _color;
  }
}

let myCar = new AnotherCar('red');
myCar.color // Will return undefined
myCar.getColor() // will return red

// The best way to set the methods of the constructor is not directly in the constructor, instead you
// should use prototype to add the property.
// Every constructor has a property prototype and you can add methods and properties to it.

let Animal = function(type) {
  this.type = type;
  this.getType = function() { // We can add methods to constructor like this
    return this.type;
  }
}

let cat = new Animal('Mammal'); // This cat object will have getType() methods as a part of it.

Animal.prototype.speak = function(sound) {
  console.log('WOOOOSSHH!!!');
}
console.log(cat);
console.log(cat.speak());

// When some method or property of an object is accessed, it looks in its own property to see if it
// exists in its own property. If it not find it there, it will look up to its creator(__proto__) and execute it.
// If property is not in __proto__, it will not stop and will keep going up the ladder, this is called
// prototype chain.
// All objects are created using master object -> Object.


// If we want to overwrite the root object method, we can do like:
  Object.prototype.toString = function() {
    return `Color: ${this.color}`;
  }

  console.log(redCar.toString());

  let something = {
    color: 'I dont have a color'
  };
  console.log(something.toString());

/*
  Object.create() :
    - It makes the prototype inheritance possible in javascript
    - Its takes two arguments:
      1. prototypeObject
      2. propertyObject?: Optional

    - Main purpose of Object.create is to extend constructors
*/
const myObject = Object.create(Object.prototype);
console.log(myObject);

const noProto = Object.create(null); // Creates an object without property
console.log(noProto);

const Human = function(name) {
  this.name = name;
}

Human.prototype.getName = function() {
  return this.name;
}

const Employee = function() {

}

Employee.prototype = Object.create(Human.prototype);

const dev = new Employee();
console.log(dev instanceof Human); // Returns true
console.log(dev instanceof Employee); // Returns true
console.log(dev instanceof Object); // Returns true

console.log(Human.prototype.isPrototypeOf(dev));
console.log(Employee.prototype.isPrototypeOf(dev));
console.log(Object.prototype.isPrototypeOf(dev));

// Always add methods to one object's prototype after setting its property because setting the prototype
// will replace whole prototype methods and properties added prior to it.

const Person = function() {

}
Person.prototype.print = function() {
  console.log('I am a person');
}

const Player = function () {

}

Player.prototype = Object.create(Person.prototype);
Player.prototype.print = function() {
  console.log('I am a player');
}

const Cricketer = function() {

}
Cricketer.prototype = Object.create(Player.prototype);
Cricketer.prototype.print = function() {
  console.log('I am a cricketer');
}

const john = new Person();
const jack = new Player();
const joe = new Cricketer();

john.print();
jack.print();
joe.print();
// If print method is deleted form Cricketer's prototype it will look to player prototype of Player
// constructor and so on.

const Mammal = function(legs) {
  this.legs = legs;
}
Mammal.prototype = {
  walk() {
    return 'walking';
  },
  sleep() {
    return 'sleeping';
  }
};

const Bat = function(legs, isVegetarian) {
  Mammal.call(this, legs);
  this.isVegetarian = isVegetarian;
}
Bat.prototype = Object.create(Mammal.prototype);
Bat.prototype.constructor = Bat;
Bat.prototype.fly = function() {
  return 'flying';
}

const myBat  = new Bat(2, true);
myBat.sleep();
myBat.walk();
myBat.fly();

/*
  Object.setPrototypeOf method:
    - It takes one object methods and make it available to other object.
    - It takes two parameter:
      1. destinationObject
      2. sourceObject
*/

let toyota = {
  drive() {
    return 'driving toyota';
  }
};

let camry = {
  wifi() {
    return 'using wifi';
  },
  drive() {
    return `${super.drive()}`;
  }
};

Object.setPrototypeOf(camry, toyota);

camry.drive() // ==> driving toyota

// Also we can copy the prototype using __proto__, but it is not recommended
camry.__proto__ = toyota;

// Class in javascript is a syntactical sugar for constructor
// typeof Class ===>>> function
class Car {
  drive() {
    console.log('driving');
  }
  constructor(color) {
    this.color = color;
  }
}
const redCar = new Car('red');
console.log(redCar);

class Mammal {
  constructor(legs, name="John doe") {
    this.legs = legs;
    this.name = name;
    this.warmBlooded = true;
  }
  walk() {
    return `${this.name} is walking`;
  }
}

class Bat extends Mammal {
  constructor(legs, name, eatsMeat) {
    super(legs, name);
    this.eatsMeat = eatsMeat;
  }
  fly() {
    return `${this.name} is flying`;
  }
  walk() {
    let holding = this.eatsMeat ? 'bug' : 'carrot';

    return `${super.walk()} with a ${holding}`;
  }
}

let fruitBat = new Bat(4, 'John', false);
console.log(fruitBat.walk());

class AnotherMamal {
  constructor(a,b,c,d,e) {
    Object.assign(this, {a,b,c,d,e});
  }
}

class AnotherBat extends AnotherMamal{
  constructor(f, ...args) {
    super(...args);
    this.f = f;
  }
}

const newBat = new AnotherBat('f', 'a', 'b', 'c', 'd', 'e');
console.log(newBat);

// constructor is not mandatory in base class.. If you don't define constructor in base class it will create
// an empty constructor.
// But is sub-classes, you need to have constructor as you have to call super() from sub-class.

// Instance methods are called from the instance of the class.
// Static methods:
//  - You put static in front of method to create it as static method.
//  - You call static method from Car class directly, no need to create instance of that class.
//  - static methods goes inside the class not inside the prototype
//  - static methods doesn't use 'this' to access the properties like instance methods
//  - static methods are used for utility methods
class AnotherCar {
  constructor(color, price) {
    Object.assign(this, {color, price});
  }
  static doSomething() {
    console.log(this);
  }
  static comparePrice(car1, car2) {
    console.log(car1);
    return Math.abs(car1.price - car2.price);
  }
  sayHello() {
    console.log(this);
  }
  getColor() {
    return this.color;
  }
}
AnotherCar.doSomething();
const obj = new AnotherCar();
obj.sayHello();


const yellowCar = new AnotherCar('red', 120);
const blackCar = new AnotherCar('black', 200);

console.log(AnotherCar.comparePrice(blackCar, yellowCar));


class NewCar {
  constructor(price) {
    this.price = price;
  }
  static sellCar(car) {
    return `selling for ${car.price}`;
  }
}

class Toyoto extends NewCar {
  constructor(price) {
    super(price);
  }
  static sellCar(car) {
    return `Toyota ${super.sellCar(car)}`;
  }
}

const camry = new Toyoto(100);
console.log(Toyoto.sellCar(camry));

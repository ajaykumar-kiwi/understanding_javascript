// function Person(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }
// Person.prototype.calculateAge = function() {
//   console.log(2018 - this.yearOfBirth);
// }
// Person.prototype.lastName = "Smith";
// Person.prototype.describeMe = function() {
//   console.log(`My name is ${this.name}, Dob is ${this.yearOfBirth}, Job is ${this.job}`);
// }

// const john = new Person('John', '1989', 'Software engineer');
// const jane = new Person('Jane', '1920', 'designer');
// const michael = new Person('Michael', '1921', 'developer');
// const milly = new Person('Milly', '1913', 'tester');

// const personProto = {
//   calculateAge: function() {
//     console.log(2018 - this.yearOfBirth);
//   }
// };

// const john = Object.create(personProto);


// const arr = [1980,1999,2000,2001,2015];

// function calcArr(arr, fn) {
//   const arrRes = [];
//   for(var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calculateAge(yearOfBirth) {
//   return 2018 - yearOfBirth;
// }

// function isFullAge(el) {
//   return el >= 18;
// }

// function maxHeartRate(el) {
//   if(el >= 18 && el <= 81) {
//     return Math.round(206.9 - (0.67 * el));
//   } else {
//     return -1;
//   }

// }

// const ages = calcArr(arr, calculateAge);
// const modifiedArray = calcArr(ages, maxHeartRate);

// function retirement(retirementAge) {
//   var  a = ' years left for retirement';
//   return function (yearOfBirth) {
//     var age = 2018 - yearOfBirth;
//     return function() {
//       console.log(retirementAge, age, a);
//     }
//   }
// }

const newConsole = (function(obj){
  const a = {
    log: function() {
      obj.log('hello', ...arguments);
    }
  }

  return Object.assign({}, obj, a);
})(console);


console = newConsole;

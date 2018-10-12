/*
  - Promises were introduced by ES6.
  - Promises are a useful object helper to work with asynchronous tasks. They give us a promise that
    they will give us back some data sometime in the future, the data is not there yet and we know
    that we'll get some data back and can continue with our other work. We specify a function on
    our promise to do something with the data whenever we get it back.
  - They allows us to escape the callback hell.
*/

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Done!!!');
  }, 2000);
});

promise.then(data => {
  console.log(data);
}, error => {
  console.log(error);
});

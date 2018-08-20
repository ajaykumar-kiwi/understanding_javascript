/*
- Javascript allows asynchronous functions to run in the background.
- We pass callbacks that run once the function has finished its work
- Move on immediately.. non blocking
- Settimeout, httprequest lives in WEB APIs. settimeout keep sitting untill timer has been completed and callback is pushed to message queue
  Event loop keeps checking for values in message queue.. and it moves the callback function to execution context once the execution
  stack is empty.

- Promise is an object that keeps track about whether certain event has happened already or not..
- Promise also determines what happen next after the event has happened.
- It implements the concept of a future value that we're expecting.
- Pending ---->  Settled / Resolved -----> fulfilled or rejected

- Async await was created to consume promises
- Async function runs in the background
- Ajax: Asynchronous javascript and xml. It allows us to communicate asynchronously with remote server.
- Api : Application programming interface.

Asnc Await:
  - It is a new way to write asynchronous code. Previous options were callback and promises.
  - Async/await is actually built on top of promises. It cannot be used with plain callbacks or
    node callbacks.
  - Async/await is like promises, non blocking.
  - It makes asynchronous code look and behave like synchronous code. This is where all the power lies.
*/

// Assuming a function getJSON that returns that promise and that promise resolves with some JSON object.
// We want to call it and log that JSON and then return "done".
// With plain promise
function getJson() {
  return fetch('https://jsonplaceholder.typicode.com/posts');
}
const makeRequest = () =>
  getJson()
    .then(data => {
      console.log(data);
      return "Done";
    })

makeRequest();

// With async await
const makeRequest2 = async () => {
  console.log(await getJson());
  return "Done";
}

// Our function has the keyword async before it. The await keyword can only be used inside the functions
// defined with async. Any async function returns a promise implicitly and the resolved value of the promise
// will be whatever you return from the function.
// await getJson() means that console.log will wait until getJson() promise resolves and print its value.

// Benefits of using Async/await
// - Concise and clean
// - Lesser code, no need to write .then
// - Error handling : Async/await makes it finally possible to handle both async and sync errors with the
//   same construct, good old try catch.
// In the example below with promises, the try/catch will not handle if JSON.parse fails because
// it’s happening inside a promise. We need to call .catch on the promise and duplicate our error
// handling code, which will (hopefully) be more sophisticated than console.log
// in your production ready code.
const makeRequest3 = () => {
  try {
    getJson()
      .then(result => {
        console.log(result);
        const data = JSON.parse(result.json());
        console.log(data);
      })
      .catch(error => console.log(error));
  }
  catch (err){
    console.log(err);
  }
}

makeRequest3();

// With async/await, catch block can also handles asynchronous errors
const makeRequest4 = async () => {
  try {
    const data = JSON.parse(await getJson());
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// Code below, when written using async/await becomes more clear and easy to understand
const makeRequest5 = () => {
  return getJSON()
    .then(data => {
      if (data.needsAnotherRequest) {
        return makeAnotherRequest(data)
          .then(moreData => {
            console.log(moreData)
            return moreData
          })
      } else {
        console.log(data)
        return data
      }
    })
}

// Using async/await
const makeRequest6 = async () => {
  const data = await getJSON()
  if (data.needsAnotherRequest) {
    const moreData = await makeAnotherRequest(data);
    console.log(moreData)
    return moreData
  } else {
    console.log(data)
    return data
  }
}

// When dealing with multiple promises
const makeRequest7 = async () => {
  const value1 = await promise1()
  const value2 = await promise2(value1)
  return promise3(value1, value2)
}

// Async await are too easy to debug.. They behaves just like synchronous code while debugging in the console.


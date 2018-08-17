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
*/

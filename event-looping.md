- DOM, ajax, setTimout and other async stuff is handled by WebAPIs not by v8 engine
- Javascript is a single threaded language and performs one thing at a time.
- Callstack is a data structure which basically records where in the program we are. When we enter into a function, we push something in to stack and while returning the function we pop up from the stack.
- Javascript runtime can do one thing at a time but browser gives us few webapis which help working concurrently on other stuff.
- Every setTimeout or async code is pushed to the webapis and timer is kicked off. After async request is completed, it pushes the callback to the task queue.
- Event loop's job is to look at the task queue and stack.. If the stack is empty, event loop takes first element from the queue and push it to the stack and javascript runs the callback in stack.
- When setTimeout is called with 0, webapi pushes the callback to the queue immediately but the event loop wait for stack to be clear and once stack is clear, it pushes the callback to the stack.




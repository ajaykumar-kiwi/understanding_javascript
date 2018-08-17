// Generator is a function which can be entried and exited multiple times....
// With generator we can execute some code... return .. and get back to the same place we left.
function* shopping() {
  // Stuff on the sidewalk

  // walking down the sidewalk


  // go in to the store with cash

  const stuffFromStore = yield 'cash';

  return stuffFromStore;

  // walking back home
}

// Stuff in the store

const gen = shopping();

console.log(gen.next());
console.log(gen.next('asdad'));

// Decorating: It literally means to look more attractive by adding extra items.
// https://jsfiddle.net/vshrias/rvdms4u1/4/

let lipstick = function(target) {
  target.lips = 'pink';
}

let earrings = function(flag) {
  return function(target) {
    target.hasEarring = flag;
  }
}

@earrings(false)
@lipstick
class Girl {

}

console.log(`Her lips are ${Girl.lips}, ${Girl.hasEarring}`);


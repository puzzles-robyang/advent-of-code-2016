/*
--- Day 1: No Time for a Taxicab ---

Santa's sleigh uses a very high-precision clock to guide its movements, and the clock's oscillator is regulated by stars. Unfortunately, the stars have been stolen... by the Easter Bunny. To save Christmas, Santa needs you to retrieve all fifty stars by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

You're airdropped near Easter Bunny Headquarters in a city somewhere. "Near", unfortunately, is as close as you can get - the instructions on the Easter Bunny Recruiting Document the Elves intercepted start here, and nobody had time to work them out further.

The Document indicates that you should start at the given coordinates (where you just landed) and face North. Then, follow the provided sequence: either turn left (L) or right (R) 90 degrees, then walk forward the given number of blocks, ending at a new intersection.

There's no time to follow such ridiculous instructions on foot, though, so you take a moment and work out the destination. Given that you can only walk on the street grid of the city, how far is the shortest path to the destination?

For example:

Following R2, L3 leaves you 2 blocks East and 3 blocks North, or 5 blocks away.
R2, R2, R2 leaves you 2 blocks due South of your starting position, which is 2 blocks away.
R5, L5, R5, R3 leaves you 12 blocks away.
How many blocks away is Easter Bunny HQ?
*/

var directions = 'R2, L1, R2, R1, R1, L3, R3, L5, L5, L2, L1, R4, R1, R3, L5, L5, R3, L4, L4, R5, R4, R3, L1, L2, R5, R4, L2, R1, R4, R4, L2, L1, L1, R190, R3, L4, R52, R5, R3, L5, R3, R2, R1, L5, L5, L4, R2, L3, R3, L1, L3, R5, L3, L4, R3, R77, R3, L2, R189, R4, R2, L2, R2, L1, R5, R4, R4, R2, L2, L2, L5, L1, R1, R2, L3, L4, L5, R1, L1, L2, L2, R2, L3, R3, L4, L1, L5, L4, L4, R3, R5, L2, R4, R5, R3, L2, L2, L4, L2, R2, L5, L4, R3, R1, L2, R2, R4, L1, L4, L4, L2, R2, L4, L1, L1, R4, L1, L3, L2, L2, L5, R5, R2, R5, L1, L5, R2, R4, R4, L2, R5, L5, R5, R5, L4, R2, R1, R1, R3, L3, L3, L4, L3, L2, L2, L2, R2, L1, L3, R2, R5, R5, L4, R3, L3, L4, R2, L5, R5';

var test1 = 'R2, L3'; // 2 blocks East and 3 blocks North, or 5 blocks away.
var test2 = 'R2, R2, R2'; // 2 blocks due South of your starting position, which is 2 blocks away.
var test3 = 'R5, L5, R5, R3'; // 12 blocks away.
var test4 = 'R1, L1, L1, L1, L1, L1, L1, L1, R1, R1, R1, R1, R1';

console.log("Passes test 1", run(test1) === 5);
console.log("Passes test 2", run(test2) === 2);
console.log("Passes test 3", run(test3) === 12);
console.log("Main test result:", run(directions));

console.log("Test 1", run(test1));
console.log("Test 2", run(test2));
console.log("Test 3", run(test3));
console.log("Test 4", run(test4));

function run (directions) {
  var parsed = directions.split(', ').map(parseDirections);
  var direction = 0;
  var vertDisplaced = 0;
  var horDisplaced = 0;
  for (var i = 0; i < parsed.length; i++) {
    direction = currentDirection(direction + parsed[i].turn);
    if (direction === 0) {
      vertDisplaced += parsed[i].blocks;
    } else if (direction === 1 || direction === -3) {
      horDisplaced += parsed[i].blocks;
    } else if (direction === 2 || direction === -2) {
      vertDisplaced -= parsed[i].blocks;
    } else if (direction === 3 || direction === -1) {
      horDisplaced -= parsed[i].blocks;
    }
  }

  return Math.abs(vertDisplaced) + Math.abs(horDisplaced);
}

function parseDirections (path) {
  return {
    'turn': path.match(/[LR]/)[0] === 'L' ? -1: 1,
    'blocks': Number(path.match(/([0-9]+)/)[1])
  };
}

function currentDirection (point) {
  return point === 4 || point === -4 ? 0 : point;
}





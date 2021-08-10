'use strict';

///////////WORKING WITH STRINGS

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); //returns first letter
console.log(plane[1]); //returns second
console.log(plane[2]); //returns third
console.log('B737'[0]);

console.log(airline.length); //returns number of letters in variable airline = 16
console.log('B737'.length); // = 4

//use of .indexOf & slice
console.log(airline.indexOf('r')); // returns the position of first r = 6
console.log(airline.lastIndexOf('r')); // returns the pos of last r = 10
console.log(airline.slice(4)); // extraction starts at position 4 = Air Portugal
console.log(airline.slice(4, 7)); //starts at pos 4 and ends at pos 7 = Air
console.log(airline.slice(0, airline.indexOf(' '))); // =TAP
console.log(airline.slice(-2)); //slices starting from end = al
console.log(airline.slice(1, -1)); // = AP Air Portuga

//other application
const checkSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log(`You seat ${seat} is a middle seat.`);
  else if (s === 'A' || s === 'F')
    console.log(`Your seat ${seat} is at the window side.`);
  else console.log(`Your seat ${seat} is at aisle side.`);
};
checkSeat('11B');
checkSeat('5D');
checkSeat('1E');
checkSeat('23A');
checkSeat('18C');

///////////WORKING WITH STRINGS PART 2
// .toLowerCase, .toUpperCase
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//fix capitalization
const passenger = 'mArIO';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//REPLACE PART OF STRINGS (.replace & .replaceAll)
const price = 'P373.420.044';
const priceD = price.replace('P', '$').replaceAll('.', ',');
console.log(priceD); // = $373,420.00

//startsWith & endsWith
const airplane = 'Airbus A320neo';
if (airplane.startsWith('Air') && airplane.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

///////////WORKING WITH STRINGS PART 3
//split
console.log('a+very+nice+string'.split('+'));

const newName = ['Mr.', 'Chris', 'Evans'.toUpperCase()].join(' ');
console.log(newName);

//capitalize first letter of every name
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith evans');
capitalizeName('robert jackie chan lee');

//Padding
const message = ' Go to gate 23! ';
console.log(message.padStart(25, '+').padEnd(30, '+'));

//another application
const creditCard = function (number) {
  const str = number + ' ';
  const last = str.slice(-5);
  return last.padStart(str.length, '*');
};
console.log(creditCard(348798330329)); //********0329
console.log(creditCard('761290034762')); //********4762

//repeat text
const messageNotice = 'Bad weather... All Departures Delayed...';
console.log(messageNotice.repeat(5)); //repeats messageNotice 5 times

const planesWaiting = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
planesWaiting(5);
planesWaiting(12);
planesWaiting(3);

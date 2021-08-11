'use strict';
/*
//DEFAULT PARAMETERS
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1, //instead of short circuiting: (numPassengers = numPassengers || 1)
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', '2');
createBooking('LH123', '5');

//functions accepting 'callback functions'
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//higher order function
const transformer = function (str, fn) {
  console.log(`Original string ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);
*/

/*
//functions returning functions
const greet = function(greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}

const greeterHey = greet('Hey');
greeterHey('Jonas');

greet('Hello')('Jonas');

//convert above to arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Jonas');
*/

//CALL AND APPLY METHODS
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book: function (flightNum, name) {}  *same as below*
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}, name` });
  },
};

lufthansa.book(239, 'Albert Einstein');
lufthansa.book(635, 'Isaac Newton');

console.log(lufthansa);

//lufthansa created new airline called eurowings
//we also want to take bookings for a eurorwings flight
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

//instead of copying the contents of lufthansa.book, we will just store it on another const
const book = lufthansa.book;

//book(23, 'Sarah Williams'); XXXXX-DOESN'T WORK!-XXX
//the 'this' keyword inside lufthansa when used by eurowings will not work because 'this' will point to undefined

//how do we tell javascript when the 'this' keyword should point to lufthansa and when to point at eurowings?
//we use call, apply methods
//call method
book.call(eurowings, 23, 'Sarah Williams'); //THIS WORKS! 'this' keyword has been set to point to eurowings

book.call(lufthansa, 777, 'Nadine Harper'); // 'this' keyword has been set to point to lufthansa

//adding another airline
const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Clark Kent');

//apply method - same but takes array of arguments
const flightData = [583, 'Bruce Wayne'];
book.apply(swiss, flightData);
book.call(swiss, ...flightData);

//BIND METHOD - binds this keyword to a new function

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steve Harvey'); //WORKS
bookLX(23, 'Steve Harvey'); //WORKS
bookLH(23, 'Steve Harvey'); //WORKS

//bind to a more specific element
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Martha Cooper');

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial application (preset)
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

//IMMEDIATELY INVOKED FUNCTIONS (ONE TIME EXECUTION)
//IIFE will run only once

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

(function () {
  console.log('This wil never run again');
})();

//IIFE arrow function
(() => console.log('This will also never run again'))();

//CLOSURES
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // = 46

h();
f(); // = 1554

//another example
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000); //there are 1000 milliseconds in a second

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);

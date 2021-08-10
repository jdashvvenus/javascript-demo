'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

/*
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//renaming objects
const { starterMenu: starters = [] } = restaurant;
console.log(starters);

//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*
//receive 2 return values from 1 array
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//switch two variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

//receive 2 return values from 2 different arrays
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(`${starter}, ${mainCourse}`);
*/

/*
//nested arrays (arrray within an array)
const nested = [2, 4, [5, 6]];
const [k, , [l, m]] = nested;
console.log(k, l, m);

//destructuring arrays
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); //will not work without enclosing in parentheses
console.log(a, b);
*/

/*
//SPREAD OPERATOR - unoacks elements in an array
const arr = [7, 8, 9];
const newArr = [1, 2, arr[0], arr[1], arr[2]]; //LONG WAY
console.log(newArr);

const newArr2 = [1, 2, ...arr]; //USE OF SPREAD OPERATOR
console.log(newArr2);

const newMenu = [...restaurant.mainMenu, 'Steak', 'Carbonara'];
console.log(newMenu);

//real world example of spread operator
const ingredients = [
  prompt("Let's make pasta! Ingredient1?"),
  prompt("Let's make pasta! Ingredient2?"),
  prompt("Let's make pasta! Ingredient3?"),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); //long cut

restaurant.orderPasta(...ingredients); //using spread operator

//JOIN 2 ARRAYS
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//ITERABLES
const str = 'everyday';
const letters = [...str, ' ', 'a.'];
console.log(...str);
*/

/*
//DIFFERENCE OF SPREAD AND REST - unpacks elements in an array
//spread - where triple dot is on right side of '='
const arr = [1, 2, ...[3, 4]];
console.log(arr);
// rest - where triple dot is on the left side of '='
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

//combination of the two
//note: does not show skipped element (doesn't show pasta in this case)
const [foodq, , foodw, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.
*/

/*
//SHORT CIRCUITING && AND ||
//OR
console.log(25 || 'cats'); //if the first value is a truthy value, js will imemdiately return that first value.
console.log(undefined || 'dogs'); //if first value is null, it will return the first next truthy value.

//can be used in replacement for IF ELSE statements where if the first element is non-existent or a falsy value, it wil return the next default truthy element.
//example
const numberOfGuests = restaurant.numGuests || 5;
console.log(numberOfGuests);

//AND
console.log(73 && 'mountains'); //two truthy values will return the last element: mountains
//one falsy value separated by && will return null immediately
*/

/*
//NULLISH COALESCING OPERATOR (??)
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); //>> returns 10
// 0 isa falsy value

// what if we still want it to return 0 guests?
//use nullish coalescing where the only null values will be 'null or undefined'
const guestsC = restaurant.numGuests ?? 10;
console.log(guestsC); //>>returns 0
*/

/*
//FOR OF LOOP - we can still use continue and break here
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
//'for of loop' automatically loop over the entire array and for every iteration will return and log "each element" one by one.
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
// of - returns each element in the array individually to the log. '.entries' makes a new array which contains the index number [0] and the coresponding element [1] in the original array.
*/

/*
//OPTIONAL CHAINING

//using long cut
//where if restaurant contains the object 'openingHour's' and if openingHours also contain object 'friday', it will return the value found at the object 'open'
if (restaurant.openingHours && restaurant.openingHours.fri)
  console.log(restaurant.openingHours.fri.open);

//using optional chaining (?.)
//where if the object before (?.) doesn't exist, will not proceed to the next property and will return undefined.
console.log(restaurant.openingHours?.fri?.open);

//Application of optional chaining, for of loop, adding of new array 'day' to object restaurant.openingHours,and nullish coallescing

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(
    `On ${day}, we open at ${restaurant.openingHours[day]?.open ?? 'closed'}`
  );
  //we enclosed day here with a bracket because openingHours.day will be an error since day isn't an original object under openingHours
  // we used ?? instead of || since on sat we open at 0
}
*/

/*
//DATA STRUCTURES: SETS
console.log(new Set('Mario')); //returns {"M", "a", "r", "i", "o"}

//another example
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet); //Sets group together duplicates

console.log(ordersSet.size); //returns 3
console.log(ordersSet.has('Pizza')); //returns true - ordersSet contains Pizza

console.log(ordersSet.has('Burger')); //returns false where ordersSet does not contain Burger

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet); // adds garlic bread to the set while grouping duplicates

for (const orderList of ordersSet) console.log(orderList); //logs the contents individually

ordersSet.delete('Risotto');
console.log(ordersSet); //deletes Risotto from the set

ordersSet.clear();
console.log(ordersSet); //clears all contents of the set
*/

/*
//DATA STRUCTURES: MAPS
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, POotugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open!')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
*/

/*
//Quiz Application
const question1 = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);
console.log(question1);

console.log(question1.get('question1'));

for (const [key, value] of question1) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);
console.log(question1.get(question1.get('correct') === answer));
*/

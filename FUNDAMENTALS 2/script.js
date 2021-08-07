/*
//STRICT MODE
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive!');

// const interface = 'Audio'
// const private = 534;

//FUNCTIONS
function logger() {
    console.log('What is inside the function can be repeated when you type the name assigned.');
}

//calling, running, invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

// fruitProcessor(5, 0);
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

//FUNCTION DECLARATIONS
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1)

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

//ARROW FUNCTIONS
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

//FUNCTIONS CALLING OTHER FUNCTIONS
const cutFruitPieces = function (fruit) {
    return fruit * 4
};

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
};

console.log(fruitProcessor(2, 3));

//MORE ON FUNCTIONS
const yearNow = 2037
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = (yearNow - birthYear)
    const retirement = 65 - age

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years `
    } else {
        return `${firstName} has already retired.`
    }
}

console.log(yearsUntilRetirement(1980, 'Jonas'));

//ARRAYS

const friends = ['Michael', 'Steven', 'Peter']; //counted as 0, 1, 2, ...
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); //.length is used for counting elements inside the array
console.log(friends[friends.length - 1]); //determine what is placed on which order inside the array

friends[2] = 'Jay'; //change Peter to Jay
console.log(friends);

const firstName = 'Mario'
const character = [firstName, 'Luigi', 2020 - 1800, 'red', friends];
console.log(character)
console.log(character.length);

//MORE EXAMPLE
const calcAge = function (birthYear) {
    return 2037 - birthYear
};
const years2 = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years2[0]);
const age2 = calcAge(years2[1]);
const age3 = calcAge(years2[years2.length - 1]);
console.log(age1, age2, age3);

//BASIC ARRAY OPERATIONS
const friends = ['Michael', 'Steven', 'Peter'];

friends.push('Jay'); //add element to the end of array
console.log(friends);

friends.unshift('John'); //add element to the beginning of array
console.log(friends);

friends.pop(); //remove elements at the end of the array
console.log(friends);

friends.shift(); //remove elements at the beginning of the array
console.log(friends);

console.log(friends.indexOf('Michael')); //shows the position of the element in the array

console.log(friends.includes('Steven')); //shows true if the array contains a particular element
console.log(friends.includes('Bobby')); //shows false if the array doesn't contain the element

if (friends.includes('Peter')) {
    console.log('You have a friend called Peter!')
};

//Introduction to Objects
const jonas = { //curly brace are used for objects
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

//arrays are for order-based elements while objects are for unstructured elements

console.log(jonas)

console.log(jonas.lastName); //dots returns the lastName element
console.log(jonas['lastName']); //brackets does same thing as dots but can be contain expressions

const nameKey = 'Name';
console.log(jonas['first' + nameKey]); //example of an expression placed in a square bracket

const interestedIn = prompt('What do you want to know about Jonas? Choose among firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]); //another example of a square bracket usage
} else {
    console.log('Information unavailable')
};


//FOR LOOP
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

//LOOPING ARRAYS
const jonas = [
    'Jonas',
    'Albedo',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let i = 0; i < jonas.length; i++)
    console.log(jonas[i]);

//another example
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let yr = 0; yr < years.length; yr++) {
    ages.push(2037 - years[yr]);
}
console.log(ages);

//BREAKING AND CONTINUING
console.log('---ONLY STRING---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}
console.log('---BREAK WITH NUMBER---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] == 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}

//LOOPING BACKWARDS
const jonas = [
    'Jonas',
    'Albedo',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

//LOOP IN LOOP
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----Starting Exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}


//WHILE LOOP

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}
*/

//dice example
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('You rolled a 6!');
}
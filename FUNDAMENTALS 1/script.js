/*
let js = 'amazing';
if (js === 'amazing') alert('Javascript is FUN!');
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);

let javascriptIsFun = true;
console.log(javascriptIsFun);
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let isIsland = true;
console.log(typeof isIsland);
let language;
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

let age = 30;
age 31;
const birthYear = 1991;

// basic operators
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x -1 = 100
x--; // x = x -1 = 99
console.log(x);

//comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;


let z, y;
z = y = 25 - 10 - 5;
console.log(z, y);


//strings & template literals
const firstName = 'Juherm';
const job = 'engineer';
const birthYear = 1997;
const year = 2020;

const juherm = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(juherm);

const juhermNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(juhermNew);

console.log(`String with \n\
multiple \n\
lines`);

console.log(`String with
multiple
lines`);


//if else statement
const age = 14

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsleft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsleft} years.`);
}


const birthYear = 1997;
let century;

if (birthYear <= 2000) {
    century = 20
} else {
    century = 21;
} console.log(century);

//Equality Operators
const favourite = Number(prompt("What's your favorite number?"));
console.log(favourite);

if (favourite === 23) {
    console.log('Cool! 23 is a cool number!')
} else if (favourite === 7) {
    console, log('7 is also a cool number!')
} else if (favourite === 9) {
    console.log('9 is also a cool number!')
} else {
    console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');

//Logical Operators
const hasDriversLicense = true //A
const hasGoodVision = true //B
const isTired = true //C

console.log(hasDriversLicense && hasGoodVision); //And
console.log(hasDriversLicense || hasGoodVision); //Or
console.log(!hasDriversLicense); //negateA

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive');
}

//switch statement
const day = 'thursday';

switch (day) {
    case 'monday':
        console.log('go to meeting');
        console.log('code for website');
        break;
    case 'tuesday':
        console.log('play guitar');
        break;
    case 'wednesday':
        console.log('record videos');
        break;
    case 'thursday':
        console.log('do nothing today')
        break;
    case 'friday':
        console.log('feed the cow');
        console.log('clean');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!')
}

//conditional operator
const age = 15;

//method1
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

//method2
const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

//method3
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
*/


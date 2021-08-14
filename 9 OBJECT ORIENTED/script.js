'use strict';

/*
const person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new person('Jonas', 1991);
console.log(jonas); //{firstname: "Jonas", birthYear: 1991}

//What happens when we use new:
// 1. New object {} is created
// 2. function is called, this keyword will be set to this newly created object {}
// 3. New object {} linked prototype
// 4. function is automatically returned

const matilda = new person('Matilda', 2017);
const jack = new person('Jack', 1975);
console.log(matilda, jack); //{firstname: "Matilda", birthYear: 2017} ... and so on

//jonas is now an instance of person
//let's check
console.log(jonas instanceof person); //true

/////STATIC METHODS
person.hey = function () {
  console.log('Hey there!');
};
person.hey();
*/

/*
/////PROTOTYPE
//it's bad practice to place a method (calcAge) in the const person function above so we have to create a prototype.
person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge(); //46
matilda.calcAge(); //20

//inherited properties
//is not an 'own property' of the object
//only those declared directly in the object are own property
person.prototype.species = 'Homo Sapiens'; //species is an inherited property
console.log(jonas.species, matilda.species);

//check is speices is an own property
console.log(jonas.hasOwnProperty('species')); //false

console.log(jonas.__proto__.__proto__);
*/

/*
//class expression
// class personClass {}

//class declaration
class personClass {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new personClass('Jessica', 1996);
console.log(jessica);
jessica.calcAge();
jessica.greet();
*/

/*
/////SETTERS AND GETTERS
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop(); //300
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);

account.latest = 50;
console.log(account.movements);
*/

/*
/////CONSTRUCTOR FUNCTIONS
const person = function (firstName, birthYear, course) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.course = course;
};

person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const student = function (firstName, birthYear, course) {
  person.call(this, firstName, birthYear, course);
};
student.prototype = Object.create(person.prototype);

student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const mike = new student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();
*/

/////EXMAPLE ON CLASS
//placing an '_' befoe an object is a convention indicating that that object shouldn't be accessed/manipulated.
class account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  deposit(val) {
    this._movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }
}
const acc1 = new account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1);
console.log(acc1._pin);

//CHAINING METHODS
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1._movements); //[25-, -140, 300, 500, -35, 25000, -4000]

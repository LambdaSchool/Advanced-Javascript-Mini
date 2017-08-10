/* The four rules for 'this';
* in your own words. explain the four rules for the "this" keyword below.
* 1.  Rule number one means that the this points globally..
* 2. Rule number 2 means any method before the . on an object call is "this"
* 3. I think this means that the this points to a new unique object
* 4. This means that you can use call or apply to change the state of this
* write out a code example of each explanation above
*/

// First Rule
function greeted(name){
  console.log('hello' + this );
  console.log(this);

}
greeted('Ron');
// Second Rule
function Name(options){
this.name=options.name;
const sayName = function(){console.log(this,name);
}
const myName = Name({name: 'Ron' });
// Third Rule
function myName(name) {
    
    this.name = name;
    this.speak = function() {
        console.log(this.name);
        console.log(this);
    }
};


// Fourth Rule * you may want to use your third rule's example to accomplish this
const newName = new Name({
    name: 'joe'
});

newName.call(myName);
// explain closure 
//from what I understand, closure is the ability for a function to grab data outside of its enclosure

function foo () {
  console.log(this); // what does this point to? 
};

const counterFunction = () => {
  // this code is broken. figure out why, and tell us where the closure is when you fix it
  let count = 0;
  const changeCount = (value) => {
    count += value;
  };
  return {
    increment: () => {
      changeCount(1);
    },
    decrement: () => {
      changeCount(-1);
    },
    total: () => {
      return count;
    }
  }
}
};
const counter = counterFunction();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.total());


// create a constructor function called "Car"
  // car takes an options object as its only argument
  // your options object should have "make", "model", "year" properties on it
  // assign these properties you pass in with options to the constructors 'this' object.
  // add a speak() method to your object that when called will log out the car's make model and year.
function Car(options){
this.make = options.make;
this.model = options.model;
this.year = options.year;

this.speak = function(){
  return `${this.make} ${this.model} ${this.year} `;
}
}
// when you're done un comment the next few lines and run the file here in node `node app.js`.

//const herby = new Car({make: 'Volkswagen', model: 'Beetle', year: '1963'});
//console.log(herby.speak());
//const goldfinger = new Car({make: 'Aston Martin', model: 'DB5', year: '1964'});
//console.log(goldfinger.speak());


// once you get done with this, redo it all using the class keyword and a constructor function. 
class Car {
constructor(options){
this.make = options.make;
this.model = options.model;
this.year = options.year;


}
speak(){
  return ` ${this.make} ${this.model} ${this.year} `;
}
}

// extra credit

// we didn't touch on Recursion in the lecture yet, but you're going to build a recursive function now


let n = 10;
while(n >= 1) {
  console.log(n);
  n--;
}
// write a function called countDown that does the exact same thing as above, but calls itself until it can't anymore.
  // hint-> your base case will look like the logic in the while loop.
let n = 10;
const countDown = () => {
console.log(n);
n--;
if(n > 0){
  countDown();
}
}

countDown();

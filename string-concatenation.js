const ageGlenda = 25;
const ageFelipe = 30;

console.log(ageGlenda + ageFelipe); // this is a concatenation

// Ways to write a string (specially with apostrophe)
console.log("Hi I am Glenda and " + "I am married to Felipe"); // add space at the end/beggining of the string
console.log('Hello I\'m Glenda');
console.log("Hello I'm Glenda"); 

// RECOMMENDATION: when creating a variable or a string, use single quotes, like so:
console.log('Hello I am Glenda');
const myName = 'Glenda';
const myAge = 25;

// RECOMMENDATION FOR CONCATENATION: use backticks `` and call a variable by ${}
console.log(`Hello it's me and my name is ${myName}`);
console.log(`Hello it's me ${myName} and my age is ${myAge}`);

// rather than
console.log("Hello it's me " + myName + " and my age is " + myAge);
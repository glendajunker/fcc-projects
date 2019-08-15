// VARIABLES

var life = 100; // var: indicates a variable; life: name of the variable; =: we're assigning a value to it. always put ; at the end. JS reades the code in one single line, so it needs to know when each line ends. 

// when using numbers, do not type between quotes like "100" otherwise js will interpret as plain text and not numbers.

life = 50; // getting the 'life' variable and changing its value
life = life - 10; // reduces 'life' value from 100 to 90; since we have changed the life value to 50, it's gonna change from 50 to 40;

var name = "Dev Ed";

console.log(life);

// example: for a shopping website, we have a checkout button but we only want it to be available once we have an item in the basket. 
var checkout = true; // boolean is basically a value of true or false. if it's "true" the button will be available, if it's "false" it won't.

var box; // everytime you declare a variable and you don't add a value to it, it's gonna be undefined. 

var box = null; // this variable has the value of "no value";

// OTHER TYPES: OBJECT AND SYMBOL

// "var" is the old way of declaring a variable. rather than using var, we have "let" and "const".

const life = 100; // if we try to manipulate this number like "life = 50;" it's gonna give us an error: a const variable means that this value is constant, it cannot be changed. you cannot declare the variable again either, like "const life = 1000;". it's gonna show us an error saying that it has already been declared before.

// to be able to change and manipulate the variable, use "let" instead of "const".

let life = 100;
life = life - 10;



// TO SUM UP - DATA TYPES:

let life = 100; // NUMBER
let name = "Dev Ed"; // STRING
let checkout = false; // BOOLEAN
let box = null; // NULL
let box; // UNDEFINED
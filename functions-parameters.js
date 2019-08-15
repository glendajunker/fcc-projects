const name = "Dev Ed";

// FUNCTIONS: is a set of code that we write to "do things for us"; we separate a specific task that we have into a function. Real-life example: eat is the function, because it has more steps. so: Eat (prepare food, eat, wash dishes);

// we're creating a function that is going to uppercase a text. 
function upperCase () {
    console.log("Party Time!");
}

//GLOBAL SCOPE AND FUNCTION SCOPE

// the brackets {} means that all the code between them is only available for the function. so it's not available anywhere else. we call it 'FUNCTION SCOPE'. everything that it's outside a function is called 'GLOBAL SCOPE'. everything on global scope can be used in a function.

// the code below is just to register the function and save it to the memory. now we need to run the function in order to make it work, like so:

upperCase ();


function toUpperCase(text){
    const upperCased = text.toUpperCase(); // when we type '.' we can call different functions built in JS. strings have different functions built in JS, as well as numbers. ".toUpperCase" is a built-in function from JS.
    console.log(upperCased);
}

toUpperCase(name);


// In the code above, we created a function called "toUpperCase" to uppercase the parameter "text". Within the function, we created a variable (const) called "uppercased" and assigned a value of "text.toUpperCase" - it's gonna take the parameter "text" (which is going to be replaced later by "name") and uppercase it. At the end, we logged the "upperCased" variable.


function adder(num1, num2) {
    console.log(num1 + num2);
}

adder(5, 10);




const lastName = "JUNKER";

function toLowerCase(text){
    const lowerCased = text.toLowerCase();
    console.log(lowerCased);
}

function makeItItalic(text){
    const textInItalic = text.italics();
    console.log(textInItalic);
}


makeItItalic(lastName);

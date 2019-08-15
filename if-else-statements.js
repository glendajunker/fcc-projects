const age = 18;

if (age === 18) { // To check if the number is equal to the variable (10) you need to type "===" instead of "="
    console.log("You are good to go!");
} else if (age < 15) {
    console.log("Wow, you are really young");
} else {
    console.log("You are not old enough");
}

// you can compare with: "===", "<", ">", ">=" and "<=";


const dice1 = 6;
const dice2 = 3;

if (dice1 === 6 && dice2 === 6) { // if you wanna check if just one of the values is correct, use || instead of &&
    console.log("You rolled a double!");
} else {
    console.log("Try again");
}
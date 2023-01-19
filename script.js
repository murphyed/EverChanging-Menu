'strict';

//PART 1
const str = "awesome";
const num = 4;
const boo = true;
const n = null;
const un = undefined;
const obj = { name: "Canann" };
const arr = [
  "Canann",
  4,
  true,
  null,
  undefined,
  { name: "Canann" },
  ["Canann"],
];
let undecided;



//PART 2
// const inputField = document.querySelector('input');
// const buttonAdd = document.querySelector('button');
const menuList = document.querySelector('.menuList');
let numberOfItems = 5;

const menu = {
  name: "",
  cost: "",
};
// //Solution 1
// const heading = document.querySelector('h1');
// heading.innerText = "Never Changing Food Menu";

// for (let x = 1; x <= numberOfItems; x++) {
//   let { name, cost } = menu;
//   name = 'Item ' + x;
//   cost = (Math.random() * 20).toFixed(2);
//   const placeHolder = document.createElement('h3');
//   placeHolder.innerText = `${name} \n cost: $${cost}`,
//     menuList.appendChild(placeHolder);
//   console.log(name, `cost: $${cost}`);
// }

// Solution 2
//Automating everything based on 1 input
//Adding different/random names to food items
const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//An array to hold all the final random names
const names = [];

//A function to get a random nunmber based on parameter
function updateNumber(input) {
  let number = (Math.random() * input).toFixed(0);
  return number;
};

//A function to upper case first letter of a word
function upperCaseFirst(word) {
  let firstLetter = word[0].toUpperCase();
  let restLettersArray = [];
  for (let i = 1; i <= word.length; i++) {
    restLettersArray.push(word[i]);
  }
  let restLetters = restLettersArray.join('');
  return firstLetter.concat(restLetters);
}
function upperCaseFirst(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

//Run this loop if number items are greater than 0
if (numberOfItems > 0) {
  for (let j = 0; j <= numberOfItems; j++) {
    //An array to hold random letters for each word
    //based on the below loop
    let combineLetters = [];

    //Looping through random alphabets based on the argument
    //argument for updateNumber is passed here
    for (let i = 0; i <= updateNumber(alphabets.length); i++) {
      //showcases each alphabet from the array above randomely
      let individualLetters = alphabets[updateNumber(alphabets.length)];
      //adding each letter for each
      if (individualLetters !== undefined) {
        combineLetters.push(individualLetters);
      }
    }
    //Joining letters of a word in an array
    let itemName = combineLetters.join('');
    //adding joined word to names array above^
    names.push(upperCaseFirst(itemName));
  }
}
//Creating random numbers less than 20 for price
for (let x = 1; x <= numberOfItems; x++) {
  let { name, cost } = menu;
  name = `${x}. ${names[x]}`;
  cost = (Math.random() * 20).toFixed(2);
  const placeHolder = document.createElement("h3");
  placeHolder.innerText = `${name} \n cost: $${cost}`;
  menuList.appendChild(placeHolder);
}



// PART 3
function multipleArray(num, length) {
  const multiples = []
  for (let i = 1; i <= length; i++) {
    let multiply = num * i;
    multiples.push(multiply);
  }
  return multiples
}
console.log(multipleArray(4, 3));
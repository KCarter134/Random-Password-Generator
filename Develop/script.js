// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// character arrays
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s", 
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special = ["!", "@", "#", "$", "%", "^", "&", "*"];

let uppercase = true;
let lowercase = true;
let numberChars = true;
let specialChars = true;

function getSelections () {
  var includeUpper = prompt("Would you like uppercase letters? (type (y for yes) or (n for no)")
  console.log("uppercase = " + includeUpper);
  if (includeUpper == "n") {
    uppercase = false;
  }

  var includeLower = prompt("Would you like lowercase letters? (type (y for yes) or (n for no)")
  console.log("lowercase = " + includeLower);
  if (includeLower == "n") {
    lowercase = false;
  }

  var includeNumbers = prompt("Would you like numbers? (type (y for yes) or (n for no)")
  console.log("numberChars = " + includeNumbers);
  if (includeNumbers == "n") {
    numberChars = false;
  }

  var includeSpecial = prompt("Would you like to be special? (type (y for yes) or (n for no)")
  console.log("specialChars = " + includeSpecial);
  if (includeSpecial == "n") {
    specialChars = false;
  }
}

function generatePassword() {
  let result = "";
 
  var length = prompt(
    "How many characters would you like your password to be?"
  );

  console.log(length + " characters");
  // password must be between 8 & 128
  if (length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters!");
    return generatePassword();
  }
  getSelections();

  let selectedArray = [];
  if(numberChars == true){
    selectedArray = selectedArray.concat(numbers);
    console.log("numbers have been added")
  }
  if(specialChars == true){
      selectedArray = selectedArray.concat(special);
      console.log("special characters have been added")
  }
  if(lowercase == true || uppercase == true){
      selectedArray = selectedArray.concat(alphabet);
      console.log("alphabet has been added")
  }
  console.log("Array length " + selectedArray.length);
  console.log("uppercase Boolean = " + uppercase);
  console.log("lowercase Boolean = " + lowercase);
  console.log("numberChars Boolean = " + numberChars);
  console.log("specialChars Boolean = " + specialChars);
  for (let i = 0; i < length; i++) {
    var randomChoice = Math.floor(Math.random() * selectedArray.length);

    var currentChar = selectedArray[randomChoice];

  if (uppercase == true || lowercase == true) {
    var capitalLetters = Math.floor(Math.random() *2) + 1;
    if(uppercase == true && lowercase == true) {
      if (capitalLetters == 1) {
        currentChar = currentChar.toUpperCase();
      }
    } else if (uppercase == true && lowercase == false) {
      currentChar = currentChar.toUpperCase();
    }
  }

    result = result.concat(currentChar);
  }
  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


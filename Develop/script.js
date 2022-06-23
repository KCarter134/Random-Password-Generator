// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// character arrays
const numerics = ['1','2','3','4','5','6','7','8','9']
const alphabet = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g',
    'h','j','k','l','z','x','c','v','b','n','m','e']
const special = ['!','@','#','$','%','^','&','?']


let upperCase = true
let lowerCase = true
let numericChars = true
let specialChars = true

function getSelections(){
  console.log("it worked")
  upperCase = true
  lowerCase = true
  numericChars = true
  specialChars = true
  
    let askUpperCase = prompt("Include upperCase? (y/n)").toLowerCase()
    while(askUpperCase != "n" && askUpperCase != "y"){
        askUpperCase = prompt("INVALID ANSWER Include upperCase? (y/n)").toLowerCase()
    }
    if (askUpperCase == "n"){
        upperCase = false;
    }

    let askLowerCase = prompt("Include lowerCase? (y/n)").toLowerCase()
    while(askLowerCase != "n" && askLowerCase != "y"){
        askLowerCase = prompt("INVALID ANSWER Include lowerCase? (y/n)").toLowerCase()
    }
    if(askLowerCase == "n"){
        lowerCase = false
    }

    let askNumericChars = prompt("Include numbers? (y/n)").toLowerCase()
    while(askNumericChars != "n" && askNumericChars != "y"){
        askNumericChars = prompt("INVALID ANSEWR Include numbers? (y/n)").toLowerCase()
    }
    if(askNumericChars == "n"){
        numericChars = false;
    }

    let askSpecialChars = prompt("Include special chars? (y/n)").toLocaleLowerCase()
    while(askSpecialChars != "n" && askSpecialChars != "y"){
        askSpecialChars = prompt("INVALID ANSWER Include special chars? (y/n)").toLocaleLowerCase()
    }
    if(askSpecialChars == "n"){
        specialChars = false;
    }

}

function generatePassword(){
    let numChars = prompt('How many characters? 8-128: ');

    while(isNaN(numChars) || numChars < 8 || numChars > 128){
        numChars = prompt('TRY AGAIN. How many characters? 8-128: ');
    }

    getSelections();

    let selectedArray = [];
    if(numericChars){
        selectedArray = selectedArray.concat(numerics)
    }
    if(specialChars){
        selectedArray = selectedArray.concat(special)
    }
    if(upperCase || lowerCase){
        selectedArray = selectedArray.concat(alphabet);
    }


    let result = "";
    for (let i = 0; i < numChars; i++) {
        let choice = Math.floor(Math.random() * selectedArray.length);

        let currentChar = selectedArray[choice];

        if (upperCase || lowerCase) {
            let caps = Math.floor(Math.random() * 2) + 1;
            if (upperCase && lowerCase) {
                if (caps == 1) {
                    currentChar = currentChar.toUpperCase();
                }
            } else if (upperCase && !lowerCase) {
                currentChar = currentChar.toUpperCase();
            }
        }

        result = result.concat(currentChar);
    }
    console.log(result)
    return result
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


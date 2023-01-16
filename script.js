// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {

  //Generates the length of password and makes sure its between 8 and 128
  var passRequirements = [];
  var passLength = parseInt(prompt("Length of password?"));
  if (passLength < 8 || passLength > 128 || isNaN(passLength) === true){
    alert("Password Length has to be between 8 and 128 characters");
    return;
  }
  //Generates confirmations asking if they want certain requirements, generates true/false
  var lowerCase = confirm("Do you want lower case?");
  var upperCase = confirm("Do you want upper case?");
  var number = confirm("Do you want numbers?");
  var specialChar = confirm("Do you want special characters?");
  //Pushes password length into array to be searched through later using for loop to see
  passRequirements.push(passLength);
  passRequirements.push(lowerCase);
  passRequirements.push(upperCase);
  passRequirements.push(number);
  passRequirements.push(specialChar);

  return passRequirements;
}

// Function for getting a random element from an array
function getRandom(arr) {
  return Math.floor(Math.random() * arr);
}



// Function to generate password with user input
function generatePassword() {
  var passConditions = getPasswordOptions();
  var passwordArray = [];
  
  //Checks to make sure the passConditions variable actually contains a value to avoid errors
  if (passConditions != undefined){
    //Gets the password length as a seperate variable as you know the first item in the array will always be the password length
    passwordLength = passConditions[0];
    //Creates a new array from the 2nd item to the end item which only contains boolean values for whether or not a condition is wanted
    requirements = passConditions.splice(1, passConditions.length);
    
    /*Know the order in which questions are asked so if = true then concats into a new array, if all are true then it will return a full array
    in future there may be a way to either do this as a loop or through a function
    feel comfortable hard coding the requirements[i] as it is a set number of requirements and if more are added it can be added here as well */
    if (requirements[0] === true){
      passwordArray = passwordArray.concat(lowerCasedCharacters);
    }
    if(requirements[1] === true){
      passwordArray = passwordArray.concat(upperCasedCharacters);
    }
    if (requirements[2] === true){
      passwordArray = passwordArray.concat(numericCharacters);
    }
    if (requirements[3] === true){
      passwordArray = passwordArray.concat(specialCharacters);
    }
    //Exception handling and returns undefined if nothing is equal to true
    else if (requirements[0] === false && requirements[1] === false && requirements[2] === false && requirements[3] === false){
      alert("You must have at least 1 selected")
      return;
    }

    //Creates array for completed password to be stored in
    var completePassword = []
    //Loops through for the length of the password input
    for (var i = 0; i < passwordLength; i++){
      //Generates a random character number
      var randomCharacter = getRandom(passwordArray.length);
      //Finds the array item corresponding with the random number selected
      var passwordItem = passwordArray[randomCharacter];
      //Pushes this array item into a new array
      completePassword.push(passwordItem);
    }
    //returns the array and converts it to a string without commas between the data like a usual array
    return(completePassword.join(""));
  }
}




// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
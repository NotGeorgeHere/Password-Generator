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
  console.log(passConditions);
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
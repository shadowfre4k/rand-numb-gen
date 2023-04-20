// Creating a function for the generate password logic
// passwordCriteria contains all necessary string data needed to generate the password
const passwordCriteria = {
  num: "1234567890",
  specialChar: "!@#$%&'()*+,^-./:;<=>?[]_`{~}|",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
};

//generate password function that is called via the callback function for write password
function generatePassword() {
  //set up a variable to store our new password, leave it blank so we can fill in any characters
  let password = "";

  // prompt window  to ask how many characters
  let characterAmount = window.prompt(
    "Enter the amount of characters you want for your password. NOTE: Must be between 8-128 characters"
  );

  // yes or no to numbers
  if (characterAmount >= 8 && characterAmount <= 128) {
    let number = window.confirm("Would you like to include numbers?");

    //if yes add numbers to character pool
    if (number) {
      password = password + passwordCriteria.num;
    }

    // yes or no to special characters
    let specialCharCharacters = window.confirm(
      "Would you like to include special characters?"
    );

    // if yes add special characters to character pool
    if (specialCharCharacters) {
      password = password + passwordCriteria.specialChar;
    }

    // yes or no to lower case
    let lowerCaseCase = window.confirm(
      "Would you like to include lowercase letters?"
    );

    //if yes add lowercase to character pool
    if (lowerCaseCase) {
      password = password + passwordCriteria.lowerCase;
    }

    //yes or no to uppercase letters
    let upperCaseCase = window.confirm(
      "Would you like to include uppercase letters?"
    );

    //if yes, add uppercase to chracter pool
    if (upperCaseCase) {
      password = password + passwordCriteria.upperCase;
    }

    //if no options are selected then it will fail to continue
    if (
      number != true &&
      specialCharCharacters != true &&
      lowerCaseCase != true &&
      upperCaseCase != true
    ) {
      window.alert("You need to select at least one option, please try again!");
    }

    // function to select characters from our pool
    let randomPassword = "";

    // for loop using the characer amount to limit the amount of iterations
    for (let i = 0; i < characterAmount; i++) {
      randomPassword += password[Math.floor(Math.random() * password.length)];
    }
    //must return to be read by outer functions
    return randomPassword;
  }

  // if character amount is out of range user must restart
  else {
    window.alert("Your amount is out of range");
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

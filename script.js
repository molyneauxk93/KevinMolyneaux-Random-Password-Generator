// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Creating needed string and arrrays for random password generator

  var alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz";
  var alphabetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChars = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', "]"];
  var criteria = [];
  var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  //this array exists to ensure when random characters are being selected from the criteria, all required character types will always appear in the finalPassword
  var guaranteeChars = [];

  
  // Gather users desired password length
  var passwordLength = prompt("Please enter you desired password length. (Must between between 8 and 128 characters): ");

  //Validate password length
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log("You have met the length criteria");
  } else {
    alert("You have not met the length criteria. Please refresh and try again.");
  }

  // Gather users desired character types to be included 
  var passwordUpperCase = confirm("Would you like to include Uppercase characters?");

  var passwordLowerCase = confirm("Would you like to include lowercase characters?");

  var passwordNumeric = confirm("Would you like to include numeric values?");

  var passwordSpecial = confirm("Would you like to include special characters?");

  // Validate at least one character type is selected
  if (passwordUpperCase === true || passwordLowerCase === true || passwordNumeric === true || passwordSpecial === true) {
    console.log("You have selected at least one of the character types.")
  } else {
    alert("You must select at least one character type! Refresh page and try again.");
  }

  // If user selected uppercase characters to be included, we push a random uppercase character to guaranteed characters array, and add the uppercase string to the critera
  if (passwordUpperCase === true) {

    guaranteeChars.push(alphabetUpperCase[Math.floor(Math.random() * alphabetUpperCase.length)]);

    criteria = criteria.concat(alphabetUpperCase.split(""));

  }

 // If user selected lower case characters to be included, we push a random lowercase character to guaranteed characters array, and add the lowercase  string to the critera
  if (passwordLowerCase === true) {

    guaranteeChars.push(alphabetLowerCase[Math.floor(Math.random() * alphabetLowerCase.length)]);

    criteria = criteria.concat(alphabetLowerCase.split(""));

  }

// If user selected numbers to be included, we push a random number to guaranteed characters array, and add the numeric array to the critera
  if (passwordNumeric === true) {

    guaranteeChars.push(numeric[Math.floor(Math.random() * numeric.length)]);

    criteria = criteria.concat(numeric)

  }

  // If user selected special characters to be included, we push a random special character to guaranteed characters array, and add the special characters array to the critera
  if (passwordSpecial === true) {

    guaranteeChars.push(specialChars[Math.floor(Math.random() * specialChars.length)]);

    criteria = criteria.concat(specialChars);

  }

  // create finalPassword variable to be returned 
  var finalPassword = '';

  //Assigns characters from the guaranteeChars variable to the finalPassword variable as a string
  finalPassword = guaranteeChars.join("")

  //for loop that iterates controlled by the desired password length subtracing the length of the guaranteedChars array length
  for (var i = 0; i < passwordLength - guaranteeChars.length; i++) {

    //assignment add a random character from the criteria array to the finalPassword string

    finalPassword += criteria[Math.floor(Math.random() * criteria.length)];

  }
  
  //returns the finalPassword which was generated
  return finalPassword;

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

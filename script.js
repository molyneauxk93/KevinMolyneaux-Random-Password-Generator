// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var finalPassword = '';
  var alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz";
  var alphabetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChars = ['!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',"]"];

  console.log(specialChars.length);
  // Gather user input 

  var passwordLength = prompt("Please enter you desired password length. (Must between between 8 and 128 characters): ");
  
   //Validate password length
   if (passwordLength >= 8 && passwordLength <= 128){
      console.log("You have met the length criteria");  
    } else {
    alert("You have not met the length criteria. Please refresh and try again.");
    }

  var passwordUpperCase = confirm("Would you like to include Uppercase characters?");
  
  var passwordLowerCase = confirm("Would you like to include lowercase characters?"); 
  
  var passwordNumeric = confirm("Would you like to include numeric values?");
  
  var passwordSpecial = confirm("Would you like to include special characters?");
  
  // Validate at least one character type is selected
  if (passwordUpperCase === true || passwordLowerCase === true || passwordNumeric === true || passwordSpecial === true){
    console.log("You have selected at least one of the character types.")
  } else {
    alert("You must select at least one character type! Refresh page and try again.");
  }

  for (var i = 0; i <= passwordLength; i++) {
    
    var tempPassword = '';

    //generates random uppercase letters if condition is true
   if(passwordUpperCase === true){
    tempPassword += alphabetUpperCase[Math.floor(Math.random() * alphabetUpperCase.length)];
    
   }

   //generates random lowercase letters if condition is true
   if(passwordLowerCase === true) {
    //generate random lower letters
    tempPassword += alphabetLowerCase[Math.floor(Math.random() * alphabetLowerCase.length)];
   
   }

   //generates random numbers if condition is true
   if(passwordNumeric === true) {
    tempPassword += Math.floor(Math.random() * 11);
    
   }
 //generates random special characters if condition is true
   if(passwordSpecial === true) {
    tempPassword += specialChars[Math.floor(Math.random() * specialChars.length)];
    
   }
   
   finalPassword += tempPassword;

  }

  finalPassword = finalPassword.slice(0,passwordLength);

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

// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var numberCharacters = "1234567890";
var specialCharacters = " !#$%&')(*=,-./;:<>?@][\^}{_|~"


// Write password to the #password input
function generatePassword() {
  var characterLength = window.prompt("How many characters would you like the password to be?");
  if(characterLength>=8 && characterLength<=128){
    console.log(characterLength)
  }
  else{
    window.alert("Password must be between 8-128 characters.")
  };

  var uppercase = window.confirm("Would you like to use uppercase characters?")
  if(uppercase) {
    console.log("Uppercase")
  }
  else {
    console.log("No")
  };

  var lowercase = window.confirm("Would you like to use lowercase characters?")
  if(lowercase) {
    console.log("Lowercase")
  }
  else {
    console.log("No")
  };

  var numbers = window.confirm("Would you like to use numbered characters?")
  if(numbers) {
    console.log("Numbers")
  }
  else {
    console.log("No")
  };

  var special = window.confirm("Would you like to use special characters?")
  if(special) {
    console.log("Special")
  }
  else {
    console.log("No")
  };

};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

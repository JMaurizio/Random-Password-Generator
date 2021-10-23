// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseCharacters ="";
var lowercaseCharacters ="";
var numberCharacters ="";
var specialCharacters ="";
var characterLength ="";
var newPassword ="";
var characters =[uppercaseCharacters,lowercaseCharacters,numberCharacters,specialCharacters];


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
    uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    console.log(uppercaseCharacters)
  }
  else {
    uppercaseCharacters =""
    console.log(uppercaseCharacters)
  };

  var lowercase = window.confirm("Would you like to use lowercase characters?")
  if(lowercase) {
    lowercaseCharacters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    console.log(lowercaseCharacters)
  }
  else {
    lowercaseCharacters =""
    console.log(lowercaseCharacters)
  };

  var numbers = window.confirm("Would you like to use numbered characters?")
  if(numbers) {
    numberCharacters =["1","2","3","4","5","6","7","8","9","0"]
    console.log(numberCharacters)
  }
  else {
    numberCharacters =""
    console.log(numberCharacters)
  };

  var special = window.confirm("Would you like to use special characters?")
  if(special) {
    specialCharacters =["!","#","$","%","&","'",")","(","*","=",",","-",".","/",";",":","<",">","?","@","]","[","|","~"]
    console.log(specialCharacters)
  }
  else {
    specialCharacters =""
    console.log(specialCharacters)
  };
  
  for (i=0; i < characterLength; i++) {
    characters[Math.floor(Math.random()*characters.length)];

  };

};


  for (i=0; i < characterLength; i++) {
    uppercaseCharacters[Math.floor(Math.random()*uppercaseCharacters.length)];

  };


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
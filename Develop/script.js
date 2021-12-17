// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input

function generatePassword(){
  var pwordLength = window.prompt("What is the length of your password? \n(min 8 max 128)");
  var pwordLower = window.confirm("Should your password include lower case characters?");
  var pwordUpper = window.confirm("Should your password include upper case characters?");
  var pwordNumeric = window.confirm("Should your password contain numbers?")
  var pwordSpecial = window.confirm("Should your password contain special characters?")
  
  if(pwordLower){
  
  }
  if(pwordUpper){

  }
  if(pwordNumeric){

  }
  if(pwordSpecial){

  }
  
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generatePassword();
// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input

function generatePassword(){
  var pwordLength = window.prompt("What is the length of your password? \n(min 8 max 128)");
  if(pwordLength<8||pwordLength>128){
    alert("The password length must be between 8 and 128 characters");
    return;
  }
  var pwordLower = window.confirm("Should your password include lower case characters?");
  var pwordUpper = window.confirm("Should your password include upper case characters?");
  var pwordNumeric = window.confirm("Should your password contain numbers?");
  var pwordSpecial = window.confirm("Should your password contain special characters?");
  var pchar;
  if(pwordLower){
  pchar= "abcdefghijklmnopqrstuvwxyz"
  }
  if(pwordUpper){
    pchar= pchar.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if(pwordNumeric){
    pchar=pchar.concat("1234567890");
  }
  if(pwordSpecial){
    pchar= pchar.concat("!#$%&'()*+,-./:;<=>?@[]^_`{|}~");
  }
  console.log(pchar);
  returnedPassword = "";
  for (var i = 0, n = pchar.length; i < pwordLength; ++i) {
    returnedPassword += pchar.charAt(Math.floor(Math.random() * n));
}
console.log(returnedPassword);
var passwordPlace = document.querySelector("#password");
passwordPlace.value = returnedPassword;
}


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
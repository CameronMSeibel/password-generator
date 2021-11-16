// Assignment Code
var generateBtn = document.querySelector("#generate");
var lettersList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialList = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var pwdLength = prompt("How long will this password be? Please input a number between 8 to 128.");
  while(pwdLength < 8 || pwdLength > 128){
    pwdLength = prompt("How long will this password be? Please input a number between 8 to 128.");
  }
  var criteria = promptPasswordCriteria();
  while(!(criteria.lowercase || criteria.uppercase || criteria.numbers || criteria.special)){
    alert("Password must contain at least one type of character.");
    criteria = promptPasswordCriteria();
  }
  var password = "";
  for(i = 0; i < pwdLength; i++){
    var options = [];
    if(criteria.lowercase){
      options.push(pickRand(lettersList));
    }
    if(criteria.uppercase){
      options.push(pickRand(lettersList).toUpperCase());
    }
    if(criteria.numbers){
      options.push(pickRand(numbersList));
    }
    if(criteria.special){
      options.push(pickRand(specialList));
    }
    password += pickRand(options);
  }
  return password;
}

function promptPasswordCriteria(){
  var criteria = {lowercase: false, uppercase: false, numbers: false, special: false};
  criteria.lowercase = confirm("Can this password contain lowercase letters?");
  criteria.uppercase = confirm("Can this password contain uppercase letters?");
  criteria.numbers = confirm("Can this password contain numbers?");
  criteria.special = confirm("Can this password contain special characters?");
  return criteria;
}

function pickRand(list){
  return list[Math.floor(Math.random() * list.length)];
}

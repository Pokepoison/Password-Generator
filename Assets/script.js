// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var passwordLength = prompt("How many characters would you like your password to be? (8-128)"); 
    var passwordLength = parseInt(passwordLength);
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Please enter a number between 8 and 128.");
        return generatePassword();
    }
   
    var passwordLowercase = confirm("Would you like to include lowercase letters?");
    var passwordUppercase = confirm("Would you like to include uppercase letters?");
    var passwordNumbers = confirm("Would you like to include numbers?");
    var passwordSpecial = confirm("Would you like to include special characters?");
    if (passwordLowercase === false && passwordUppercase === false && passwordNumbers === false && passwordSpecial === false) {
        alert("Please select at least one character type.");
        return generatePassword();
    }
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var special = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    var password = "";
    var passwordCharacters = "";
    
    for (var i = 0; i < passwordLength; i++) {
        if (passwordLowercase === true) {
            passwordCharacters += lowercase;
        }
        if (passwordUppercase === true) {
            passwordCharacters += uppercase;
        }
        if (passwordNumbers === true) {
            passwordCharacters += numbers;
        }
        if (passwordSpecial === true) {
            passwordCharacters += special;
        }
        password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
    }
    return password;
}

//provided below by the University of California, Berkeley Coding Bootcamp 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

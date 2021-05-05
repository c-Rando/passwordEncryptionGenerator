// Assignment Code

//special character array
var specialChars = ["", "", ]

// number
var numbArray = ["1", "2",]

// lower
var lowerCase = ["a", "b"]

// upper
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]

// function to prompt user for passwork options -

function getPassward () {

      // create a variable to store the length of the password - var 
        var length = parseInt(prompt("How many characters would you like your password to be?"));
        


        //create a conditional statement to make sure password is actually a number
      if (Number.isNaN(length)){
        alert("Password must be a number");
        return null
      };

        //conditional statement to check if password length is atleast 8
      if (length < 8){
        alert("Password length must be at least 8 characters");
        return null

      };

        // conditional statement ot check if passwork length is atleast 128 characters
      if (length > 128){
        alert("Password length exceeds least 128 characters");
        return null
      };

  // confirmation prompts for the type to characters the user wants to use in their password.



  // check statement to see if user uses at least 1 of each character types -- return user back to start end   
        

};

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

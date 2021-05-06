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

function getPassword () {

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

  // create confirmation prompts for the type to characters the user wants to use in their password.



  // need to create a conditional check statement to see if user uses at least 1 of each character types -- return user back to start end   
  
  // create an object to store the user input 
  var possiblePass = {
    // need to store length and call characters selected by user
    length: length,
    specialChars: specialChars,
    lowerCase: lowerCase,
    upperCase: upperCase,
    numbArray: numbArray,
  }

  return possiblePass;

};

// create a function for getting a random element from an array

function generatePassword(arr){
  var random = // smath problem array.length




  // save them to a variable
var rand = arr[random]
  // looping through this will print what the user wants (CREATE A RANDOM ARRAY, WHATEVER THE MATH PROBLEM STOPS AT GETS PLUGGED INTO THE ARRAY)
  // if the user only picked upper and lower, itll go into those arrays only, then plugs it into the equation 

return rand;
  //creating a variable because its constantly updating, and youre able to call the variable wherever you want
}

// create a function to generate the password with the user input
function generatingPassword() {

// set a variable to call my getPassword Function
  var options = getPassword();

  // variable to store the password as it is being concatenated
  var passResult = [];
  // this is a new variable that stores the password as its being concatenated

  // create a variable to store the types of characters to include into the password
  var possibleChars = [];

  // create a variable to store each type of guaranteed character
  var guarChars = [];


// WE FILTER THROUGH ALL OF THESE OPTIONS BY CASCADING THROUGH EACH SET OF VARIABLES

// WRITE A CONDITION THAT ADDS THE ARRAY FOR SPECIAL CHARACTERS INTO THE ARRAY OF POSSIBLE CHARACTERS BASED ON THE USER INPUT
// THEN PUSH THE NEW RANDOM CHARACTERS INTO THE GUARANTEED CHARACTERS // TWO METHODS TO LOOK UP ARE PUSH AND CONCAT

if (options.specialChars) {
  // calling options here and looking at special characters, possible characters = possible characters, then pass in the new value
  possibleChars = possibleChars.concat(specialChars);
  guarChars.push(generatePassword(specialChars))
}

  //create a for loop to iterate over the password length from the options object 
for (var i = 0 ; i < options.length; i++){
  var possibleCharacter = generatePassword(possibleCharacter);
  
  passResult.push(possibleCharacter)
}


return passResult.join("");
// joins the returned result in an empty string
}


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Assignment Code



// ARRAYS []
//special 
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", ",", "_", "+", "-", "~"];
console.log(specialChars);
// number 
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
console.log(numeric);
// lower
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(lowerCase);
// upper
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];
console.log(upperCase);
var ultArray = [];


var generateBtn = document.getElementById("generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function passwordOptions() {
  // gathering input parameters or options that user wants for their password // must return an object that stores all of these options, call the object in another function. this function will return that object in another location

  var length = parseInt(
    prompt("How many characters would you like your password to be?")
  );
  console.log(length);
  if (Number.isNaN(length)) {
    alert("Your password must contain a number...");
    return null
  };

  //conditional statement to check if password length is atleast 8
  if (length < 8) {
    alert("Your password length must be at least 8 characters...");
    return null
  };
  // conditional statement ot check if passwork length is atleast 128 characters
  if (length > 128) {
    alert("Your password length exceeds the maximum length (128 characters)...");
    return null
  };
  var usedSpec = confirm("Would you like your password to contain special characters? ")
  console.log("specCheck");

  var usedNumeric = confirm("Would you like your password to contain numeric characters?")
  console.log("numbCheck")

  var usedLowerCase = confirm("Would you like your password to contain lowercase alphabet characters?")
  console.log("caseCheckLower")

  var usedUpperCase = confirm("Would you like your password to contain uppercase alphabet characters?")
  console.log("caseCheckUpper")

  if (usedLowerCase === false && usedUpperCase === false && usedNumeric === false && usedSpec === false) {
    alert("Please select one type of character");
  };

  
  // represents an object 
  var options = {
    // property : value or key value pair... in order to get a value , you need a key
    passwordLength: length,
    specialChars: usedSpec,
    lowerCase: usedLowerCase,
    upperCase: usedUpperCase,
    numeric: usedNumeric
  };
  console.log(options)
  return options;
};


//create a function to retrieve a random element form an array

function getRandomElement(array) {
  // function getRandomElement(arr) { (array) = equals a parameter that we are passing to a function
  var randomIndex = Math.floor(Math.random() * array.length);
  //  returns a random index from the array, with this 
  var randomElement = array[randomIndex];
  // array is passed to function, index it with this random index we returned above
  return randomElement;
};

function generatingPassword() {
  //create variable to call getPassword function
  var options = passwordOptions();
  // stores final password
  var passResult = []; // empty array
  // stores the possible characters to be included in password
  var possibleChars = [];
  // create a variable to store guaranteed characters
  var guarChar = [];


  if (options.specialChars) {
    possibleChars = possibleChars.concat(specialChars);
    guarChar.push(getRandomElement(specialChars));
    // array that were going to, and then the value we want to push into it 
  }
  if (options.lowerCase) {
    possibleChars = possibleChars.concat(lowerCase);
    guarChar.push(getRandomElement(lowerCase));
  }
  if (options.upperCase) {
    possibleChars = possibleChars.concat(upperCase);
    guarChar.push(getRandomElement(upperCase));
  }
  if (options.numeric) {
    possibleChars = possibleChars.concat(numeric);
    guarChar.push(getRandomElement(numeric));
  }

  for (var i = 0; i < options.passwordLength; i++) {
    
    var chosenChar = getRandomElement(possibleChars);

    passResult.push(chosenChar);
    // console.log(passResult)
  }
  console.log(guarChar)
  for (var i = 0; i < guarChar.length; i++) {
    passResult[i] = guarChar[i]
  }

  // .join will join all of the elements of the array into a string 
  console.log(passResult);
  // this becomes an array of strings
  return passResult.join("");
};


function writePassword() {
  var finalPassword = generatingPassword();
  var password = document.querySelector("#password");
  password.value = finalPassword 
};








// function to prompt user for passwork options -

// function getPassword () {

//   // create a variable to store the length of the password - var 
//     //create a conditional statement to make sure password is actually a number

// }



  // create confirmation prompts for the type of characters the user wants to use in their password.



  // need to create a conditional check statement to see if user uses at least 1 of each character types -- return user back to start end   

//   // create an object to store the user input 
//   var possiblePass = {
//     // need to store length and call characters selected by user
  //   passwordLength: length,
  //   specialChars: specialChars,
  //   lowerCase: lowerCase,
  //   upperCase: upperCase,
  //   numeric: numeric,
  // }
//   return possiblePass;
// };

// // create a function for getting a random element from an array

// // function generatePassword(possiblePass) {// s math problem array.length
// //   var i = Math.floor(Math.random() * possiblePass.length)
// //     for (var i = 0; i < 5; i++) {
// //     console.log ("this is the current value of i: " + i + ".")
// //   }
// // }






// // // Write password to the #password input
// // function passwordOptions() {
// //   var password = generatePassword();
// //   var passwordText = document.querySelector("#password");
// //   passwordText.value = password;
// //   console.log(password)

// //   // save them to a variable
// // var randomPass = possiblePass[random];
// // console.log(possiblePass);
// //   // looping through this will print what the user wants (CREATE A RANDOM ARRAY, WHATEVER THE MATH PROBLEM STOPS AT GETS PLUGGED INTO THE ARRAY)

// //   if (lowerCase===true) {
// //     caseArray.push(lowerCase)
// //   }
// //   if (upperCase===true) {
// //     caseArray.push(lowerCase)
// //   }
// //   if (numeric===true) {
// //     caseArray.push(numeric)
// //   }
// //   if (specialChars===true) {
// //     caseArray.push(specialChars)
// //   }

// //   // if the user only picked upper and lower, itll go into those arrays only, then plugs it into the equation 

// // return randomPass;
// //   //creating a variable because its constantly updating, and youre able to call the variable wherever you want
// // };

// // create a function to generate the password with the user input
// function generatingPassword() {
// // set a variable to call my getPassword Function
//   var options = getPassword();
//   // variable to store the password as it is being concatenated
//   var passResult = [];
//   // this is a new variable that stores the password as its being concatenated
//   // create a variable to store the types of characters to include into the password
//   var possibleChars = [];
//   // create a variable to store each type of guaranteed character
//   var guarChars = [];
// };
// }
// // WE FILTER THROUGH ALL OF THESE OPTIONS BY CASCADING THROUGH EACH SET OF VARIABLES

// // WRITE A CONDITION THAT ADDS THE ARRAY FOR SPECIAL CHARACTERS INTO THE ARRAY OF POSSIBLE CHARACTERS BASED ON THE USER INPUT
// // THEN PUSH THE NEW RANDOM CHARACTERS INTO THE GUARANTEED CHARACTERS // TWO METHODS TO LOOK UP ARE PUSH AND CONCAT


//   // calling options here and looking at special characters, possible characters = possible characters, then pass in the new value


//   //create a for loop to iterate over the password length from the options object 

// // joins the returned result in an empty string

// // Write password to the #password input

// // Add event listener to generate button






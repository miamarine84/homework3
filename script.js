// This was done in a much simpler way with prompts and confirms but essentially the same thing
let generateBtn = document.querySelector("#generate");
let textarea = document.querySelector('#password');
let choices = '';

// This is where  we have our logic depending on our users choices

generateBtn.addEventListener("click", function(){
  finalPw = '';
  userChar = prompt("How many characters would you like?")
  if(userChar < 8 || userChar > 120 || userChar == undefined){
    alert("Please 8 - 120 characters")
} else{
  tester();
}});

function tester(){
  userUpper = confirm('Would you like uppercase characters?'),
  userLower = confirm('Would you like lowercase characters?'),
  userNumeric = confirm('Would you like numeric characters?'),
  userSpecial = confirm('Would you like special characters?'),
  choices = '';

    if(userUpper == true){
      choices +='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    };

    if(userLower == true){
      choices +='abcdefghijklmnopqrstuvwxyz';
    };

    if(userNumeric == true){
      choices +='0123456789';
    };

    if(userSpecial == true){
      choices += '!@#$%^&*]+$';
    };
    password();
};

// After the logic we randomize the password using this for loop

let finalPw = '';

function password(){
  for (var i = 0; i < userChar; i++){
    finalPw += choices[Math.floor(Math.random()* choices.length)];
  } 
  var paragraph = document.getElementById("password");
  paragraph.textContent = finalPw;
}





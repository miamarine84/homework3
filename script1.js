// generateBtn is the main Password Generator button in index1.html
// textarea is to push the finalPw in to the webpage
// userChar is the # the user chooses for their password
// choices is the strings in the variables that will be chosen depending on  the users choices

let generateBtn = document.getElementById('generate');
let textarea = document.querySelector('#password');
let choices = [];

// This is where  we have our logic depending on our users choices

generateBtn.addEventListener("click", function(){

    userChar = document.getElementById("quantity").value;


    if(userChar < 8 || userChar > 120 || userChar == undefined){
        alert("Please 8 - 120 characters")

    } else {

    finalPw="";
    
    var rd1 = document.getElementById("rd1");
    if(rd1.checked == true){
         choices += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    };
    var rd2 = document.getElementById("rd2");
    if(rd2.checked == true){
         choices += 'abcdefghijklmnopqrstuvwxyz';
    };
    var rd3 = document.getElementById("rd3");
    if(rd3.checked == true){
        choices += '0123456789';
    };     
    var rd4 = document.getElementById("rd4");
    if(rd4.checked == true){
        choices += '!@#$%^&*]+$';
    };

    password();
}});

// After the logic we randomize the password using this for loop

let finalPw= "";

function password(){
    for ( var i = 0; i < userChar; i++ ) {
      finalPw += choices[Math.floor(Math.random() * choices.length)];
   }

   var paragraph = document.getElementById("password");
   paragraph.textContent = finalPw;
   x();
}

// Where we reset our users choices for him

function x() {
    document.getElementById("newForm").reset();
    return;
 }


// All feedback is greatly appreciated
